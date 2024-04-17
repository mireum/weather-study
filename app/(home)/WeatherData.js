// const getWeather = async (latitude, longitude) => {
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

export default function WeatherData({latitude, longitude}) {
  // console.log(props);
  console.log('longi::',longitude);
  try {
    const apiKey = '481EB071-C586-3A91-9DB2-23C53DC4ACA0';
    const crs = 'EPSG:4019';
    const point = `${longitude},${latitude}`;
    const format = 'json';
    const type = 'PARCEL';
    const zipcode = 'false';
    const apiUrl = `req/address?service=address&request=getAddress&version=2.0&key=${apiKey}&crs=${crs}&point=${point}&format=${format}&type=${type}&zipcode=${zipcode}&errorFormat=json&callback`;
    // const res = await fetch(apiUrl);
    // const json = await res.json();
    // return res.json;

    fetch(apiUrl)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(json => {
        console.log('jsjsjs',json);
        return json.json();
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });

    
  } catch (error) {
    console.error(error);
  }
  
  // const data = await getWeather();
  // console.log(props);
  // console.log(props.props.type);
}