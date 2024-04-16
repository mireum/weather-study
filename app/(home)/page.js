
import dfs_xy_conv from './Function';
import GetLocation from './GetLocation';
import GetWeather from './GetWeather';
import { Middle } from './Middle';
import WeatherData from './WeatherData';


async function getData(longitude, latitude) {
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
    
    return json;
  } catch (error) {
    console.error(error);
  }
}


function Home() {
  // const element = GetLocation();
  // console.log('eleme::', element);
  // console.log(element.props);
  // const code = Middle();
  // console.log('code', code);
  return (
    <div>
      <h1>사용자 위치 정보</h1>
      {/* {latitude && longitude ? (
        <p>
          위도: {latitude}, 경도: {longitude}
        </p>
      ) : (
        <p>위치 정보를 가져오는 중...</p>
      )} */}
      {/* {<GetLocation />} */}
      <Middle />
      {/* {latitude && <GetWeather latitude={latitude} longitude={longitude}  />} */}
      
      {/* {<WeatherData />} */}
    </div>
  );
}

export default Home;