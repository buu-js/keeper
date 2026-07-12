import { describe, expect, it } from "vitest"
import { createRBAC } from "../src"

const resources = Array.from({ length: 120 }, (_, i) => `resource_${i + 1}` as const)

const actions = [
  "create",
  "read",
  "view",
  "save",
  "update",
  "delete",
  "approve",
  "reject",
  "export",
  "import"
] as const

function randomActions(seed: number) {
  return actions.filter((_, i) => (seed + i) % 3 === 0)
}

const roles = Array.from({ length: 50 }, (_, roleIndex) => ({
  role: `[Role${roleIndex + 1}]`,

  inherit:
    roleIndex === 0
      ? []
      : roleIndex % 7 === 0
        ? [`[Role${roleIndex}]`, `[Role${Math.max(1, roleIndex - 2)}]`]
        : [`[Role${roleIndex}]`],

  access: resources
    .filter((_, resourceIndex) => (resourceIndex + roleIndex) % 4 === 0)
    .map((resource, resourceIndex) => ({
      on: resource,
      can: randomActions(roleIndex + resourceIndex)
    }))
}))

const acl = createRBAC(roles)

describe("Generated RBAC", () => {
  it("should create all roles", () => {
    expect(roles).toHaveLength(50)
  })

  it("should build role access", () => {
    expect(acl.getRoleAccess().length).toBeGreaterThan(1000)
  })

  it("should resolve inheritance", () => {
    expect(acl.getAllRoles("[Role50]")).toContain("[Role1]")
  })

  it("should grant inherited permission", () => {
    expect(acl.can("[Role50]", "read", "resource_1").granted).toBe(true)
  })

  it("should reject unknown resource", () => {
    //@ts-ignore
    expect(acl.can("[Role50]", "read", "unknown").granted).toBe(false)
  })
})
