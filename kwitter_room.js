// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBvAD0n0_knU74zhCeAqmOkB-VI8YGQWeU",
      authDomain: "kwitter-aed9d.firebaseapp.com",
      databaseURL: "https://kwitter-aed9d-default-rtdb.firebaseio.com",
      projectId: "kwitter-aed9d",
      storageBucket: "kwitter-aed9d.appspot.com",
      messagingSenderId: "574478709960",
      appId: "1:574478709960:web:57e63f8ee78d3fc96121fd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}