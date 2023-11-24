//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyDwkfO-e6uJqY6CXS-zWjmWtCEHS_1MolM",
    authDomain: "gochat-c5385.firebaseapp.com",
    databaseURL: "https://gochat-c5385-default-rtdb.firebaseio.com",
    projectId: "gochat-c5385",
    storageBucket: "gochat-c5385.appspot.com",
    messagingSenderId: "509492882170",
    appId: "1:509492882170:web:6a61f4d5cfac137a1bb743"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            room_name = childKey;
            row = "<div  class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}
getData();
function redirectToRoomName(name) {
    localStorage.setItem("room_name", name)
    window.location = "index3.html";
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

document.getElementById("user_name").innerHTML = "Welcome   " + user_name + "  !";


function add_room() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "index3.html";
}

document.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        add_room();
    }
});

function enter_room(){
    window.location = "rooms.html";
}

function create_room(){
    window.location = "index2.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("content_room").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                row = "<div class = 'room_name' id = " + Room_names + " onclick = ' redirectToRoomName(this.id)'>" + Room_names + "</div>"
                document.getElementById("content_room").innerHTML += row;
                //End code
          });
    });
}
getData();

function redirectToRoomName(name){
    localStorage.setItem("room_name",name);
    window.location = "index4.html";
}

function back(){
    window.location = "index2.html";
}