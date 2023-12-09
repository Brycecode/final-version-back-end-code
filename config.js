const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyD1uV9WlCRjcYJ7zwaEtjfKmR8k92HwoNw",
  authDomain: "foodapp-1de82.firebaseapp.com",
  projectId: "foodapp-1de82",
  storageBucket: "foodapp-1de82.appspot.com",
  messagingSenderId: "138049956446",
  appId: "1:138049956446:web:8ab86e658c33a4835c22cf"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("users");
const Category = db.collection("categories");
const Dishes = db.collection("dishes");
const Orders = db.collection("orders");
module.exports = { User, Category, Dishes, Orders };
