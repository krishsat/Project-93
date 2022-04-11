
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCst-LjOyQ1Ly3bUK2qeZaSvMCjVlh21Dk",
      authDomain: "kwitter-ecaef.firebaseapp.com",
      projectId: "kwitter-ecaef",
      storageBucket: "kwitter-ecaef.appspot.com",
      messagingSenderId: "792869021734",
      appId: "1:792869021734:web:b86cab3ac951d5703f5ee7"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
