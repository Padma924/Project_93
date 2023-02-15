var firebaseConfig = {
      apiKey: "AIzaSyAUg2s5wXmJsiWAa9nIF0Gc5l6t_NFC8kU",
      authDomain: "class-93-b04e1.firebaseapp.com",
      databaseURL: "https://class-93-b04e1-default-rtdb.firebaseio.com",
      projectId: "class-93-b04e1",
      storageBucket: "class-93-b04e1.appspot.com",
      messagingSenderId: "888856467133",
      appId: "1:888856467133:web:b016d99e128b4697f0c9d4"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
