"use client"
import { useEffect, useState } from 'react';
// import dfs_xy_conv from './Function';
// import GetWeatherData from './Middle';
import Main from './Main';
import WeatherData from './WeatherData';
import dfs_xy_conv from './Function';
import Link from 'next/link';
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
  const [weatherData, setWeatherData] = useState(null);

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

  useEffect(() => {
    if (latitude && longitude) {
      const getWeather = async () => {
        try {
          // https://dayday.devcjw.com
          const data = await fetch('/api/getWeather', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              lng: `${longitude}`,
              lat: `${latitude}`,
            })
          });
          const json = await data.json();
          setWeatherData(json);
        } catch (error) {
          console.error(error);
        }
      }
      getWeather();
    }
  }, [latitude, longitude]);


  return (
    <>
      <div>
        <div className="w-4/5 m-auto">
          <div className="w-3/5 m-auto flex p-5">
            <Link className="text-sky-600 hover:text-sky-700" href={"/"}>
              그날그날
            </Link>

            <div className="flex gap-2 ml-auto">
              <button className="text-green-600" onClick={undefined}>
                Sign In
              </button>
            </div>
          </div>

          <div>
            {weatherData ? (
              // <WeatherData data={weatherData.response.body.items.item} position={position}/>
              <div>WeatherData 있음</div>
            ) : (
              <p>날씨 정보를 가져오는 중...</p>
            )}
          </div>
        </div>
      </div>
      
      {longitude && latitude && 
      <Main>
        <WeatherData latitude={latitude} longitude={longitude}/>
      </Main>}
    </>

  );
}

export default Home;