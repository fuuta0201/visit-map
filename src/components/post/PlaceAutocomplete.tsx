import React, { useState, useEffect, useRef } from 'react';
import { useMapsLibrary } from '@vis.gl/react-google-maps';
import { Input } from '@/components/ui/input';

interface PlaceAutocompleteProps {
  onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
}

const PlaceAutocomplete = ({ onPlaceSelect }: PlaceAutocompleteProps) => {
  const [placeAutocomplete, setPlaceAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const places = useMapsLibrary('places');

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const options = {
      fields: ['place_id', 'geometry', 'name', 'formatted_address', 'address_components'],
      // types: ['address'], // 住所のみのサジェスト
    };

    const autocompleteInstance = new places.Autocomplete(inputRef.current, options);
    setPlaceAutocomplete(autocompleteInstance);
  }, [places]);

  useEffect(() => {
    if (!placeAutocomplete) return;

    const listener = placeAutocomplete.addListener('place_changed', () => {
      onPlaceSelect(placeAutocomplete.getPlace());
    });

    return () => {
      if (listener) {
        listener.remove();
      }
    };
  }, [onPlaceSelect, placeAutocomplete]);

  return (
    <div className="autocomplete-container w-full lg:w-96">
      <Input ref={inputRef} type="text" placeholder="住所を検索..." className="w-full" />
    </div>
  );
};

export default PlaceAutocomplete;
