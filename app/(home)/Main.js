"use client"

import { useEffect } from "react";

// import { useEffect, useState } from "react";
// import dfs_xy_conv from "./Function";

export default function Main({ children }) {
  console.log(children);
  // const [latitude, setLatitude] = useState(null);
  // const [longitude, setLongitude] = useState(null);
  // const [position, setPosition] = useState([]);

  // useEffect(() => {
  //   const GetLocation = () => {
  //     // if (navigator.geolocation) {
  //       if (typeof window !== 'undefined') {
  //       navigator.geolocation.getCurrentPosition(
  //         (position) => {
  //           const nxny = dfs_xy_conv("toXY", position.coords.latitude, position.coords.longitude);
  //           console.log(nxny);
  //           setLatitude(nxny.x);
  //           setLongitude(nxny.y);
  //           setPosition([nxny.lat, nxny.lng]);
  //         },
  //         (error) => {
  //           console.error('Error getting geolocation:', error);
  //         }
  //       );
  //     } else {
  //       console.error('Geolocation is not supported by this browser.');
  //     }
  //   };

  //   GetLocation();
  // }, []);

  useEffect(() => {
    fetch('/api/getData')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log('jsjsjsjs', json);
      });
  }, []);


  return (
    <>
      <div>1</div>
      {children}
      <div>2</div>
    </>
  )
}