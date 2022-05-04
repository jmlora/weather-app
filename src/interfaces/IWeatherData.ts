interface IWeatherDescription {
    main: string,
    description: string,
    icon: string,
}

interface IWeatherData {
    coord: {
        lon: number,
        lat: number
    },
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number,
    },
    visibility: number,
    weather: Array<IWeatherDescription>,
    wind: {
        speed: number,
        deg: number,
    },
    sys: {
        country: string,
    }
}


export type {IWeatherData};