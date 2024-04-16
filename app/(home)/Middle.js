"use client"

import GetLocation from "./GetLocation"

export function Middle() {
  // const coordinate = GetLocation();
  // console.log(coordinate);
  const asd = document.getElementById('loc');
  return (

    <>
      <div id="loc">{<GetLocation />}ss</div>
      {asd.innerText}
    </>
  )
}