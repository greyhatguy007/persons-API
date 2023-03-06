# Persons-API


**Note :** *The API is not yet hosted.*

<u><h2>Usage:</h2></u>

- Clone the repository

    `git clone https://github.com/greyhatguy007/persons-API.git`

- Install Node dependencies
    
    `npm install`

- Modify the port Number in server.js if needed *( Default is 3000 )*

    `const port = <port number>`

- Set the verbose flag true in server.js if needed *(Default is false)*

    `const verbose = true`

- Run the start script

    `npm run start`


<hr>

<u><h2>API Queries - Url</h2></u>

- To get all data
    
    - Method 1 : Use wildcard `*` in search query

    - Method 2 : use the following route

        `http://localhost:3000/api/`

- To get a random data

    `http://localhost:3000/api/random`

- Query with search and maxValue

    `http://localhost:3000/api/query?query=${QUERY}&maxVal=${MAXVALUE}`
    
    Example:

    `http://localhost:3000/api/query?query=john&maxVal=50`

- Get a data of particular id

    `http://localhost:3000/api/id/${ID}`

    Example:
    
    `http://localhost:3000/api/id/15325`

<hr>


<u><h2>When Deployed - UI</h2></u>

![ui-of-api](/public/imgs/ui.png)