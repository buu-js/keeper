import { RoleListAccess, Permission, RoleAccess } from "./type"
import { flatten, buildRBACIndex, IndexedRBAC } from "./util"

export type { Permission, Access, RoleAccess, RoleListAccess } from "./type"

export function createRBAC<
  TRole extends string = string,
  TResource extends string = string,
  TAction extends string = string
>(roleListAccess: readonly RoleListAccess<TRole, TResource, TAction>[] = []) {
  let indexed: IndexedRBAC = buildRBACIndex(flatten(roleListAccess as any))

  function init(
    newRoleListAccess: readonly RoleListAccess<TRole, TResource, TAction>[]
  ) {
    indexed = buildRBACIndex(flatten(newRoleListAccess as any))
  }

  function can(
    role: TRole | readonly TRole[],
    action: TAction | "all",
    target: TResource
  ): Permission<TRole, TResource, TAction> {
    const roles = Array.isArray(role) ? role : [role]

    for (const r of roles) {
      const access = indexed.roleAccessMap.get(`${r}:${target}`)
      if (access) {
        if (access.can?.includes("all") || access.can?.includes(action as any)) {
          return { granted: true, access: access as any }
        }
      }
    }

    return { granted: false }
  }

  function getAllRoles(role: TRole | readonly TRole[]): TRole[] {
    const roles = Array.isArray(role) ? role : [role]

    const inheritRoles = indexed.roleAccess
      .filter((opt) => roles.includes(opt.role))
      .map((opt) => opt.inherit)

    return [...roles, ...inheritRoles.flat()].filter(
      (v, i, a) => a.indexOf(v) === i
    ) as TRole[]
  }

  function getRoleAccess(): readonly RoleAccess<TRole, TResource, TAction>[] {
    return indexed.roleAccess as any
  }

  return { init, can, getAllRoles, getRoleAccess }
}
