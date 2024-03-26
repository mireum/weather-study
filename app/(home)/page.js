"use client"
import { useState, useEffect } from 'react';

function Home() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    // 사용자의 위치를 가져오는 함수
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            console.error('Error getting geolocation:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    // 페이지가 마운트될 때 위치 정보를 가져옴
    getLocation();
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      const fetchData = async () => {
        try {
          const apiKey = 'ero0PCiw0xS0m5XbHGdRNe4XLQfmyRSHVU2pPJQ7xx%2B%2BC2lnsL7zametsqSaIqJNoTXnkKCdi2l5oIxMKgLR%2FQ%3D%3D';
          const baseDate = '20240326';
          const baseTime = '1400';
          const nx = '55';
          const ny = '127';
          // const nx = Math.floor((longitude - 124) * 88 / 1.2); // 경도에 따른 nx 계산
          // const ny = Math.floor((latitude - 33) * 68 / 1.0); // 위도에 따른 ny 계산
          const apiUrl = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${apiKey}&numOfRows=12&pageNo=1&dataType=JSON&base_date=${baseDate}&base_time=${baseTime}&nx=${nx}&ny=${ny}`;

          const response = await fetch(apiUrl);
          const data = await response.json();
          console.log(data);
          setWeatherData(data);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };

      fetchData();
    }
  }, [latitude, longitude]);

  return (
    <div>
      <h1>사용자 위치 정보</h1>
      {latitude && longitude ? (
        <p>
          위도: {latitude}, 경도: {longitude}
        </p>
      ) : (
        <p>위치 정보를 가져오는 중...</p>
      )}
      {weatherData ? (
        <div>
          <h2>날씨 데이터</h2>
          <pre>{JSON.stringify(weatherData, null, 2)}</pre>
        </div>
      ) : (
        <p>날씨 정보를 가져오는 중...</p>
      )}
    </div>
  );
}

export default Home;