


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAiA47w7vMLHES_vBnUaX8opTbykRnU9kQ",
  authDomain: "quiter2-948bc.firebaseapp.com",
  databaseURL: "https://quiter2-948bc-default-rtdb.firebaseio.com",
  projectId: "quiter2-948bc",
  storageBucket: "quiter2-948bc.appspot.com",
  messagingSenderId: "334182076230",
  appId: "1:334182076230:web:ddd3d677736d404236df47"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome  "+user_name;
function add_room(){
  r8=document.getElementById("input2").value;
  firebase.database().ref("/").child(r8).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name",r8);
  window.location="kwitter_page.html";
} 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log(Room_names);
     row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirecttoroomname(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
function logout(){

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location=("index.html");
}
