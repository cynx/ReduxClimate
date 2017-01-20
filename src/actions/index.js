const API_KEY = '013fead70151067545e1ea33016b144a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(){
    return {
        type:FETCH_WEATHER,
        payload:
    };
}