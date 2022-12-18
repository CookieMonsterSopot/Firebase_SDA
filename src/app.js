import './../styles/styles.css'
import { initializeApp } from "firebase/app";
import { deleteObject, getDownloadURL, getStorage, listAll, ref, uploadBytes } from "firebase/storage";

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
// const myInput = document.getElementById("myInput");

// myInput.addEventListener("change", () => {
//     const thumbnail = document.getElementById("thumbnail");
//     const file = myInput.files[0];
//     const fileReader = new FileReader();

//     fileReader.readAsDataURL(file);

//     fileReader.onloadend = function() {
//         thumbnail.src = fileReader.result;
//     }

//     console.log(file.name);
// })


// document.getElementById("myBtn").addEventListener("click", () => {
//     const myStatus = document.getElementById("myStatus");
//     const myFileNameInput = document.getElementById("myFileName");
//     const file = myInput.files[0];

//     let filename = "";
//     if(myFileNameInput.value){
//         filename = myFileNameInput.value;
//     }
//     else {
//         filename = file.name;
//     }

//     const myImgRef = ref(storage, filename);
//     myStatus.innerText = "Przesyłamy!";
//     uploadBytes(myImgRef, file).then(() => {
//         myStatus.innerText = "Przesłano!";
//     });
// })

// const imageRef = ref(storage, "image2.jpg");
// getDownloadURL(imageRef).then(url => {
//     const myImg = document.createElement("img");
//     myImg.src = url;
//     document.body.appendChild(myImg);
// })

const storageRef = ref(storage);
listAll(storageRef).then(res => {
    res.items.forEach(item => {
        getDownloadURL(item).then(url => {
            const myDiv = document.createElement("div");
            const myImg = document.createElement("img");
            const myHeader = document.createElement("h3");
            const myButton = document.createElement("button");
            myButton.innerText = "Usuń";
            myImg.src = url;

            myButton.addEventListener("click", () => {
                deleteObject(item).then(() => {
                    document.body.removeChild(myDiv);
                })
            });

            myHeader.innerText = item.fullPath;
            myDiv.appendChild(myImg);
            myDiv.appendChild(myHeader);
            myDiv.appendChild(myButton);
            document.body.appendChild(myDiv);
        })
    })
})