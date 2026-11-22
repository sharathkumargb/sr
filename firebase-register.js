// Enable this module after creating firebase-config.js and applying firestore.rules.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const form = document.getElementById("registerForm");
const status = document.getElementById("registerStatus");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  status.textContent = "Submitting securely…";
  try {
    await addDoc(collection(db, "registrations"), {
      name: document.getElementById("regName").value.trim(),
      email: document.getElementById("regEmail").value.trim(),
      college: document.getElementById("regCollege").value.trim(),
      year: document.getElementById("regYear").value,
      createdAt: serverTimestamp()
    });
    status.textContent = "Registration submitted successfully.";
    form.reset();
  } catch (error) {
    console.error(error);
    status.textContent = "Could not submit. Check Firebase setup and Firestore rules.";
  }
});
