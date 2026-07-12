import { describe, expect, it } from "vitest"
import { createRBAC } from "../src"
import { roles } from "./roles"

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
