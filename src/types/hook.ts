import type { PrimaryKey } from '@directus/api/dist/types'

export type TFilterHandlerMeta = Record<string, any> & {
	event: string | 'items.create' | 'items.update',
	keys: PrimaryKey[]
	collection: string
}
