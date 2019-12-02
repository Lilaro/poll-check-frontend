import ReactMapGL, {Marker} from 'react-map-gl'
import React, {useState } from 'react'
import Site from '../containers/Site'

export default function App(props) {
 
  const [viewport, setViewport] = useState({
    latitude: 40.736191,
    longitude: -73.920345,
    width: "100vw",
    height: "100vh",
    zoom: 10
  })

    return (
      <> 
        <ReactMapGL {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/lisalarochelle/ck36bxl2r08n81cpi5b8l1u7v"
          onViewportChange={(viewport) => {
          setViewport(viewport)
          }
        }
        > 
    
        {props.sites.map((site) => (
         <Marker key={site.id} latitude={parseFloat(site.latitude)} longitude={parseFloat(site.longitude)}>
            <button
              className="marker-btn"
              onClick={(e) => props.handleSiteClick(e, props.site)}
            >
              <img src="../ballot-box.svg" alt="Ballot Box Icon" />
            </button>
         </Marker>
       ))}
       </ReactMapGL>
      </>
    )
    
  }