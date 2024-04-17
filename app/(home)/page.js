"use client"
import { useEffect, useState } from 'react';
// import dfs_xy_conv from './Function';
// import GetWeatherData from './Middle';
import Main from './Main';
import WeatherData from './WeatherData';
import dfs_xy_conv from './Function';
// import WeatherData from './WeatherData';


// async function getData(longitude, latitude) {
//   try {
//     const apiKey = '481EB071-C586-3A91-9DB2-23C53DC4ACA0';
//     const crs = 'EPSG:4019';
//     const point = `${longitude},${latitude}`;
//     const format = 'json';
//     const type = 'PARCEL';
//     const zipcode = 'false';
//     const apiUrl = `https://api.vworld.kr/req/address?service=address&request=getAddress&version=2.0&key=${apiKey}&crs=${crs}&point=${point}&format=${format}&type=${type}&zipcode=${zipcode}&errorFormat=json&callback`;
//     const response = await fetch(apiUrl);
//     const json = await response.json();
    
//     return json;
//   } catch (error) {
//     console.error(error);
//   }
// }


function Home() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [position, setPosition] = useState([]);

  useEffect(() => {
    const GetLocation = () => {
      // if (navigator.geolocation) {
        if (typeof window !== 'undefined') {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const nxny = dfs_xy_conv("toXY", position.coords.latitude, position.coords.longitude);
            console.log(nxny);
            setLatitude(nxny.x);
            setLongitude(nxny.y);
            setPosition([nxny.lat, nxny.lng]);
          },
          (error) => {
            console.error('Error getting geolocation:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    GetLocation();
  }, []);

  return (
    <div>
      <h1>사용자 위치 정보</h1>

      {/* <div>{latitude}, {longitude}</div> */}
      {/* <Middle /> */}
      {/* {latitude && <GetWeather latitude={latitude} longitude={longitude}  />} */}
      
      {/* {<WeatherData />} */}
      {/* {<GetWeatherData />} */}
      {longitude && latitude && 
      <Main>
        <WeatherData latitude={latitude} longitude={longitude}/>
      </Main>}
    </div>
  );
}

export default Home;