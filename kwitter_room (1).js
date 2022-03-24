
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyD_OhCuQTejOC3XrlzChYFrCzuUwxHq5kE",
      authDomain: "kwitter-1eb7d.firebaseapp.com",
      databaseURL: "https://kwitter-1eb7d-default-rtdb.firebaseio.com",
      projectId: "kwitter-1eb7d",
      storageBucket: "kwitter-1eb7d.appspot.com",
      messagingSenderId: "867151647162",
      appId: "1:867151647162:web:6408dbfde251c66d398d83"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("roomname").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("roomname", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='roomname' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomname", name);
    window.location = "kwitter_page.html";
}

function logOut() {
localStorage.removeItem("user_name");
localStorage.removeItem("roomname");
    window.location = "kwitter.html";
}
