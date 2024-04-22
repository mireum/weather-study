import { getDate } from "../(home)/Function";

export async function getData(latitude, longitude) {
  try {
    const apiKey = '481EB071-C586-3A91-9DB2-23C53DC4ACA0';
    const crs = 'EPSG:4019';
    const point = `${longitude},${latitude}`;
    const format = 'json';
    const type = 'PARCEL';
    const zipcode = 'false';
    const apiUrl = `https://api.vworld.kr/req/address?service=address&request=getAddress&version=2.0&key=${apiKey}&crs=${crs}&point=${point}&format=${format}&type=${type}&zipcode=${zipcode}&errorFormat=json&callback`;
    const response = await fetch(apiUrl);
    const json = await response.json();

    console.log(apiKey);
    return json;
  } catch (error) {
    console.error(error);
  }
}


export async function getWeather(latitude, longitude) {
  try {
    console.log(process.env.WEATHER_API_KEY);
    const apiKey = process.env.WEATHER_API_KEY;
    const day = new Date();
    const baseDate = day.getFullYear()+String(day.getMonth()+1).padStart(2, '0')+String(day.getDate()).padStart(2, '0');
    const baseTime = getDate();
    const nx = longitude;
    const ny = latitude;
    const apiUrl = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${apiKey}&numOfRows=12&pageNo=1&dataType=JSON&base_date=${baseDate}&base_time=${baseTime}&nx=${nx}&ny=${ny}`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
    
  } catch (error) {
    console.error(error);
  }
}