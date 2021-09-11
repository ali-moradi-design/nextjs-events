import Image from "next/image";
import { useState, useEffect } from "react";
import ReactMapGl, { Marker, setRTLTextPlugin } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Geocode from "react-geocode";

setRTLTextPlugin(
  // find out the latest version at https://www.npmjs.com/package/@mapbox/mapbox-gl-rtl-text
  "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js",
  null,
  // lazy: only load when the map first encounters Hebrew or Arabic text
  true
);

export default function EventMap({ evt }) {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [loading, setLoading] = useState(false);
  const [viewport, setViewport] = useState({
    latitude: 35.71267115030764,
    longitude: 51.38651667765411,
    width: "100%",
    height: "500px",
    zoom: 15,
  });

  useEffect(() => {
    setLat(35.71267115030764);
    setLng(51.38651667765411);
    setViewport({
      ...viewport,
      latitude: 35.71267115030764,
      longitude: 51.38651667765411,
    });
    setLoading(true);
  }, []);

  return (
    <ReactMapGl
      {...viewport}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
      onViewportChange={(vp) => setViewport(vp)}
    >
      <Marker key={evt.id} latitude={lat} longitude={lng}>
        <Image src="/images/pin.svg" width={30} height={30} />
      </Marker>
    </ReactMapGl>
  );
}
