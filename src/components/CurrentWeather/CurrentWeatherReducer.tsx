import { IWeatherData } from '../../interfaces/IWeatherData';

type Reducer<State, Action> = (state: State, action: Action) => State

type WeatherState = {
    city: string,
    weather: IWeatherData | undefined | null
}

type Action = {
    type: string,
    payload: Partial<WeatherState>
}

const reducer:Reducer<WeatherState, Action> = (state: WeatherState, action: Partial<Action>): WeatherState => {
    switch (action.type) {
        case 'SET_CITY':
            return {
                ...state,
                city: action.payload?.city as WeatherState['city']
            }
        case 'SET_WEATHER':
            return {
                ...state,
                weather: action.payload?.weather as WeatherState['weather'],
            }
        default:
            throw new Error('Action type unrecognized');
    }
}

const initialState: WeatherState = {
    city: '',
    weather: null
}

export { reducer, initialState};