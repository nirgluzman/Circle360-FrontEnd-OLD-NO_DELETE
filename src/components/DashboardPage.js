import { useEffect, useState, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { View, Flex } from "@aws-amplify/ui-react";

import { DashboardHeader } from "../ui-components";

export default function DashboardPage() {
  // useEffect(() => {
  //   Auth.currentSession()
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <Flex justifyContent="center" alignItems="center" direction="column">
      <DashboardHeader />
      <Map />
    </Flex>
  );
}

function Map() {
  const center = useMemo(() => ({ lat: 48, lng: 11 }), []);
  const [selected, setSelected] = useState(center);
  const [status, setStatus] = useState(null);

  // Retrieve geolocation from browser
  useEffect(() => {
    const geoLocation = () => {
      if (!navigator.geolocation) {
        setStatus("Geolocation is not supported by your browser");
      } else {
        setStatus("Locating ...");
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setStatus(null);
            setSelected({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => {
            setStatus("Unable to retrieve your location");
          }
        );
      }
    };
    geoLocation();
  }, []);

  return (
    <div>
      <GoogleMap
        zoom={10}
        center={selected}
        mapContainerClassName="map-container"
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </div>
  );
}
