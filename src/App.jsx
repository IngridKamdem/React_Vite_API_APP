import { useState, useEffect } from 'react';
import './App.css';
import IpAddress from './components/IpAddress';
import GeoInfo from './components/GeoInfo';
import axios from "axios";


function App() {
  const api = "https://geo.ipify.org/api/v2/country?apiKey=at_YmyDr9fXPvZ98nmmc9Wg5HezwUENh";

  const [ipInfo, setIpInfo] = useState({});
  const [ipAddress, setIpAddress] = useState("");
  const [status, setStatus] = useState("loading");
  // const [count, setCount] = useState(0)

  useEffect(() => {
    setStatus("loading")
    axios.get(api)
      .then((response) => {
        setIpInfo(response.data)
        setIpAddress(response.data.ip);
        setStatus("success")
      })
      .catch((error) => {
        console.error('Error when calling IP address:', error);
        setStatus("error")
      });
  }, []); // Empty dependency array to run only once

  return (
    <div className="App">
      {status === "loading" ? <div>Loading</div> : status === "success" ?
        (<>
          <IpAddress ipAddress={ipAddress} />
          <GeoInfo countryCode={ipInfo.location.country}/>
        </>)
        : <div>An error has occurred</div>}

    </div>
  );
}

export default App;