/* global google */
import { useEffect, useState, useMemo } from "react";
import logo from "../images/logo.png";
import {
  GoogleMap,
  InfoWindow,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";
import { Flex, Collection, Card } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

import {
  DashboardHeader,
  DashboardCircle,
  DashboardCircleCollection,
} from "../ui-components";

export default function DashboardPage() {
  const navigate = useNavigate();
  const myCircles = [
    {
      name: "Family",
    },
    { name: "Friends" },
    { name: "Parents" },
    { name: "Collegues" },
    { name: "Other" },
  ];
  const DashboardPageOverrides = {
    ProfileImage: {
      alt: "Circle360 logo",
      src: logo,
      onClick: () => navigate("/usersettings"),
    },
    ConfigIcon: {
      className: "custom-btn",
      onClick: () => navigate("/circleSettings"),
    },
    CircleName: {},
    DeleteIcon: {
      className: "custom-btn",
      onClick: () => navigate("/"),
    },
    JoinButton: {
      className: "custom-btn",
      onClick: () => navigate("/joincircle"),
    },
    CreateNewButton: {
      className: "custom-btn",
      onClick: () => navigate("/sendinvite"),
    },
  };

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
      <DashboardHeader overrides={DashboardPageOverrides} />

      <Collection
        items={myCircles}
        /*overrideItems={({ item }) => ({
          circles: (
            <div>
              {item.myCircles.map((myCircle) => (
                <>
                  {myCircle.content}
                  {/* <DashboardCircle overrides={DashboardPageOverrides} /> }
                </>
              ))}
            </div>
          ),
        })}*/
      >
        {(item, index) => (
          <Flex>
            {item.name?.map((name) => (
              <div key={index}>{name}</div>
            ))}
          </Flex>
        )}
      </Collection>
      <Map />
    </Flex>
  );
}
let markers = [];

function Map() {
  const center = useMemo(() => ({ lat: 48, lng: 11 }), []);
  const [selected, setSelected] = useState(center);
  const [status, setStatus] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const size = new google.maps.Size(50, 50);
    markers = [
      {
        id: 1,
        nickname: "Payal",
        email: "payal@gmail.com",
        position: { lat: 52.45711, lng: 13.54023 },
        image: {
          url: "https://api.dicebear.com/5.x/bottts/svg?seed=1445.svg",
          scaledSize: size, // scaled size
        },
      },
      {
        id: 2,
        nickname: "Nir",
        email: "nir@gmail.com",
        position: { lat: 51.88184, lng: 11.62319 },
        image: {
          url: "https://api.dicebear.com/5.x/bottts/svg?seed=142.svg",
          scaledSize: size, // scaled size
        },
      },
      {
        id: 3,
        nickname: "Anna",
        email: "anna@gmail.com",
        position: { lat: 50.88184, lng: 10.62319 },
        image: {
          url: "https://api.dicebear.com/5.x/bottts/svg?seed=145.svg",
          scaledSize: size, // scaled size
        },
      },
      {
        id: 4,
        nickname: "Reagan",
        email: "reagan@gmail.com",
        position: { lat: 50.84184, lng: 11.52319 },
        image: {
          url: "https://api.dicebear.com/5.x/bottts/svg?seed=147.svg",
          scaledSize: size, // scaled size
        },
      },
      {
        id: 5,
        nickname: "Ve",
        email: "ve@gmail.com",
        position: { lat: 40.712777, lng: -74.005954 },
        image: {
          url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
          scaledSize: size, // scaled size
        },
      },
    ];
    const bounds = new google.maps.LatLngBounds();
    markers?.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

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
        center={selected}
        onLoad={handleOnLoad}
        clickableIcons={false}
        mapContainerClassName="map-container"
        zoom={10}
      >
        {selected && <Marker position={selected} />}
        {markers.map(({ id, nickname, email, position, image }) => (
          <Marker
            key={id}
            position={position}
            icon={image}
            onClick={() => handleActiveMarker(id)}
          >
            {activeMarker === id ? (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <div>{nickname}</div>
              </InfoWindow>
            ) : null}
          </Marker>
        ))}
      </GoogleMap>
    </div>
  );
}
