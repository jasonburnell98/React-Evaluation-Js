import { useState } from "react";
import { getLocation, getSunriseSunset } from "../services/api";
import { validateIPaddress } from "../utils";
import { SunriseSunset } from "./SunriseSunset";

export const IpForm = () => {
  const [IP, setIP] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");

  const handleSubmit = async (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    //resetting data before api calls
    setSunrise("");
    setSunset("");

    //validating if ip address is correct or not
    if (validateIPaddress(IP)) {
      //calling getLocation function to get lat and lng
      const { latitude, longitude } = await getLocation(IP);

      if (latitude && longitude) {
        // calling getSunriseSunset function to get sunrise and sunset
        const { sunrise, sunset } = await getSunriseSunset(latitude, longitude);

        if (sunrise && sunset) {
          setSunrise(sunrise);
          setSunset(sunset);
        }
      }
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter IP"
                  value={IP}
                  onChange={(e) => setIP(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-2">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {sunrise && sunset && <SunriseSunset sunrise={sunrise} sunset={sunset} />}
    </>
  );
};
