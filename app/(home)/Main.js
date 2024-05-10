"use client"

import { useEffect } from "react";

// import { useEffect, useState } from "react";
// import dfs_xy_conv from "./Function";

export default function Main({ children }) {
  console.log(children);
  // const [latitude, setLatitude] = useState(null);
  // const [longitude, setLongitude] = useState(null);
  // const [position, setPosition] = useState([]);


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