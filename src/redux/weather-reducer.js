import { weatherAPI } from "../api/api"

const SET_WEATHER = 'SET_WEATHER'

let initialState = {
    weather: null
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER: {
            return { ...state, weather: action.weather }
        }
        default:
            return state
    }
}

export const setWeather = (weather) => ({ type: SET_WEATHER, weather })

export const getWeatherData = (id) => {

    return (dispatch) => {

        weatherAPI.getWeather(id).then(response => {
            dispatch(setWeather(response.data))
        });

    }
}

export default weatherReducer