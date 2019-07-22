window.onscroll = function() {nav_pos()};

function nav_pos() {

  //menu position change
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.getElementById("nav-menu").style.position = "fixed";
    document.getElementById("nav-menu").style.top = "10%";
  } else {
    document.getElementById("nav-menu").style.position = "relative";
    document.getElementById("nav-menu").style.top = "0";
  }

  //menu background change
  //1700 and 2600
  if (document.body.scrollTop > 1700 && document.body.scrollTop < 2599 || document.documentElement.scrollTop > 1700 && document.documentElement.scrollTop < 2599) {
    document.getElementById("menu-one").style.backgroundColor = "white";
    document.getElementById("menu-two").style.backgroundColor = "#ffc400";
    document.getElementById("menu-three").style.backgroundColor = "white";
  } else if (document.body.scrollTop > 2400 || document.documentElement.scrollTop > 2400) {
    document.getElementById("menu-two").style.backgroundColor = "white";
    document.getElementById("menu-three").style.backgroundColor = "#ffc400";
  } else {
    document.getElementById("menu-one").style.backgroundColor = "#ffc400";
    document.getElementById("menu-two").style.backgroundColor = "white";
    document.getElementById("menu-three").style.backgroundColor = "white"; 
  }
}




Vue.component('todo-item', {
  props: ['todo'],
  template: `
          <div id='project-photo' class='col-xs-12 col-sm-3'>
            <img src="{{todo.image}}" class="img-fluid rounded" alt="Responsive image">
          </div>
          <div id='project-info' class='col-xs-12 col-sm-8'>
            <div class='project-title'> {{todo.title}} </div>
            <div id='words'>
               {{todo.text}}
            </div>
          </div>

          <hr id='project-hrz' class='col-12'>
          `
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    projectList: [
      {image: 'image/elevator-sim.jpg' , title: 'Elevator Simulator', 
      text: 'This project was developed as part of an assignment in CSC148H1. The goal of this project was to develop multiple elevator moving algorithms to' + 
      'compare multiple statistics, like how many people made it to there desired destination and the longest time someone had to wait until they arrived at there'+ 
      'desired floor. The algorithms included: A random algorithm using pythons built in library Random, an algorithm that went to the target floor of the first' + 
      'person who boarded that elevator or to the lowest floor that had atleast one person waiting if the elevator was empty, and an algorithm ' + 
      'to move to the closest target floor of all the passengers on the elevator or to the closest floor that had atleast one person waiting if the' + 
      'elevator was empty. Visualizations was done using pythons built in library, pygame. Testing was done using pythons build in library, hypothesis.'
    },
    {image: 'image/prefix.jpg', title: 'Prefix Trees and Melodies',
    text: `This project was developed as part of an assignment in CSC148H1. This project included taking a text file with words or sentences and different tree algortihms to store the data. The goal was then 
    to look up specific prefixes of words or sentences and find all the items that fit the criteria in the tree and to then test the speed of each tree storing algorithm. The algorithms included: A storing algorithm 
    that took each peice of text and inserted it into the tree with each node storing a value with a common prefix to each of its descendant values, andan algorithm to store values in a 
    compressed manner. This meant that every value must be stored with only the most common prefix associated with it. Role: I wrote multiple autocompleter objects to process the data in the files and clean them, 
    as well as process the search for all the items that fit a specific prefix. I also wrote the tree storing objects using the corresponding algorithms. Each object supported an initializer, finding its length, 
    storing values, removing values, and searching for all values that fit a specific prefix. Testing was done using pythons build in library, hypothesis.`
    },
    {image: 'image/fire.jpg', title: 'FireBall',
    text: `The goal of this game is for all players to dodge the incoming fire balls. The last person left standing wins the game. The game supports up to three players 
    currently, do to keyboard restrictions. The game also currently has three changable difficulty levels. The fire balls follow a random moving algorithm. This game was developed 
    using multiple python built in libraries including: Pygame, and Random. An AI-computer was developed to challenge players. The AI follows a moving algorithm that consists 
    of moving in the y direction when a fire ball is coming towards it in the x direction, and it is in its y coordinate range. Similar reasoning for moving in the x direction. 
    Optimization was considered, like using python's built in list to append current fire balls to a list instead of using a linked List which has a worse big-OH running time for 
    appending to the end.`
    },
    {image: 'image/utra1.jpg', title: 'Robtender (UtraHacks 2018)',
    text: `The goal of this project was to develop a liquid dispenser to help those who do not have time in the morning to make breakfast for 
    themselves. This project was developed in a four person team including myself. The other three members included an experienced web-developer, 
     fourth year electrical engineering student, and a second year computer science student. A web app was developed so that clients could place 
     in there order. In return they would recieve specific information about the type of drink they were ordering, including nutritional values 
     like calories and whether that drink was available. Once the order was confirmed, data was sent though a Raspberry Pi B+ to a python script 
     that processed the data and in return sent instructions to the Raspberry Pi that moved specific servo moters using circuits, letting the 
     liquid flow out into the cup. Role: I co-developed the python script along side the other computer science student. I also set up the 
     Raspberry Pi's development environment on my laptop and connected it to the python script. Lastly, I helped the electrical engineer set up 
     the hardware using curcuit technology and I also helped in the building and processing of the actual product.`
    },
    {image: 'image/smartcar.png', title: 'Find My Smart Car (UofT Hacks VI)',
    text: `This project was developed in a four person team including an experienced third year developer, a third year electrical engineer, 
    a first year computer science student, and myself. The goal of this project was to help people who may be visiting an unfamiliar place or
     people with disabilities to find there car without having to remember to tag there location like leading competitors. 
    
    People with a smart car would have to register there car online on the smart car interface. When they needed to find there car, they 
    would simply go on our web app and it would show them the location of there smart car. The web app was developed using HTML, CSS, and 
    Javascript. The front end was designed using bootstrap and the back end was designed using python and flask was used to connect both 
    of them. The smart car api was used to recieve the coordinates of ones car. The cars location was displayed to users using three google 
    maps apis. One was a general map showing directions to your car. The other was a streetview image of what is around your car, 
    with microsoft azures computer vision api being used to analyze this photo to give a description of the surroundings. The last google 
    api used was in case the car was not located on a street, so we used the api to get the nearest street location. 
    
    Role: I set up all the API's and their keys. I also designed and developed the front end of the web app as well as integrated all 
    the google map api's. I helped in the development of the back end as well as integrating flask to connect the front and back end 
    together.`
    },
    {image: 'image/angleo.png', title: 'Angleo (Con U Hacks IV)',
    text: `This project was developed in a four person team including an experienced fourth year developer, two experienced third year 
    web developers, and myself. The goal of this project was to try to merge the cultural differences currently present in Quebec. 
    Angleo is a mobile application aimed at anglophones in Quebec, so that they can go on the app and view all the nearby stores and 
    restaurants. They are then given a multitude of information about that place, including: directions, primary language, comments by 
    other users as well as a rating, cultual significance of that place, and translations of key words specific to that place. There was 
    also a camera feature that allowed users to take a picture of lets say a french menu, and in return recieved an english translation. 
    A static web page was also provided including information about cities and how well they integrate both english and french. This was 
    provided so the government can provide more resources and services in helping the cultural indifference to places that need it more. 
         
    The data was processed from The department of Canadian Heritage's data set and using Yelps API. Python was used to process the data 
    into JSON and the data was stored in a MongoDB database. React native was used for the mobile app development with Node.js 
    (+ Express.js) being used to deliver REST API to the app. Google cloud platform was used to host the back end. The data visualization 
    was designed using HTML, CSS, and javascript. The front end was designed using bootstrap, and google map API's and plot.ly were used to 
    isplay the data.
              
    Role: I designed and developed the front end for the data visualization web page as well as integrated the corresponding API's. I also 
    aided in the set up of the database, and developed the back end and rest API along side another team member.`
    },
    {image: 'image/linkup.png', title: 'LinkUp',
    text: `This project allows users to upload events with different attributes and restrictions, allowing other users to view those events and register if they are interested. 
    This was to help those that may not have alot of friends, or are new to an area and want to meet new people. This project has a unique feature that allows users to upload a spontaneous event, and 
    then users within a certain KM radius recieving a notification about that event.
    The app was developed using android studio IDE and adobe XD for front end design. Java was the primary language, with a SQLite database being used for data storage. Google Map APIs were used for the map 
    feature. Git was used for code upload.
    `
    }
    ]
  }
})