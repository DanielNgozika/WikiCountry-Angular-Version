import { Injectable } from "@angular/core";
import { State, Action, StateContext } from "@ngxs/store";
import { GetCountry, ToggleLoading } from "../actions/country.actions"
import { tap } from "rxjs/operators"
import { CountryServiceService } from "../services/country-service.service"

export interface CountryStateModel {
	country: string;
	loading: Boolean;
	result: [];
}

@State<CountryStateModel>({
	name: 'country',
	defaults: {
		country: "",
		loading: false,
		result: []
	}
})

@Injectable()

export class CountryState {
	constructor(private countryService: CountryServiceService) {}

	@Action(GetCountry)
	getCountry(ctx: StateContext<CountryStateModel>, action: GetCountry) {
		return this.countryService.getCountry(action.country).pipe(
			tap(result => {
				const state = ctx.getState();
				ctx.setState({
					...state,
					country: action.country,
					result
				})
			})
		)
	}

	@Action(ToggleLoading)
	toggleLoading(ctx: StateContext<CountryStateModel>) {
		const state = ctx.getState();
		ctx.setState({
			...state,
			loading: !state.loading
		})
	}
}