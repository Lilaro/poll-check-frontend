import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import React, { useState } from 'react'
import {Icon, Button, Form} from 'semantic-ui-react'
import ballotBox from '../BallotIcon.svg'


export default function Map(props) {
 
  const [viewport, setViewport] = useState({
    latitude: 40.736191,
    longitude: -73.844225,
    width: "100vw",
    height: "100vh",
    zoom: 11
  })

  const [clickededSite, setSite] = useState(null);
  
  return (  
    <> 
      <ReactMapGL {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/lisalarochelle/ck36bxl2r08n81cpi5b8l1u7v"
        onViewportChange={(viewport) => {
          setViewport(viewport)
        }
      } 
      height='700px' paddingLeft='10px'> 
      <Form.Input size='large' placeholder="Site Address" onChange={props.handleChange}
       icon={{ name: 'search'}} style={{margin: '40px'}}/>
      {props.searchResults(props.searchTerm).map((site) => (
        <Marker key={site.id} latitude={parseFloat(site.latitude)} longitude={parseFloat(site.longitude)}>
          <div>
              <img src={ballotBox} alt="Ballot Box Icon" className="marker-button"
              onClick={(e) => setSite(site)}/>            
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
            }}>
            <div>
              <h4>{clickededSite.site_name}</h4>
              <p>District {clickededSite.council_district}</p>
              <p>{clickededSite.street_number + ' ' + clickededSite.street_name + ', ' + clickededSite.borough}</p>
              <p><Icon name='wheelchair' color='teal'/> {clickededSite.handicap_entrance}</p>
              <Button onClick={(e) => props.handleSiteClick(e, clickededSite)}>
                    <Icon name='comments outline' />Chat</Button>
            </div>  
        </Popup>
      )
        :
        null}
      </ReactMapGL>
    </>
  )
  }
