import React, { useState } from "react";

export const Location = () => {
  const onGeoOk = (position) => {
    const { latitude, longitude } = position.coords;

    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
  };

  const onGeoError = () => {
    console.log("Er");
  };
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
};
