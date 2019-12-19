import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import React, {useState, useEffect } from 'react'
import {Icon, Button, Form, Card} from 'semantic-ui-react'
import ballotBox from '../BallotIcon.svg'


export default function App(props) {
 
  const [viewport, setViewport] = useState({
    latitude: 40.736191,
    longitude: -73.844225,
    width: "100vw",
    height: "100vh",
    zoom: 11
  })

  const [clickededSite, setSite] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSite(null);
      }
    }
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener)
    }
  }, [])
  
  
  return (
    
      <> 
       <ReactMapGL {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/lisalarochelle/ck36bxl2r08n81cpi5b8l1u7v"
          onViewportChange={(viewport) => {
            setViewport(viewport)
          }
        } > 
        <Form.Input fluid placeholder="Site Address" onChange={props.handleChange}
                 icon={{ name: 'search'}} />
        {props.searchResults(props.searchTerm).map((site) => (
         <Marker key={site.id} latitude={parseFloat(site.latitude)} longitude={parseFloat(site.longitude)}>
          <div>
              <img src={ballotBox} alt="Ballot Box Icon" className="marker-button"
              onClick={(e) => setSite(site)}/>
              
              {/* <Icon link name="bullseye" color={props.color} onClick={props.alertClick}/> */}
              
              </div>

         </Marker>
       ))}
       
       {clickededSite ? (
          <Popup
          key={clickededSite.id}
          site={clickededSite} 
          channel={props.channel}
          messages={props.messages}
          selectedSite={props.selectedSite}
          siteClicked={props.siteClicked}
          handleSiteClick={props.handleSiteClick}
          latitude={parseFloat(clickededSite.latitude)}
          longitude={parseFloat(clickededSite.longitude)}
          onClose={() => {
              setSite(null);
            }}
            >
            <div>
              <h4>{clickededSite.site_name}</h4>
          <p>District {clickededSite.council_district}</p>
          <p>{clickededSite.street_number + ' ' + clickededSite.street_name + ', ' + clickededSite.borough}</p>
              <p><Icon name='wheelchair' color='teal'/> {clickededSite.handicap_entrance}</p>
              <Button onClick={(e) => props.handleSiteClick(e, clickededSite)}>
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