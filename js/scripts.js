// Initialize Firebase
var config = {
    apiKey: "AIzaSyB0pG1dqK1oB_YEIghtaNwgNPmgf8JVByc",
    authDomain: "galvanic-axle-721.firebaseapp.com",
    databaseURL: "https://galvanic-axle-721.firebaseio.com",
    storageBucket: "galvanic-axle-721.appspot.com",
    messagingSenderId: "985459286619"
};
firebase.initializeApp(config);

var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user)
}).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
});
