"use client";

import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import styles from "./PurePodInfographicMap.module.css";

export type InfographicPod = {
  name: string;
  lat: number;
  lng: number;
  region: string;
};

export type InfographicCity = {
  name: string;
  lat: number;
  lng: number;
};

type Props = {
  pods: InfographicPod[];
  cities: InfographicCity[];
};

export default function PurePodInfographicMapLeaflet({ pods, cities }: Props) {
  const allPoints = [...pods, ...cities].map((p) => [p.lat, p.lng] as [number, number]);

  return (
    <MapContainer
      className={styles.map}
      bounds={allPoints}
      boundsOptions={{ padding: [30, 30] }}
      scrollWheelZoom={false}
      zoomControl={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {cities.map((city) => (
        <CircleMarker
          key={city.name}
          center={[city.lat, city.lng]}
          radius={4}
          pathOptions={{
            color: "#7f8475",
            weight: 1.2,
            fillColor: "#b8bcaf",
            fillOpacity: 0.85,
          }}
        >
          <Tooltip
            permanent
            direction="right"
            offset={[8, 0]}
            className={styles.cityTooltip}
            opacity={1}
          >
            {city.name}
          </Tooltip>
        </CircleMarker>
      ))}

      {pods.map((pod) => (
        <CircleMarker
          key={pod.name}
          center={[pod.lat, pod.lng]}
          radius={8}
          pathOptions={{
            color: "#4f5e45",
            weight: 2,
            fillColor: "#667a58",
            fillOpacity: 0.95,
          }}
        >
          <Tooltip permanent direction="top" offset={[0, -8]} className={styles.podTooltip} opacity={1}>
            {pod.name}
          </Tooltip>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
