"use client";

import { LoadScript, Autocomplete } from "@react-google-maps/api";
import { useRef } from "react";

const libraries: ("places")[] = ["places"];

type LocationData = {
  city: string;
  county: string;
  country: string;
  lat: number;
  lng: number;
};

type Props = {
  onSelect: (data: LocationData) => void;
};

export default function LocationAutocomplete({ onSelect }: Props) {
  const autocompleteRef =
    useRef<google.maps.places.Autocomplete | null>(null);

  const handlePlaceChanged = () => {
    const place = autocompleteRef.current?.getPlace();

    if (
      !place ||
      !place.geometry ||
      !place.geometry.location ||
      !place.address_components
    ) {
      return;
    }

    const getComponent = (type: string) =>
      place.address_components!.find((c) =>
        c.types.includes(type)
      )?.long_name ?? "";

    const city =
      getComponent("locality") ||
      getComponent("administrative_area_level_2");

    const county = getComponent("administrative_area_level_1");
    const country = getComponent("country");

    if (!city || !county || !country) return;

    onSelect({
      city,
      county,
      country,
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    });
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
      libraries={libraries}
    >
      <Autocomplete
        onLoad={(autocomplete) =>
          (autocompleteRef.current = autocomplete)
        }
        onPlaceChanged={handlePlaceChanged}
        options={{
          componentRestrictions: { country: "ro" },
          types: ["(cities)"],
        }}
      >
        <input
          type="text"
          placeholder="Oraș / județ / țară"
          className="w-full rounded-xl bg-black/30 px-4 py-3 text-sm text-gray-200 ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500"
        />
      </Autocomplete>
    </LoadScript>
  );
}
