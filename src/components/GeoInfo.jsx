import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

GeoInfo.propTypes = {
  countryCode: PropTypes.string.isRequired,
};


function GeoInfo({ countryCode }) {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
      axios.get(`https://restcountries.com/v3.1/alpha/${countryCode}?fields=name,flags,flag`)
        .then((response) => {
          setGeoData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching geolocation data:', error);
        });
  }, []);

  return (
    <div>
      <h2>Geographic and Time Information:</h2>
      {geoData && (
        <div>

          <img src={geoData.flags.svg} />
          {/* <p>City: {geoData.city}</p>
          <p>Region: {geoData.region}</p>
          <p>Country: {geoData.country}</p>
          <p>Timezone: {geoData.timezone}</p> */}
        </div>
      )}
    </div>
  );
}

export default GeoInfo;