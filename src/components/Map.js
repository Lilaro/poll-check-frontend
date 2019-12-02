import ReactMapGL, {Marker} from 'react-map-gl'
import React, {useState } from 'react'
import pollData from '../data/poll-sites.json'
import Site from '../containers/Site'

export default function App(props) {
 
  const [viewport, setViewport] = useState({
    latitude: 40.736191,
    longitude: -73.920345,
    width: "100vw",
    height: "100vh",
    zoom: 10
  })

  console.log(pollData)
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
    
        {pollData.map((site) => (
         <Marker key={site.id} latitude={parseFloat(site.latitude)} longitude={parseFloat(site.longitude)}>
           <div>
            Poll Site
           </div>
         </Marker>
       ))}
       </ReactMapGL>
      </>
    )
    
  }