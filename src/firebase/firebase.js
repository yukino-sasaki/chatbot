import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCpOOdntPbnuF7SKWxBoe3Wkj2-DWeeLps",
    authDomain: "covid-19-chatbot-12595.firebaseapp.com",
    projectId: "covid-19-chatbot-12595",
    storageBucket: "covid-19-chatbot-12595.appspot.com",
    messagingSenderId: "528153799371",
    appId: "1:528153799371:web:9183663b216fde0d96094e",
    measurementId: "G-W5B0YYPFJ6"
};



export const auth = firebase.initializeApp(firebaseConfig);