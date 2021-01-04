// Imports from React
import { useRef, useEffect } from "react";

// Imports for Styling
import "./Map.css";

const Map = (props) => {
  const mapRef = useRef();

  // Create map with the globaly usable functions from google imported in the index.html
  const { center, zoom } = props;

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });

    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
