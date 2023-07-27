<div id="header" align="center">
  <img src="https://cdn-icons-png.flaticon.com/128/8841/8841503.png" width="100"/>
</div>
<div align="center">
<h2>Hello ! <h2>
  <p>Hemant Ajay Sharma here !</p> 
</div>

<!-- Links to social profiles  -->
<div id="badges" align="center">
  <a href="https://www.linkedin.com/in/kaustubh-sule-b46303229/ ">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
  <!-- <a href="https://youtu.be/JkI1acKmYl0">
    <img src="https://img.shields.io/badge/YouTube-red?style=for-the-badge&logo=youtube&logoColor=white" alt="Youtube Badge"/>
  </a> -->
  <a href="https://twitter.com/KaustubhSule ">
    <img src="https://img.shields.io/badge/Twitter-blue?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter Badge"/>
  </a>
</div>
Note : The database is deployed on MongoDB Atlas. And the backend server will be deployed on Render. 
<!-- Since, you don't have to create a local host, you can skip the following steps under 'Getting Started'.  -->
You can use Postman to make API calls to/from the database and verify. More on that under 'API Documentation'.
  
  <!-- ## Getting Started

Clone the repository on your local machine with the command below in your terminal, and cd into the **my-app** -->

<!-- Insert repo link below -->

<!-- ```bash
https://github.com/sulekaustubh/BookMyShow-App-Backend.git

cd my-app
``` -->

<!-- Install dependencies (if you are using yarn then do with that) -->

<!-- ```bash
npm install
``` -->

<!-- ### `npm run dev` -->

<!-- Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in your browser. -->

## Project Description

<b>Project Name : <i>Reserve Bus</i> </b>

<!-- <a href ="https://bookmyshow-project-frontend.vercel.app"/>
Live Here
</a> -->
<!-- <br></br> -->

<b>Backend Deployment:</b>

<!-- <a href="https://bookmyshow-project-backend.vercel.app"/>
Live here
</a> -->

<!-- <br></br> -->

<!-- <b>Configure Database:</b>
Open MongoDB Compass and use Mongo_URI given below
(**Mongo_URI**="mongodb+srv://bms:bms123@bookmyshowDB.1bw2pfo.mongodb.net/bookMovie?retryWrites=true&w=majority") -->

 <!-- </br> -->

## Languages and Tools used:

 <div>
<img src="https://skills.thijs.gg/icons?i=mongodb" title="MongoDB" alt="MongoDB"/>&nbsp;
  <img src="https://avatars.githubusercontent.com/u/10251060?s=200&v=4" title="Postman" alt="Postman" width="50" height="50"/>&nbsp;
  <img src="https://skills.thijs.gg/icons?i=nodejs" title="NodeJS" alt="NodeJS" />&nbsp;
  <img src="https://pngimage.net/wp-content/uploads/2018/05/express-js-png-5.png" title="ExpressJS" alt="ExpressJS" width="50" height="50"/>&nbsp;  
</div><br>

<!-- <b>Team Collaborators: </b>

  <p>➤ <i>Ritu Verma</i></p>
  <p>➤ <i>Saad Ansari</i> </p>
  <p>➤ <i>Md. Ashif Reza</i></p>
  <p>➤ <i>Kaustubh Sule</i></p> -->
 <br>

# API Documentation

- This API Documentation deals with the specifications of endpoints used in the full-stack project named the 'Reserve Bus' App.
- Various endpoints allow us to view available buses, book new tickets, view booking details, etc.
<!-- - After successfully signing in, the user will be re-directed to Tickets Booking page. It has 2 methods for Movie Ticket Booking: GET and POST.  -->
- The GET method will fetch the Last Booking details from the database associated with the user and display them under their respective section. The POST method will allow users to book tickets and store data in the database. An in-depth understanding of the usage of API endpoints is mentioned below.

## GET

The GET method is a HTTP method that is applied while requesting information from a particular source. It is also used to get a specific variable derived from a group.

**GET request for checking available trips**

**Request method**: `GET`

**URL if using Local Host**: `http://localhost:3000/trips`

<!-- **URL if using Postman** : `https://bookmyshow-project-backend.vercel.app/api/booking` -->

<!-- **Auth required** : YES -->

**Data constraints/Schema**

```json
{
  "amenities_list": [],
  "date": "",
  "from": "",
  "to": "",
  "busOwnerID": "",
  "startTime": "",
  "EndTime": "",
  "category": "",
  "SeatBooked": [],
  "bus_no": "",
  "animeties_list": [],
  "busFare": "",
  "busName": ""
}
```

<!-- **Data example** -->

<!-- ```json
{
    "movie": "Tenet",
    "slot": "8:00 AM",
    "seats": {
        "A1": 9,
        "A2": 2
    }
}
``` -->

### Success Response

**Code** : `200 OK`

**Content example**

```json
[
  {
    "_id": "64a2acf2a578c797f728c789",
    "date": "2023-01-17T18:30:00.000Z",
    "from": "ChIJL_P_CXMEDTkRw0ZdG-0GVvw",
    "to": "ChIJbU60yXAWrjsR4E9-UejD3_g",
    "busOwnerID": 123,
    "startTime": "2023-01-17T18:30:00.000Z",
    "EndTime": "2023-01-17T18:30:00.000Z",
    "category": "A/C Sleeper (2+1)",
    "SeatBooked": ["1UA", "3UA", "4LB", "4LC"],
    "bus_no": "",
    "amenities_list": [],
    "busFare": 850,
    "busName": "IntrCity Smart Bus",
    "__v": 0
  }
]
```

### Error Response

<!-- **Code** : `401 Unauthorized`

**Content example**

```json
{
    "error": "Please authenticate using a valid token"
}
``` -->

**Code** : `500 BAD REQUEST`

**Content example**

```json
{
  "error": "Internal server error"
}
```

## POST

POST is an HTTP method designed to send data to the server from an HTTP client. It requests the web server to accept the data enclosed in the body of the POST message.

**POST request for saving booked tickets**

**Request method**: `POST`

<!-- **URL if using Local Host**: [**http://localhost:8080/api/booking**](http://localhost:8080/api/booking) -->

**URL if using Local Host** : `http://localhost:3000/trips/ticket-details`

**Add required headers** : `Content-type : application/JSON`

<!-- **URL if using Postman** : `https://bookmyshow-project-backend.vercel.app/api/booking`

**Auth required** : `YES` -->

**Data constraints**

```json
{
  "userName": "",
  "date": "",
  "from": "",
  "to": "",
  "seatNumber": "",
  "category": "",
  "busName": "",
  "busFare": ""
}
```

**Data example**

```json
{
  "userName": "Kaustubh Sule",
  "date": "2023-07-08",
  "from": "Navsari",
  "to": "Surat",
  "seatNumber": "17",
  "category": "AC",
  "busName": "INTR-CTY",
  "busFare": "700"
}
```

### Success Response

**Code** : `201 OK`

**Content example**

```json
{
  "message": "Booked tickets have been saved."
}
```

### Error Response

<!-- **Code** :`401 Unauthorized`

**Condition** :**If user authorization is missing**

**Content example**

```json
{
    "error": "Please authenticate using a valid token"
}
```

**Code** : `400 BAD REQUEST`

**Condition** : **If movie name is missing**

**Content example**

```json
{
    "errors": [
        {
            "value": "",
            "msg": "Movie name is required",
            "param": "movie",
            "location": "body"
        }
    ]
}
```

**Condition** : **If time-slot is missing**

**Content example**

```json
{
    "errors": [
        {
            "value": "",
            "msg": "time is required",
            "param": "slot",
            "location": "body"
        }
    ]
}
```

**Condition** : **If seat-slot is missing**

**Content example**

```json
{
    "errors": [
        {
            "value": "",
            "msg": "seat is required",
            "param": "seats",
            "location": "body"
        }
    ]
}
``` -->

**Code** : `500`

**Content example**

```json
{
  "error": "Internal Server Error"
}
```

## GET

The GET method is a HTTP method that is applied while requesting information from a particular source. It is also used to get a specific variable derived from a group.

**GET request for filtered fetching based on passed parameters**

**Request method**: `GET`

**URL if using Local Host**: `localhost:3000/trips/parameter`

**Available parameters**:`from, to, category`

<!-- **URL if using Postman** : `https://bookmyshow-project-backend.vercel.app/api/booking` -->

<!-- **Auth required** : YES -->

**Example parameter**: `to: Mumbai`

<!-- ```json
{
    "amenities_list": [],
    "date": "",
    "from": "",
    "to": "",
    "busOwnerID": "",
    "startTime": "",
    "EndTime": "",
    "category": "",
    "SeatBooked": [],
    "bus_no": "",
    "animeties_list": [],
    "busFare": "",
    "busName": ""
}
``` -->

<!-- **Data example** -->

<!-- ```json
{
    "movie": "Tenet",
    "slot": "8:00 AM",
    "seats": {
        "A1": 9,
        "A2": 2
    }
}
``` -->

### Success Response

**Code** : `200 OK`

**Content example**

```json
[
  {
    "_id": {
      "$oid": "64a2acf2a578c797f728c789"
    },
    "date": {
      "$date": "2023-01-17T18:30:00.000Z"
    },
    "from": "ChIJL_P_CXMEDTkRw0ZdG-0GVvw",
    "to": "Mumbai",
    "busOwnerID": 123,
    "startTime": {
      "$date": "2023-01-17T18:30:00.000Z"
    },
    "EndTime": {
      "$date": "2023-01-17T18:30:00.000Z"
    },
    "category": "A/C Sleeper (2+1)",
    "SeatBooked": ["1UA", "3UA", "4LB", "4LC"],
    "bus_no": "",
    "amenities_list": [],
    "busFare": 850,
    "busName": "IntrCity Smart Bus",
    "__v": 0
  }
]
```

### Error Response

<!-- **Code** : `401 Unauthorized`

**Content example**

```json
{
    "error": "Please authenticate using a valid token"
}
``` -->

**Code** : `500 BAD REQUEST`

**Content example**

```json
{
  "error": "Internal server error"
}
```

## POST

POST is an HTTP method designed to send data to the server from an HTTP client. It requests the web server to accept the data enclosed in the body of the POST message.

**POST request for adding NEW trips**

**Request method**: `POST`

<!-- **URL if using Local Host**: [**http://localhost:8080/api/booking**](http://localhost:8080/api/booking) -->

**URL if using Local Host** : `http://localhost:3000/trips`

**Add required headers** : `Content-type : application/JSON`

<!-- **URL if using Postman** : `https://bookmyshow-project-backend.vercel.app/api/booking`

**Auth required** : `YES` -->

**Data constraints**

```json
{
  "amenities_list": [],
  "_id": "",
  "date": "",
  "from": "",
  "to": "",
  "busOwnerID": null,
  "startTime": "",
  "EndTime": "",
  "category": "",
  "SeatBooked": [],
  "bus_no": "",
  "animeties_list": [],
  "busFare": null,
  "busName": ""
}
```

**Data example**

```json
{
  "amenities_list": [],
  "date": "2023-01-17T18:30:00.000Z",
  "from": "ChIJL_P_CXMEDTkRw0ZdG-0GVvw",
  "to": "ChIJbU60yXAWrjsR4E9-UejD3_g",
  "busOwnerID": 123,
  "startTime": "2023-01-17T18:30:00.000Z",
  "EndTime": "2023-01-17T18:30:00.000Z",
  "category": "A/C Sleeper (2+1)",
  "SeatBooked": ["1UA", "3UA", "4LB", "4LC"],
  "bus_no": "",
  "animeties_list": [
    "Live Tracking",
    "Policies",
    "Photos",
    "Amenities",
    "Reviews"
  ],
  "busFare": 850,
  "busName": "IntrCity Smart Bus"
}
```

### Success Response

**Code** : `201 OK`

**Content example**

```json
{
  "message": "Trip added successfully."
}
```

### Error Response

**Code** : `500`

**Content example**

```json
{
  "error": "Internal Server Error"
}
```
