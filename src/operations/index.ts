import type { Accountability } from '@directus/types'
import type { TTrigger } from './trigger'

export type TOperationContextData<
	TTriggerBodyEntity extends Record<string, unknown> = {},
	TLast extends Record<string, unknown> = {},
> = {
	$trigger: TTrigger<TTriggerBodyEntity>
	$last: TLast
	$accountability: Accountability
	$env: Record<string, string>
}

export * from './trigger'
