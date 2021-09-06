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

room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });

      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function back() {
      window.location = "kwitter_room.html";
}