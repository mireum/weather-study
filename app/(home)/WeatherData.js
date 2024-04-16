const getWeather = async (latitude, longitude) => {
  try {
    const apiKey = '481EB071-C586-3A91-9DB2-23C53DC4ACA0';
    const crs = 'EPSG:4019';
    const point = `${longitude},${latitude}`;
    const format = 'json';
    const type = 'PARCEL';
    const zipcode = 'false';
    const apiUrl = `https://api.vworld.kr/req/address?service=address&request=getAddress&version=2.0&key=${apiKey}&crs=${crs}&point=${point}&format=${format}&type=${type}&zipcode=${zipcode}&errorFormat=json&callback`;
    const response = await fetch(apiUrl);
    const json = await response.json();
    
    return json;
  } catch (error) {
    console.error(error);
  }
}

export default async function WeatherData(props) {
  // console.log(props.props);
  // const ff = props.props;
  // console.log(ff());
  // console.log(props.props.props);
  // const data = await getWeather(latitude, longitude);
  // console.log('data::', data);
  return (
    <>
      {/* <div>{data}</div> */}
    </>
  )
}