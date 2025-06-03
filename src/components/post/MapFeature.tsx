'use client';

import React, { useState } from 'react';
import {
  APIProvider,
  ControlPosition,
  MapControl,
  AdvancedMarker,
  Map,
  useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps';
import PlaceAutocomplete from '@/components/post/PlaceAutocomplete';
import MapHandler from '@/components/post/MapHandler';

interface MapFeatureProps {
  apiKey: string;
  onPlaceSelected: (place: google.maps.places.PlaceResult | null) => void;
}

const MapFeature: React.FC<MapFeatureProps> = ({ apiKey, onPlaceSelected }) => {
  const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult | null>(null);
  const [markerRef, marker] = useAdvancedMarkerRef();

  const handlePlaceSelect = (place: google.maps.places.PlaceResult | null) => {
    setSelectedPlace(place);
    onPlaceSelected(place);
  };

  return (
    <APIProvider apiKey={apiKey} solutionChannel="GMP_devsite_samples_v3_rgmautocomplete">
      <Map
        style={{ width: '100%', height: '400px' }}
        mapId={'bf51a910020fa25a'}
        defaultZoom={12}
        defaultCenter={{ lat: 35.681382, lng: 139.766083 }}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        clickableIcons={false}
      >
        <AdvancedMarker ref={markerRef} position={selectedPlace?.geometry?.location} />
      </Map>
      <MapControl position={ControlPosition.TOP_LEFT}>
        <div className="autocomplete-control bg-white p-2 m-2 shadow-md rounded-md">
          <PlaceAutocomplete onPlaceSelect={handlePlaceSelect} />
        </div>
      </MapControl>
      <MapHandler place={selectedPlace} marker={marker} />
    </APIProvider>
  );
};

export default MapFeature;
