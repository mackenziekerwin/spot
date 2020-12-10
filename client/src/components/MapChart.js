import React, { useState, useEffect } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { scaleLinear } from 'd3-scale'

const geoUrl =
  "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const dataUrl =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const MapChart = ({ cities }) => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch(dataUrl)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const rScale = scaleLinear()
    .domain([0, Math.max(...cities.map((c) => c.spottings))])
    .range([0, 20]);
  
  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography key={geo.rsmKey}
              geography={geo}
              fill='#F0F0F0' 
              stroke="#FFFFFF"
            />
          ))}
      </Geographies>
      {data && cities.map((c, i) => {
        const ob = data.find((d) => d.city === c.city);
        return ob && (
          <Marker key={i} coordinates={[ob.longitude, ob.latitude]}>
            <circle
              r={rScale(c.spottings)}
              fill='#138D75'
            />
          </Marker>
        )
      })}
    </ComposableMap>
)};

export default MapChart
