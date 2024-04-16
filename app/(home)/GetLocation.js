"use client"

import { useState, useEffect } from 'react';
import dfs_xy_conv from './Function';

export default function GetLocation() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [position, setPosition] = useState([]);

  useEffect(() => {
    const GetLocation = () => {
      if (navigator.geolocation) {
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

  return  [latitude, longitude] ;
}