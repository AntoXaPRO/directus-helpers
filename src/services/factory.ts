import type { SchemaOverview, Accountability } from '@directus/types'
import type { ItemsService, FilesService } from '@directus/api/dist/services'

export type TFactoryServicesOpts = {
	services: any
	schema: SchemaOverview
	accountability?: Accountability
}

type TServices<K extends keyof any> = { [P in K]: any }
export type TFactoryTypes = Record<string, any>

export class FactoryServices<
	TTypes extends TFactoryTypes = any,
> {
	private opts: TFactoryServicesOpts

	private _items: Partial<TServices<keyof TTypes>> = {}
	private _files: FilesService | null = null

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

	files() {
		if (!this._files) {
			this._files = new this.opts.services.FilesService({
				schema: this.opts.schema,
				accountability: this.opts.accountability
			})
		}
		return this._files as FilesService
	}
}

