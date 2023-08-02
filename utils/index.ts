export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'da50679b2fmsh62f6a78783ae75ep18f49ejsn37e8cb81c686',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}