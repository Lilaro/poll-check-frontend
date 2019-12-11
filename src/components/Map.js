import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import React, {useState, useEffect } from 'react'
import {Icon, Button, Form} from 'semantic-ui-react'
import ballotBox from '../BallotIcon.svg'


export default function App(props) {
 
  const [viewport, setViewport] = useState({
    latitude: 40.736191,
    longitude: -73.844225,
    width: "100vw",
    height: "100vh",
    zoom: 11
  })

  const [selectedSite, handleSiteClick] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        handleSiteClick(null);
      }
    }
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener)
    }
  }, [])
  
  
  return (
    
      <> 
       <Form.Input fluid placeholder="Site Address" onChange={props.handleChange}
                icon={{ name: 'search'}} />
       <ReactMapGL {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/lisalarochelle/ck36bxl2r08n81cpi5b8l1u7v"
          onViewportChange={(viewport) => {
          setViewport(viewport)
        }
        } > 
        {props.searchResults(props.searchTerm).map((site) => (
         <Marker key={site.id} latitude={parseFloat(site.latitude)} longitude={parseFloat(site.longitude)}>
          <div>
              <img src={ballotBox} alt="Ballot Box Icon" className="marker-button"
              onClick={(e) => handleSiteClick(site)}/>
              
              {/* <Icon link name="bullseye" color={props.color} onClick={props.alertClick}/> */}
              
              </div>

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
          <p>District {selectedSite.council_district}</p>
          <p>{selectedSite.street_number + ' ' + selectedSite.street_name + ', ' + selectedSite.borough}</p>
              {/* <strong>Accessible Entrance:</strong> */}
              <p><Icon name='wheelchair' color='teal'/> {selectedSite.handicap_entrance}</p>
              <Button>
                    <Icon name='comments outline' />Chat</Button>
            </div>
            
          </Popup>       
          ) : null}
       </ReactMapGL>
      </>
    )
    //Chat button on Popup will lead to chat site, I will implement search on Map,
    // and eventually site container will be obsolete
  }
  

  
  
  // function icon  { 
    //   let alertIcon;
  //   <Icon link name="bullseye" onClick={handleClick}/>
  // }
  //   let iconForMap;
  //   if ({count} === 1) {
    
  // console.log({count})
  //   iconForMap = <Icon link name="bullseye" className="yellow" color='yellow' onClick={() => setCount(count + 1)}/>
  // }
  // else if ({count} === 2) {
  //   iconForMap =  <Icon link name="bullseye" color='orange' onClick={() => setCount(count + 1)}/>
  // }
  //  else if ({count} >= 3) {
    //     iconForMap = <Icon link name="bullseye" color='red' onClick={() => setCount(count + 1)}/>
    //   } 
  //   else { 
    //     iconForMap =  <Icon link name="bullseye" onClick={() => setCount(count + 1)}/>
    //   }
    {/* <div>
      {(() => {
        switch{props.count {
          case 0:
            return <Icon link name="bullseye" onClick={props.alertClick}/>
          case 1:
            return <Icon link name="bullseye" color={props.color} onClick={props.alertClick}/>;
          case 2:
            return <Icon link name="bullseye" color={props.color} onClick={props.alertClick}/>;
          case 3:
            return <Icon link name="bullseye" color={props.color} onClick={props.alertClick}/>;
          default:
            return <Icon link name="bullseye" onClick={props.alertClick}/>;
        }
      })()}
    </div> */}
  //   return iconForMap