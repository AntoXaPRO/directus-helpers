import type { PrimaryKey } from '@directus/types'

export type TEventHandlerMeta = {
	event: string
	collection: string
}

export type TFilterHandlerMeta = TEventHandlerMeta & {}

export type TActionHandlerMeta<T = unknown> = TEventHandlerMeta & {
	keys: PrimaryKey[]
	payload: T
}
