import React from 'react'
import {Card} from 'semantic-ui-react'

export default function Site(props) {
    return (
       
        <Card onClick={props.handleSiteClick}>
           {props.site.voter_entrance}, {props.site.city} - <strong>{props.site_name}</strong>
        </Card>
        
    )
}
