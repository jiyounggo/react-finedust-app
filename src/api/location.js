/*global kakao*/
import React, { useState } from "react";

function Location() {
  const [lat, setlat] = useState();
  const [lng, setlng] = useState();
  const [currentLocation, setcurrentLocation] = useState("");
  const onGeoOk = (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    setlat(lat);
    setlng(lng);
  };

  const onGeoError = () => {
    console.log("Er");
  };

  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

  var geocoder = new kakao.maps.services.Geocoder();

  var callback = function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
      console.log(result[0]);
    }
  };

  geocoder.coord2RegionCode(lng, lat, callback);
}

export default Location;
