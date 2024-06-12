import type { SchemaOverview, Accountability } from '@directus/types'

import type {
	ItemsService,
	FilesService,
	UsersService,
	RolesService,
	AuthenticationService
} from '@directus/api/dist/services'

export type TFactoryServicesOpts = {
	services: any
	schema: SchemaOverview
	accountability?: Accountability
}

type TServices<K extends keyof any> = { [P in K]: any }
export type TFactoryTypes = Record<string, any>

export class FactoryServices<TTypes extends TFactoryTypes = any> {
	private opts: TFactoryServicesOpts

	private _items: Partial<TServices<keyof TTypes>> = {}
	private _files: FilesService | null = null
	private _users: UsersService | null = null
	private _roles: RolesService | null = null
	private _authentication: AuthenticationService | null = null

	constructor(opts: TFactoryServicesOpts) {
		this.opts = opts
	}

	items<TName extends keyof TTypes, TService extends TTypes[TName]>(
		name: TName
	) {
		if (!this._items[name]) {
			this._items[name] = new this.opts.services.ItemsService(name, {
				schema: this.opts.schema,
				accountability: this.opts.accountability
			})
		}
		return this._items[name] as ItemsService<TService>
	}

	get files() {
		if (!this._files) {
			this._files = new this.opts.services.FilesService({
				schema: this.opts.schema,
				accountability: this.opts.accountability
			})
		}
		return this._files as FilesService
	}

	get users() {
		if (!this._users) {
			this._users = new this.opts.services.UsersService({
				schema: this.opts.schema,
				accountability: this.opts.accountability
			})
		}
		return this._users as UsersService
	}

	get roles() {
		if (!this._roles) {
			this._roles = new this.opts.services.RolesService({
				schema: this.opts.schema,
				accountability: this.opts.accountability
			})
		}
		return this._roles as RolesService
	}

	get authentication() {
		if (!this._authentication) {
			this._authentication = new this.opts.services.AuthenticationService({
				schema: this.opts.schema,
				accountability: this.opts.accountability
			})
		}
		return this._authentication as AuthenticationService
	}
}
