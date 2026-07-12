// src/type.ts

export interface Access<
  TResource extends string = string,
  TAction extends string = string
> {
  readonly on: TResource
  readonly can?: readonly TAction[]
}

export interface RoleAccess<
  TRole extends string = string,
  TResource extends string = string,
  TAction extends string = string
> extends Access<TResource, TAction> {
  readonly role: TRole
  readonly inherit: readonly TRole[]
}

export interface RoleListAccess<
  TRole extends string = string,
  TResource extends string = string,
  TAction extends string = string
> {
  readonly role: TRole
  readonly inherit: readonly TRole[]
  readonly access: readonly Access<TResource, TAction>[]
}

export interface Permission<
  TRole extends string = string,
  TResource extends string = string,
  TAction extends string = string
> {
  granted: boolean
  access?: RoleAccess<TRole, TResource, TAction>
}
