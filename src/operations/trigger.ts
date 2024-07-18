export type TTriggerBody<TEntity extends Record<string, unknown> = {}> =
	TEntity & {
		collection: string
	}

export type TTrigger<TBody extends Record<string, unknown> = {}> = {
	path: string
	query: any
	body: TTriggerBody<TBody>
	method: 'GET' | 'POST'
	headers: {
		host: string
		connection: string
		origin: string
		referer: string
		cookie: string
		accept: string
		'accept-encoding': string
		'accept-language': string
		'user-agent': string
		'content-type': string
		'content-length': string
	}
}
