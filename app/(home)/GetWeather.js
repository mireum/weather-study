const getWeather = async (longitude, latitude) => {
  const apiKey = process.env.GET_LOCATION_API_KEY;
  const crs = 'EPSG:4019';
  const point = `${longitude},${latitude}`;
  const format = 'json';
  const type = 'PARCEL';
  const zipcode = 'false';
  const apiUrl = `https://api.vworld.kr/req/address?service=address&request=getAddress&version=2.0&key=${apiKey}&crs=${crs}&point=${point}&format=${format}&type=${type}&zipcode=${zipcode}&errorFormat=json&callback`;
  const response = await fetch(apiUrl);
  const json = await response.json();
  res.json(json);
}

export default async function GetWeather({ latitude, longitude}) {
  const position = await getWeather(latitude, longitude);
  console.log(position);

  return (
    <>
      <div>좌표</div>
    </>
  )
}