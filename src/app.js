import './../styles/styles.css'
import { initializeApp, onLog } from "firebase/app";
import { deleteObject, getDownloadURL, getStorage, listAll, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, onSnapshot, query, setDoc, updateDoc, where } from "firebase/firestore";
import { getDatabase, onChildAdded, onChildRemoved, onValue, push, ref as rtref, remove, set, update } from "firebase/database";
import { getAuth, EmailAuthProvider, GoogleAuthProvider, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import * as firebaseui from 'firebaseui';

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
const auth = getAuth(app);
const ui = new firebaseui.auth.AuthUI(auth);

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

// const name = document.getElementById("name");
// const surname = document.getElementById("surname");
// const addBtn = document.getElementById("addBtn");
// const usersList = document.getElementById("usersList");

// addBtn.addEventListener("click", () => {
//     const usersRef = rtref(rtdb, `users`);
//     const userRef = push(usersRef);
//     set(userRef, {
//         name: name.value,
//         surname: surname.value
//     })
// });

// const myRef = rtref(rtdb, 'users');
// onChildAdded(myRef, (userSnapshot) => {
//     const user = userSnapshot.val();
//     const li = document.createElement("li");
//     li.innerText = `${user.name} ${user.surname}`;
//     li.id = userSnapshot.key;

//     const btnRemove = document.createElement("button");
//     btnRemove.innerText = "Remove";
//     btnRemove.addEventListener('click', () => {
//         remove(userSnapshot.ref);
//     })
//     li.appendChild(btnRemove);

//     usersList.appendChild(li);
// })

// onChildRemoved(myRef, (userSnapshot)=> {
//     const liToRemove = document.getElementById(userSnapshot.key);
//     usersList.removeChild(liToRemove);
// })


// const name = document.getElementById("name");
// const addBtn = document.getElementById("addBtn");
// const docsList = document.getElementById("docsList");
// const docText = document.getElementById("docText");
// const docsRef = rtref(rtdb, `docs`);

// addBtn.addEventListener("click", () => {    
//     const docRef = push(docsRef);
//     set(docRef, {
//         name: name.value,
//         text: ''
//     })
// });


// onChildAdded(docsRef, (docSnapshot) => {
//     const myDoc = docSnapshot.val();
//     const li = document.createElement("li");
//     li.innerText = `${myDoc.name}`;

//     const btnEdit = document.createElement("button");
//     btnEdit.addEventListener("click", () => {
//         onValue(docSnapshot.ref, (currSnapshot) => {
//             docText.innerText = currSnapshot.val().text;
//         });

//         docText.addEventListener('change', () => {
//             update(docSnapshot.ref, {
//                 text: docText.value
//             })
//         })
//     })

//     btnEdit.innerText = "Edit";
//     li.appendChild(btnEdit);

//     docsList.appendChild(li);
// })

//INPUTS
const userName = document.getElementById('name');
const userSurname = document.getElementById('surname');
const userColor = document.getElementById('userColor');
const userMessage = document.getElementById('message');
const profilePhoto = document.getElementById('photoProfile');

//BUTTONS
const addUserBtn = document.getElementById('add');
const sendMessage = document.getElementById('send');
const signOutBtn = document.getElementById('signout');
const updatePhotoBtn = document.getElementById('updatePhoto');

//SELECTS
const usersSelect = document.getElementById('users');

//FORMS
const messageForm = document.getElementById('messageForm');

//CONTAINERS
const messagesContainer = document.getElementById('messages');

//REFS
const usersRef = rtref(rtdb, 'users');
const messagesRef = rtref(rtdb, 'messages');

let selectedUser;

sendMessage.addEventListener('click', () => {
    const messageRef = push(messagesRef);

    set(messageRef, {
        userName: selectedUser.name,
        userSurname: selectedUser.surname,
        userColor: selectedUser.color,
        text: userMessage.value,
        date: new Date().toISOString()
    }).then(() => {
        userMessage.value = '';
    })
})

usersSelect.addEventListener('change', () => {
    const userHeader = document.getElementById('selectedUser');

    if (usersSelect.value) {
        const user = JSON.parse(usersSelect.value);
        userHeader.innerText = `${user.name} ${user.surname}`;
        userHeader.style.color = user.color;
        selectedUser = user;
        messageForm.style.display = 'flex';
    }
    else {
        userHeader.innerText = '';
        selectedUser = undefined;
        messageForm.style.display = 'none';
    }
});

addUserBtn.addEventListener('click', () => {
    const userRef = push(usersRef);

    set(userRef, {
        name: userName.value,
        surname: userSurname.value,
        color: userColor.value
    }).then(() => {
        userName.value = '';
        userSurname.value = '';
        userColor.value = '';
    })
});

onChildAdded(usersRef, (userSnapshot) => {
    const user = userSnapshot.val();
    const option = document.createElement('option');
    option.innerText = `${user.name} ${user.surname}`;
    option.value = JSON.stringify(user);

    usersSelect.appendChild(option);
});

onChildAdded(messagesRef, (messageSnapshot) => {
    const message = messageSnapshot.val();
    const messageDiv = document.createElement('div');
    const authorSpan = document.createElement('span');
    const dateSpan = document.createElement('span');
    const messageSpan = document.createElement('span');

    authorSpan.innerText = `${message.userName} ${message.userSurname}`;
    dateSpan.innerText = new Date(message.date).toLocaleString();
    messageSpan.innerText = message.text;
    messageSpan.style.color = message.userColor;

    messageDiv.classList.add('message');
    messageDiv.appendChild(authorSpan);
    messageDiv.appendChild(dateSpan);
    messageDiv.appendChild(messageSpan);

    messagesContainer.appendChild(messageDiv);
})


ui.start('#firebaseui-auth-container', {
    signInOptions: [
        EmailAuthProvider.PROVIDER_ID,
        GoogleAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: "http://localhost:8080/"
});

onAuthStateChanged(auth, (user) => {
    const greetings = document.getElementById('greetings');
    if (user) {
        greetings.innerText = `Hello ${user.displayName}!`;
        signOutBtn.style.display = "block";
    }
    else {
        greetings.innerText = "Not logged in";
        signOutBtn.style.display = "none";
    }
})

signOutBtn.addEventListener('click', () => {
    signOut(auth);
})

updatePhotoBtn.addEventListener('click', () => {
    const file = profilePhoto.files[0];

    const photoFileRef = ref(storage, `${auth.currentUser.uid}/profilePhoto.jpg`);

    uploadBytes(photoFileRef, file).then((res) => {
        getDownloadURL(res.ref).then(url => {
            updateProfile(auth.currentUser, {
                photoURL: url
            })
        })
    })
})