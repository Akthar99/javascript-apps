
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDPrDax8i0f_rArzwy-mFneTDoDZQywDwI",
    authDomain: "responsive-icon-381009.firebaseapp.com",
    databaseURL: "https://responsive-icon-381009-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "responsive-icon-381009",
    storageBucket: "responsive-icon-381009.appspot.com",
    messagingSenderId: "176316913726",
    appId: "1:176316913726:web:cd9431dbcc483c6785d96f",
    measurementId: "G-RN9PKMRK2J"
  };

  // Initialize Firebase
  initializeApp(firebaseConfig)


  // init service 
  const db = getFirestore()

  // collection ref
  const colRef = collection(db, 'Blogs')

  // get collection data 
  getDocs(colRef)
    .then((snapshot) => {
      console.log(snapshot.docs)
    })


