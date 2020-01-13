# Poll Check
A React.js and Ruby on Rails web application for communication about NYC polling sites, election day ride shares and voting problems  
Built by [Lisa LaRochelle](https://github.com/Lilaro)

## Technologies and Frameworks Used
### Backend
[Ruby on Rails](https://rubyonrails.org/) - server framework  
[PostgreSQL](https://www.postgresql.org/) - database  
[JWT](https://jwt.io/) and [bcrypt](https://rubygems.org/gems/bcrypt/versions/3.1.12) - authorization, authentication and encryption  
[Fast JSON Serializer](https://github.com/Netflix/fast_jsonapi)  
[Rest-Client](https://github.com/rest-client/rest-client) - HTTP request client  
[NYC Open Data](https://data.cityofnewyork.us/City-Government/Voting-Poll-Sites/mifw-tguq) - NYC polling site api  

### Frontend
[React.js](https://reactjs.org/docs/getting-started.html) - frontend JavaScript library  
[React Router DOM](https://www.npmjs.com/package/react-router-dom) - declarative routing library  
[Semantic UI](https://react.semantic-ui.com/) - UI component framework  
[Mapbox GL](https://docs.mapbox.com/mapbox-gl-js/api/) - map api  
[npm](https://www.npmjs.com/) - node package manager

## Installation

* First, install and run this project's backend. Click here for instructions: [Poll Check Backend](https://github.com/Lilaro/poll-check-backend)


* Clone this repository to your local machine: `https://github.com/Lilaro/poll-check-frontend.git`
* cd to the frontend directory
* Ensure you have access to the Mapbox api - Get a key [here](https://docs.mapbox.com/mapbox-gl-js/api/), create a file `.env` in the root directory and include `REACT_APP_MAPBOX_TOKEN="your_mapbox_key"`
* run `npm install && npm start`
* When prompted, agree to run the frontend on `http://localhost:3001`
