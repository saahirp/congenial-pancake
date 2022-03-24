//YOUR FIREBASE LINKS
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
  room_name = localStorage.getItem("roomname");
function seNd()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
       });
      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> "+ name+"<img class='user_tick' src'tick (1).png'";
         message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)";
         span_with_tag= "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";

        row = name_with_tag+message_with_tag+like_button+span_with_tag;
        document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
  console.log("clicked on like button - "+message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  console.log(updated_likes);

  firebase.database().ref(room_name).child(message_id).update({
    like : updated_likes
  });

}

function logOut() {
localStorage.removeItem("user_name");
localStorage.removeItem("roomname");
window.location.replace("kwitter.html");
}