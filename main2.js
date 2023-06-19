//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBZ6AJ8Af6n5EZxMI6xQEzbd7LyfcvjneM",
    authDomain: "gochat-aaa41.firebaseapp.com",
    databaseURL: "https://gochat-aaa41-default-rtdb.firebaseio.com",
    projectId: "gochat-aaa41",
    storageBucket: "gochat-aaa41.appspot.com",
    messagingSenderId: "603580579263",
    appId: "1:603580579263:web:84d23e0910c3097c9ef50a"
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