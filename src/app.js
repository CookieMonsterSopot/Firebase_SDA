import './../styles/styles.css'
import { initializeApp } from "firebase/app";
import { deleteObject, getDownloadURL, getStorage, listAll, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, onSnapshot, query, setDoc, updateDoc, where } from "firebase/firestore";
import { getDatabase, ref as rtref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCRyRzHOt2MVxcea47Z5U_5rV51_-YQUfU",
    authDomain: "sda-firebase-17.firebaseapp.com",
    projectId: "sda-firebase-17",
    storageBucket: "sda-firebase-17.appspot.com",
    messagingSenderId: "494729382300",
    appId: "1:494729382300:web:ea0ed0f963d32a5e48e059",
    databaseURL: "https://sda-firebase-17-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const rtdb = getDatabase(app);

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

// class Album {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
// }

// const albumConverter = {
//     toFirestore: (album) => {
//         return {
//             name: album.name,
//             year: album.year
//         };
//     },
//     fromFirestore: (snapshot, options) => {
//         const data = snapshot.data(options);
//         return new Album(data.name, data.year);
//     }
// }

// const albumName = document.getElementById("name");
// const albumYear = document.getElementById("year");
// const addAlbum = document.getElementById("addAlbum");

// addAlbum.addEventListener("click", () => {
//     const albumsRef = collection(db, "albums").withConverter(albumConverter);
//     addDoc(albumsRef, new Album(albumName.value, albumYear.value));
// })

// const photoFile = document.getElementById('photoFile');
// const albumId = document.getElementById('albumId');
// const addPhotoBtn = document.getElementById('addPhoto');

// const albumsCollection = collection(db, "albums");
// getDocs(albumsCollection).then(docs => {
//     const myOl = document.getElementById("albumsList");
//     docs.forEach((doc) => {
//         const myObj = doc.data();
//         const myLi = document.createElement("li");

//         const addPhotosBtn = document.createElement("button");
//         const showPhotosBtn = document.createElement("button");
//         addPhotosBtn.innerText = "Add photos";
//         showPhotosBtn.innerText = "Show photos";

//         addPhotosBtn.addEventListener('click', () => {
//             albumId.value = doc.id;
//         });

//         showPhotosBtn.addEventListener('click', () => {
//             const albumRef = ref(storage, doc.id);
//             document.getElementById('photos').innerHTML = '';

//             listAll(albumRef).then((res) => {
//                 res.items.forEach(item => {
//                     getDownloadURL(item).then(url => {
//                         const myImg = document.createElement("img");
//                         myImg.src = url;
//                         document.getElementById('photos').appendChild(myImg);
//                     })
//                 })
//             })
//         });

//         myLi.innerText = `${myObj.name} ${myObj.year}`;
//         myLi.appendChild(addPhotosBtn);
//         myLi.appendChild(showPhotosBtn);

//         myOl.appendChild(myLi);
//     });
// })

// addPhotoBtn.addEventListener('click', () => {
//     const file = photoFile.files[0];
//     const fileRef = ref(storage, `${albumId.value}/${file.name}`);
//     uploadBytes(fileRef, file);
// })


// const seconds = document.getElementById('seconds');
// const stoperDoc = doc(db, 'stopers', 'stoper');
// onSnapshot(stoperDoc, (doc) => {
//     seconds.innerText = doc.data().seconds;
// })

// let intervalId;
// let i = 0;

// const start = document.getElementById('start');
// const reset = document.getElementById('reset');

// start.addEventListener('click', () => {
//     if (intervalId) {
//         clearInterval(intervalId);
//     }

//     intervalId = setInterval(() => {
//         i++;
//         setDoc(stoperDoc, {
//             seconds: i
//         });
//     }, 1000);
// });

// reset.addEventListener('click', () => {
//     if (intervalId) {
//         clearInterval(intervalId);
//     }
//     i = 0;
//     setDoc(stoperDoc, {
//         seconds: 0
//     });
// });


// const myEmpDoc = doc(db, "employees/YOsXnQKfIUZGRF9Qm1wr");
// deleteDoc(myEmpDoc);

const name = document.getElementById("name");
const surname = document.getElementById("surname");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {
    const userRef = rtref(rtdb, `users/${name.value}${surname.value}`);
    set(userRef, {
        name: name.value,
        surname: surname.value
    })
});

