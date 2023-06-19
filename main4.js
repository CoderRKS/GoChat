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
room_name = localStorage.getItem("room_name");
var playsound = document.getElementById("playsound");
var deletesound = document.getElementById("deletesound");
var sendsound = document.getElementById("sendsound");

function send() {
    sendsound.play();
    sendsound.volume = 0.15;
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
    });
    document.getElementById("msg").value = "";
}

function getData() {
    document.getElementById("name_name").innerHTML = "ID : " + " <b class='username'> " + user_name + " </b> ";
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                console.log(firebase_message_id);
                console.log(message_data);
                name = message_data['name'];
                message = message_data['message'];
                name_with_tag = " <h4 id='user_text'> " + " <b class='bold_name' id = 'name_my'> " + name + " </b> " + " <div class='message_text'> " + message + " </div> " + " </h4> ";
                row = name_with_tag;
                document.getElementById("output").innerHTML += row;
                playsound.play();
            }
        });
    });
}

function delet() {
    let chatRef = firebase.database().ref("/" + room_name);
    chatRef.remove();
    deletesound.play();
    deletesound.volume = 0.15;
}

document.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        send();
    }
});
setInterval(() => {
    var dt = new Date();
    var hours = dt.getHours();
    var AmOrPm = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12) || 12;
    var minutes = dt.getMinutes();
    var finalTime = hours + ":" + minutes + " " + AmOrPm;
    document.getElementById('timetext').innerHTML = finalTime;
}, 1000);

function logout() {
    window.location = "index5.html";
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    localStorage.removeItem("row");
}


getData();