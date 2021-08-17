var firebaseConfig = {
    apiKey: "AIzaSyBz85c0yZlIajWq4jfd7Z9zkFa2FWezGyk",
    authDomain: "kwitter-c0282.firebaseapp.com",
    databaseURL: "https://kwitter-c0282-default-rtdb.firebaseio.com",
    projectId: "kwitter-c0282",
    storageBucket: "kwitter-c0282.appspot.com",
    messagingSenderId: "520338246906",
    appId: "1:520338246906:web:b9f09409eea171ee824d43"
  };
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      username=document.getElementById("username").value;
      age = 12;
firebase.database().ref("/").child(username).update({
      purpose:"adding user",
      ageOld:age,
      family_name:"Martinez"
    });


}