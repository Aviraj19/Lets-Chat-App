var firebaseConfig = {
      apiKey: "AIzaSyDd1lg0ceaYZEserTfvHD-qqTFnuuvKv9E",
      authDomain: "kwitter-d6642.firebaseapp.com",
      databaseURL: "https://kwitter-d6642-default-rtdb.firebaseio.com",
      projectId: "kwitter-d6642",
      storageBucket: "kwitter-d6642.appspot.com",
      messagingSenderId: "1015919603538",
      appId: "1:1015919603538:web:28b4d468b89c835af5148b",
      measurementId: "G-D5Q6SZPVK3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("username_key");
    document.getElementById("user_name").innerHTML=" Welcome "+ username +"!";

   function addroom() {
    roomname=document.getElementById("room_name").value;
    localStorage.setItem("roomname_key",roomname)
    firebase.database().ref("/").child(roomname).update({purpose:"roomname"});
    window.location="kwitter_page.html"
   }
   function getData() 
   {
      firebase.database().ref("/").on('value', function(snapshot) 
      {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) 
      {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log(Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirect(current_room) {
   console.log(current_room);
   localStorage.setItem("roomname_key",current_room);
   window.location="kwitter_page.html";
}
function logout() {
      localStorage.removeItem("roomname_key");
      localStorage.removeItem("username_key");
      window.location="index.html";
}