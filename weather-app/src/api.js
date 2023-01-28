import axios from "axios";
import { API_KEY } from "./network/env/config";

export async function fetchWeather(city, setError) {

   
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=tr`;

    try {
        const response = await axios.get(url);
        setError("");
        console.log(response.data);
        return response.data;
    } catch (error) {
        setError("City Not Found!");
        return error;
    }
}



