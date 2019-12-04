import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import React, {useState, useEffect } from 'react'
import Site from '../containers/Site'

export default function App(props) {
 
  const [viewport, setViewport] = useState({
    latitude: 40.736191,
    longitude: -73.864225,
    width: "100vw",
    height: "100vh",
    zoom: 10
  })

  const [selectedSite, handleSiteClick] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        handleSiteClick(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

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
              className="marker-button"
              onClick={(e) => handleSiteClick(site)}
            >
              <img src="../ballot-box.svg" alt="Ballot Box Icon" />
            </button>
         </Marker>
       ))}
       {selectedSite ? (
          <Popup
            latitude={parseFloat(selectedSite.latitude)}
            longitude={parseFloat(selectedSite.longitude)}
            onClose={() => {
              handleSiteClick(null);
            }}
          >
            <div>
              <h4>{selectedSite.site_name}</h4>
          <p>{selectedSite.street_number + ' ' + selectedSite.street_name + ' ' + selectedSite.borough}</p>
              <strong>Accessible Entrance:</strong>
              <p>{selectedSite.handicap_entrance}</p>
            </div>
          </Popup>
        ) : null}
       </ReactMapGL>
      </>
    )
    
  }