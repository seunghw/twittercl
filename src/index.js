import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDNRdi08NpuiTiLiHrK3AOtW0Pp4526CA4",
  authDomain: "twittercl-e7342.firebaseapp.com",
  projectId: "twittercl-e7342",
  storageBucket: "twittercl-e7342.appspot.com",
  messagingSenderId: "595713017245",
  appId: "1:595713017245:web:16a59968e31a8442911b74",
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
