# 👻 Buu Keeper
A modern, lightweight Role-Based Access Control (RBAC) for secure applications.

Manage user permissions effortlessly with intuitive inheritance hierarchies, zero dependencies, and strict type safety out of the box.

--

## Features

* 🛡️ Role-Based Access Control (RBAC) made incredibly simple and declarative
* 🔒 Strict Type Safety leveraging TypeScript generics for validation of roles, resources, and actions
* 🚀 Zero Dependencies to keep your application bundle light, clean, and secure
* 🔍 O(1) Access Check utilizing high-performance map indexing for instant resolution

---

## Installation

```sh
pnpm add @buujs/keeper
```

---

## Commands

```typescript
import { createRBAC } from "@buujs/keeper";

const roleUser = {
  role: "[User]",
  inherit: [],
  access: [
    {
      on: "vendor_info",
      can: ["read", "view", "save"],
    },
    {
      on: "vendor_account",
      can: ["read", "save"],
    },
    {
      on: "vendor_approval",
      can: ["view", "read", "save"],
    },
    {
      on: "admin",
      can: ["read"],
    },
    {
      on: "user",
      can: ["read"],
    },
    {
      on: "category",
      can: ["read"],
    },
    {
      on: "mail",
      can: ["read"],
    },
  ],
} as const;

const roleVerifier = {
  role: "[Verifier]",
  inherit: ["[User]"],
  access: [
    {
      on: "vendor_account",
      can: ["read", "view", "save"],
    },
  ],
} as const;

const roleDBAdmin = {
  role: "[DBAdmin]",
  inherit: [],
  access: [
    {
      on: "vendor_info",
      can: ["read", "save"],
    },
    {
      on: "vendor_account",
      can: ["read", "save"],
    },
    {
      on: "vendor_approval",
      can: ["read", "save"],
    },
    {
      on: "category",
      can: ["read", "save"],
    },
    {
      on: "mail",
      can: ["read", "save"],
    },
    {
      on: "workflow",
      can: ["read", "save"],
    },
  ],
} as const;

const roleAdmin = {
  role: "[Admin]",
  inherit: ["[User]"],
  access: [
    {
      on: "vendor_info",
      can: ["all"],
    },
    {
      on: "vendor_account",
      can: ["all"],
    },
    {
      on: "vendor_approval",
      can: ["all"],
    },
    {
      on: "category",
      can: ["all"],
    },
    {
      on: "user",
      can: ["all"],
    },
    {
      on: "mail",
      can: ["all"],
    },
    {
      on: "workflow",
      can: ["all"],
    },
  ],
} as const;

const roles = [roleUser, roleVerifier, roleDBAdmin, roleAdmin] as const;

const acl = createRBAC(roles);

const permission = acl.can("[Admin]", "read", "user");

console.log(permission);
// Output: { granted: true, access: { ... } }

// TypeScript will throw a compilation error if you typo or pass unregistered entries:
// @ts-expect-error: "[Guest]" is not assignable to registered roles
acl.can("[Guest]", "read", "user");
```
