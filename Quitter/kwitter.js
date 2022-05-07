
 
function adduser(){
    r=document.getElementById("input1").value;
    localStorage.setItem("user_name",r)
    window.location="kwitter_room.html";
}
