"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Place } from "@/data/content";

const markerIcon = new L.Icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

export function PlacesMap({ places }: { places: Place[] }) {
  const center = [21.45, 39.85] as [number, number];

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10">
      <MapContainer
        center={center}
        zoom={11}
        className="h-[360px] w-full"
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {places.map((place) =>
          place.lat && place.lng ? (
            <Marker key={place.name} position={[place.lat, place.lng]} icon={markerIcon}>
              <Popup>
                <strong>{place.name}</strong>
                <div>{place.locationHint}</div>
              </Popup>
            </Marker>
          ) : null
        )}
      </MapContainer>
    </div>
  );
}
