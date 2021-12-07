// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyCgJ2UX6kQjwDUJqJ_fLAA1V20K55VJ77A",
      authDomain: "kwitter-f5aee.firebaseapp.com",
      databaseURL: "https://kwitter-f5aee-default-rtdb.firebaseio.com",
      projectId: "kwitter-f5aee",
      storageBucket: "kwitter-f5aee.appspot.com",
      messagingSenderId: "1091827493691",
      appId: "1:1091827493691:web:75c77ab1d7ab8dba05251e",
      measurementId: "G-LFWEKWTB6G"
    };

    const app = initializeApp(firebaseConfig);
    
    room_name = localStorage.getItem("username");
    document.getElementById("user_name").innerHTML = "welcom"+ user_name +"!";

    function addRoom() {
      room_name = document.getElementById("room_name").value;
      localStorage.setItem("roomname", room_name);
      window.location="kwitter_room.html";
      firebase.database().ref("/").child("room_name").update({
            purpose :"Adding Room Name"
      });
     
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();