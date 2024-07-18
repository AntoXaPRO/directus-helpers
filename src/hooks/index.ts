import type {
	ActionHandler,
	FilterHandler,
	EventContext
} from '@directus/types'

import type { TFilterHandlerMeta, TActionHandlerMeta } from './types'

export const defineFilterHandler = <T = unknown>(
	fn: (payload: T, meta: TFilterHandlerMeta, context: EventContext) => void
) => fn as FilterHandler<T>

export const defineActionHandler = <T = unknown>(
	fn: (meta: TActionHandlerMeta<T>, context: EventContext) => void
) => fn as ActionHandler
