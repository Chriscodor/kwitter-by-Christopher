
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyDZ0UeA2-XbUtB5Te_GVgxq14mBwZuZyYM",
      authDomain: "qwitter-49447.firebaseapp.com",
      databaseURL: "https://qwitter-49447-default-rtdb.firebaseio.com",
      projectId: "qwitter-49447",
      storageBucket: "qwitter-49447.appspot.com",
      messagingSenderId: "677048219615",
      appId: "1:677048219615:web:bda1a7e1b38ca0c060f66a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome "+user_name +" 😁";

    function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    }



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function redirectToRoomName(name){
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      room_name.removeItem("room_name");
      window.location = "index.html";

}