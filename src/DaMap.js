import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  MarkerClusterer,
  Marker
} from '@react-google-maps/api';
import CircularProgress from '@material-ui/core/CircularProgress';

const markerOptions = {
  imagePath:
    'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
};

const mapContainerStyle = {
  height: '92vh',
  width: '100%'
};

const center = { lat: -28.024, lng: 140.887 };

const locations = [
  { id: 1, lat: -31.56391, lng: 147.154312 },
  { id: 2, lat: -33.718234, lng: 150.363181 },
  { id: 3, lat: -33.727111, lng: 150.371124 },
  { id: 4, lat: -33.848588, lng: 151.209834 },
  { id: 5, lat: -33.851702, lng: 151.216968 },
  { id: 6, lat: -34.671264, lng: 150.863657 },
  { id: 7, lat: -35.304724, lng: 148.662905 },
  { id: 8, lat: -36.817685, lng: 175.699196 },
  { id: 9, lat: -36.828611, lng: 175.790222 },
  { id: 10, lat: -37.75, lng: 145.116667 },
  { id: 11, lat: -37.759859, lng: 145.128708 },
  { id: 12, lat: -37.765015, lng: 145.133858 },
  { id: 13, lat: -37.770104, lng: 145.143299 },
  { id: 14, lat: -37.7737, lng: 145.145187 },
  { id: 15, lat: -37.774785, lng: 145.137978 },
  { id: 16, lat: -37.819616, lng: 144.968119 },
  { id: 17, lat: -38.330766, lng: 144.695692 },
  { id: 18, lat: -39.927193, lng: 175.053218 },
  { id: 19, lat: -41.330162, lng: 174.865694 },
  { id: 20, lat: -42.734358, lng: 147.439506 },
  { id: 21, lat: -42.734358, lng: 147.501315 },
  { id: 22, lat: -42.735258, lng: 147.438 },
  { id: 23, lat: -43.999792, lng: 170.463352 }
];

const DaMap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDd78bfutAHOA4-ZyY4eXhW1mcLDiN0p1M' // ,
  });

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? (
    <GoogleMap
      id="marker-example"
      mapContainerStyle={mapContainerStyle}
      zoom={3}
      center={center}
    >
      <MarkerClusterer options={markerOptions}>
        {clusterer =>
          locations.map(location => (
            <Marker
              key={`mrk_${location.id}`}
              position={location}
              clusterer={clusterer}
            />
          ))
        }
      </MarkerClusterer>
    </GoogleMap>
  ) : (
    <CircularProgress />
  );
};

export default DaMap;
