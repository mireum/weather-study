
// import { useState, useEffect } from 'react';
import dfs_xy_conv from './Function';
import GetLocation from './GetLocation';
import GetWeather from './GetWeather';
import WeatherData from './WeatherData';

function Home() {

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
      {<GetLocation />}
      {/* {latitude && <GetWeather latitude={latitude} longitude={longitude}  />} */}
      
      {/* {<WeatherData  props={() => GetLocation()} />} */}
    </div>
  );
}

export default Home;