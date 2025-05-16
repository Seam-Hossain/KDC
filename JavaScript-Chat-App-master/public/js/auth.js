// var firebaseConfig = {
//     apiKey: "",
//     authDomain: "saylani-chatapp.firebaseapp.com",
//     databaseURL: "",
//     projectId: "",
//     storageBucket: "",
//     messagingSenderId: "",
//     appId: "",
//     measurementId: ""
// };






  // Import the functions you need from the SDKs you need
//import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAcK4grqyOnxKvZxsvUX1cRPWCtDSOrEUs",
    authDomain: "kdc-chat.firebaseapp.com",
    projectId: "kdc-chat",
    storageBucket: "kdc-chat.firebasestorage.app",
    messagingSenderId: "130173995534",
    appId: "1:130173995534:web:729280023db8614d8c0a5f"
  };









// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        location.href = 'chat.html';
    }
});

var error = document.getElementById('error');

loginWithGithub = () => {

    var provider = new firebase.auth.GithubAuthProvider();
        
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // The signed-in user info.
        var user = result.user;
        console.log('Github Sign in', user)

        const userInfo = {
            name: user.displayName,
            email: user.email,
            imageUrl: user.photoURL,
        }
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
        location.href = 'chat.html';

    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        error.innerHTML = errorMessage

    });

}

const SigninWithGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
        prompt: 'select_account'
    });

    firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            // This gives you a Google Access Token.
            // The signed-in user info 
            console.log('user login succesFully', result.user.displayName)
            const userInfo = {
                name: result.user.displayName,
                email: result.user.email,
                imageUrl: result.user.photoURL,
            }
            localStorage.setItem('userInfo', JSON.stringify(userInfo))
            location.href = 'chat.html';
        })
        .catch((error) => {
            // Handle Errors here.
            var errorMessage = error.message;
            error.innerHTML = errorMessage
        });
}




SigninWithFacebook = () => {

    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        const userInfo = {
            name: user.displayName,
            email: user.email,
            imageUrl: user.photoURL
        }
        // console.log(userInfo, 'usersInfo');
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
        location.href = 'chat.html';
        // ...
    }).catch(function (error) {
        // Handle Errors here.
        var errorMessage = error.message;
        error.innerHTML = errorMessage

    });

}

