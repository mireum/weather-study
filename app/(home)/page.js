"use client"
import { useState, useEffect } from 'react';

function Home() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

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
    </div>
  );
}

export default Home;