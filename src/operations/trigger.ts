export type TTrigger = {
	path: string
	query: any,
	body: {
		collection: string
	},
	method: 'GET' | 'POST',
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
