import './../styles/styles.css'
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCRyRzHOt2MVxcea47Z5U_5rV51_-YQUfU",
  authDomain: "sda-firebase-17.firebaseapp.com",
  projectId: "sda-firebase-17",
  storageBucket: "sda-firebase-17.appspot.com",
  messagingSenderId: "494729382300",
  appId: "1:494729382300:web:ea0ed0f963d32a5e48e059"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// const myImageRef = ref(storage, "ZdjęcieCV.png");
// const myImg = document.createElement("img");
// myImg.src = `https://firebasestorage.googleapis.com/v0/b/${myImageRef.bucket}/o/${myImageRef.fullPath}?alt=media`;
// document.body.appendChild(myImg);

document.getElementById("myBtn").addEventListener("click", () => {
    const myInput = document.getElementById("myInput");
    const myStatus = document.getElementById("myStatus");

    const file = myInput.files[0];
    const myImgRef = ref(storage, file.name);
    myStatus.innerText = "Przesyłamy!";
    uploadBytes(myImgRef, file).then(() => {
        myStatus.innerText = "Przesłano!";
    });
})