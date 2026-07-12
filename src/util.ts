import { RoleAccess, RoleListAccess } from "./type"

export function flatten(
  roleListAccess: readonly RoleListAccess<any, any, any>[]
): RoleAccess<any, any, any>[] {
  const result: RoleAccess<any, any, any>[] = []

  const rawRolesMap = new Map<string, RoleListAccess<any, any, any>>(
    roleListAccess.map((r) => [r.role, r])
  )

  function resolveInherit(roleName: string, visited = new Set<string>()): string[] {
    if (visited.has(roleName)) return []
    visited.add(roleName)

    const current = rawRolesMap.get(roleName)
    if (!current) return []

    return current.inherit
      .reduce((acc, nextRole) => {
        return acc.concat(nextRole, resolveInherit(nextRole, visited))
      }, [] as string[])
      .filter((v: string, i: number, a: readonly string[]) => a.indexOf(v) === i)
  }

  const mergeUniq = (source: readonly string[], target: readonly string[]) =>
    [...source, ...target].filter((v, i, a) => a.indexOf(v) === i)

  for (const current of roleListAccess) {
    const allInheritedRoles = resolveInherit(current.role)

    const resourceMap = new Map<string, string[]>()

    for (const access of current.access) {
      resourceMap.set(access.on, [...(access.can || [])])
    }

    for (const inheritRoleName of allInheritedRoles) {
      const inheritRoleData = rawRolesMap.get(inheritRoleName)
      if (!inheritRoleData) continue

      for (const access of inheritRoleData.access) {
        const existingActions = resourceMap.get(access.on) || []
        resourceMap.set(access.on, mergeUniq(existingActions, access.can || []))
      }
    }

    for (const [on, canActions] of resourceMap.entries()) {
      result.push({
        can: canActions,
        inherit: [...current.inherit],
        on: on,
        role: current.role
      })
    }
  }

  return result
}

export interface IndexedRBAC {
  roleAccess: RoleAccess<any, any, any>[]
  roleAccessMap: Map<string, RoleAccess<any, any, any>>
}

export function buildRBACIndex(roleAccess: RoleAccess<any, any, any>[]) {
  const roleAccessMap = new Map<string, RoleAccess<any, any, any>>()

  for (const access of roleAccess) {
    roleAccessMap.set(`${access.role}:${access.on}`, access)
  }

  return { roleAccess, roleAccessMap }
}
