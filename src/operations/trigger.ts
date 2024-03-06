export type TTreggerData<TName extends string = string> = {
	$trigger: {
		body: {
			collection: TName
		}
	}
}
