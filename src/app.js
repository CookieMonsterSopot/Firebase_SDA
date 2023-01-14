import './../styles/styles.css'
import { initializeApp } from "firebase/app";
import { deleteObject, getDownloadURL, getStorage, listAll, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, setDoc, updateDoc, where } from "firebase/firestore";

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
const db = getFirestore(app);

// const myImageRef = ref(storage, "nazwaFolder/ZdjęcieCV.png");
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

// async function loadImages() {
//     const storageRef = ref(storage);
//     const res = await listAll(storageRef);
//     res.items.forEach(async (item) => {
//         const url = await getDownloadURL(item);
//         const myDiv = document.createElement("div");
//         const myImg = document.createElement("img");
//         const myHeader = document.createElement("h3");
//         const myButton = document.createElement("button");
//         myButton.innerText = "Usuń";
//         myImg.src = url;

//         myButton.addEventListener("click", async () => {
//             await deleteObject(item);
//             document.body.removeChild(myDiv);
//         });

//         myHeader.innerText = item.fullPath;
//         myDiv.appendChild(myImg);
//         myDiv.appendChild(myHeader);
//         myDiv.appendChild(myButton);
//         document.body.appendChild(myDiv);
//     })
// }

// loadImages();

// const myName = document.getElementById("myName");
// const mySurname = document.getElementById("mySurname");
// const myAge = document.getElementById("myAge");
// const btn = document.getElementById("myBtn");

// btn.addEventListener("click", () => {
//     const usersCollection = collection(db, "users");
//     addDoc(usersCollection, {
//         name: myName.value,
//         surname: mySurname.value,
//         age: myAge.value
//     });
// });

// const myName = document.getElementById("myName");
// const mySurname = document.getElementById("mySurname");
// const myAge = document.getElementById("myAge");
// const btn = document.getElementById("myBtn");

// const jkDoc = doc(db, "users", `IdJanaKowalskiego`);
// getDoc(jkDoc).then(myDoc => {
//     const myObj = myDoc.data();
//     myName.value = myObj.name;
//     mySurname.value = myObj.surname;
//     myAge.value = myObj.age;
// })

// btn.addEventListener("click", () => {
//     setDoc(jkDoc, {
//         name: myName.value,
//         surname: mySurname.value,
//         age: myAge.value
//     }, {
//         merge: true
//     });
// });

// const myName = document.getElementById("myName");
// const mySurname = document.getElementById("mySurname");
// const myAge = document.getElementById("myAge");
// const btn = document.getElementById("myBtn");
// let myDoc;

// const usersCollection = collection(db, "users");
// getDocs(usersCollection).then(docs => {
//     const myOl = document.createElement("ol");
//     docs.forEach((doc) => {
//         const myObj = doc.data();
//         const myLi = document.createElement("li");
//         const editBtn = document.createElement("button");
//         editBtn.innerText = "Edit";
//         myLi.innerText = `${myObj.name} ${myObj.surname}`;
//         myLi.appendChild(editBtn);

//         editBtn.addEventListener("click", () => {
//             myName.value = myObj.name;
//             mySurname.value = myObj.surname;
//             myAge.value = myObj.age;
//             myDoc = doc.ref;
//         })

//         myOl.appendChild(myLi);
//     });
//     document.body.appendChild(myOl);
// })


// btn.addEventListener("click", () => {
//     updateDoc(myDoc, {
//         name: myName.value,
//         surname: mySurname.value,
//         age: myAge.value
//     });
// });

// const myQueryName = document.getElementById("queryName");
// const findBtn = document.getElementById("findBtn");
// const usersList = document.getElementById("usersList");

// const usersRef = collection(db, "users");

// findBtn.addEventListener("click", () => {
//     usersList.innerHTML = "";
//     const userQuery = query(usersRef, where("name", "==", myQueryName.value));
//     getDocs(userQuery).then((docs) => {
//         docs.forEach(userDoc => {
//             const user = userDoc.data();
//             const userListItem = document.createElement("li");
//             userListItem.innerText = `${user.name} ${user.surname}`;
//             usersList.appendChild(userListItem);
//         })
//     })
// })


const albumName = document.getElementById("name");
const albumYear = document.getElementById("year");
const addAlbum = document.getElementById("addAlbum");

addAlbum.addEventListener("click", () => {
    const albumsRef = collection(db, "albums");
    addDoc(albumsRef, {
        name: albumName.value,
        year: albumYear.value
    })
})
