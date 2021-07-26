export class GetCountry {
	static readonly type = "GetCountry";
	constructor(public country: string) {}
}

export class ToggleLoading {
	static readonly type = "ToggleLoading";
}