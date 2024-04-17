import type { Accountability } from '@directus/types'
import type { TTrigger } from './trigger'

export type TOperationContextData = {
	$trigger: TTrigger,
	$last: TTrigger
	$accountability: Accountability
	$env: Record<string, string>
}

export * from './trigger'
