// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyD8oRn6GsVLkiop6mwtlvLJ1vFuEMOiIKg",
  authDomain: "apna-gym-f5033.firebaseapp.com",
  projectId: "apna-gym-f5033",
  storageBucket: "apna-gym-f5033.appspot.com",
  messagingSenderId: "144589871781",
  appId: "1:144589871781:web:47197e784bf6b18a388b4c",
  measurementId: "G-H68R74PD0N"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// User Login
function userLogin() {
  const email = document.getElementById("userEmail").value;
  const password = document.getElementById("userPassword").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("userPanel").style.display = "block";
      alert("Login successful!");
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
}

// View All Members
function viewAllMembers() {
  const list = document.getElementById("allMembersList");
  list.innerHTML = "";

  db.collection("members").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const li = document.createElement("li");
      li.textContent = `${data.name} - ${data.email} - ${data.membershipType}`;
      list.appendChild(li);
    });
  });
}

// Search Members
function searchMembers() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const results = document.getElementById("searchResults");
  results.innerHTML = "";

  db.collection("members").get().then((snapshot) => {
    snapshot.forEach((doc) => {
      const data = doc.data();
      if (
        data.name.toLowerCase().includes(query) ||
        data.email.toLowerCase().includes(query)
      ) {
        const li = document.createElement("li");
        li.textContent = `${data.name} - ${data.email} - ${data.membershipType}`;
        results.appendChild(li);
      }
    });
  });
}

// Logout
function logout() {
  auth.signOut().then(() => {
    alert("Logged out successfully.");
    location.reload();
  });
}
