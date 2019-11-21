import './App.css';
import ReactMapGL from 'react-map-gl'
import React, {useState, useEffect } from 'react'

export default function App(props) {

  const [viewport, setViewport] = useState({
    latitude: 40.736191,
    longitude: -73.920345,
    width: "100vw",
    height: "100vh",
    zoom: 10
  })
  
    return (
      <div>
        <ReactMapGL {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/lisalarochelle/ck36bxl2r08n81cpi5b8l1u7v"
          onViewportChange={(viewport) => {
          setViewport(viewport)
          }
        }
        >
          map
        </ReactMapGL>
      </div>
    )

}
