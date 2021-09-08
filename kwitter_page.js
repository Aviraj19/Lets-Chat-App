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
  user_name=localStorage.getItem("username_key");
  room_name=localStorage.getItem("roomname_key");
  document.getElementById("roomname").innerHTML="Room : "+room_name;
  function Send() {
        message=document.getElementById("message").value;
        firebase.database().ref(room_name).push({
        user:user_name,msg:message,like:0
        });
        document.getElementById("message").value="";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
username=message_data['user'];
message = message_data['msg'];
like =message_data['like'];
name_tag="<h4>"+username+"<img class='user_tick' src='tick.png'> </h4>";
message_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-info' id='"+firebase_message_id+"' value='"+like+"' onclick='updatelike(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'> Like:"+like+"</span> </button> <hr>"
row = name_tag+message_tag+like_button+span_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function updatelike(msg_id) {
      likes=document.getElementById(msg_id).value;
      likes = Number(likes)+1;
      firebase.database().ref(room_name).child(msg_id).update({
            like:likes
      });
}
function logout() {
      localStorage.removeItem("username_key");
      localStorage.removeItem("roomname_key");
      window.location="index.html";
}