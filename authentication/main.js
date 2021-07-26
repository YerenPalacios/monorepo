var firebaseConfig = {
    apiKey: "AIzaSyA28cRKrSeKo1HgTH9Xu-O0KNpOMahzsbw",
    authDomain: "prueba1-d3ab1.firebaseapp.com",
    projectId: "prueba1-d3ab1",
    storageBucket: "prueba1-d3ab1.appspot.com",
    messagingSenderId: "132074709724",
    appId: "1:132074709724:web:91d769d92916dceca08a19"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth()
  const firestore = firebase.firestore()
  const storage = firebase.storage()


const loginForm = document.querySelector('#loginForm')
const regForm = document.querySelector('#regForm')

const signOut =  document.querySelector('#signOut')

const loginGoogle = document.querySelector('#loginGoogle')
const regGoogle = document.querySelector('#regGoogle')

const loginFacebook = document.querySelector('#loginFacebook')

const login = (email, pass) =>{
    auth.signInWithEmailAndPassword(email, pass)
    .then(res=>{
        window.location.href='contenido.html'
    })
    .catch(error => alert(error.message))
}

const register = (email, pass) =>{
    auth.createUserWithEmailAndPassword(email, pass)
    .then(()=>{
        saveUserData(email)
        alert('registrado')
        regForm.reset()
    })
    .catch(error => alert(error.message))
}

const saveUserData = (email)=>
    firestore.collection('users').doc(email).set({
        photo:null,
        name:null,
        bio:null,
        phone:null,
        password:null,

    })
const saveUserData2 = (user)=>
    firestore.collection('users').doc(user.email).set({
        photo:user.photoURL,
        name:user.displayName,
        bio:null,
        phone:null,
        password:null,

    })


if(regForm)
regForm.addEventListener('submit',e=>{
    e.preventDefault()
    register(regForm['regEmail'].value, regForm['regPass'].value)
})

if(loginForm)
loginForm.addEventListener('submit',e=>{
    e.preventDefault()
    login(loginForm['loginEmail'].value, loginForm['loginPass'].value)
})


if(signOut)
signOut.addEventListener('click',e=>{
    e.preventDefault()
   auth.signOut().then(()=>window.location.href='/')
})


// google
if(loginGoogle)
loginGoogle.addEventListener('click',e=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
    .then(res =>{
        if(res.additionalUserInfo.isNewUser){
            saveUserData2(res.user).then(()=>{
                window.location.href='contenido.html'
            })
        } else {
            window.location.href='contenido.html'
        }
    }).catch(error => alert(error.message))

})




if(loginFacebook)
loginFacebook.addEventListener('click',e=>{
    const provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider)
    .then(res =>{
        window.location.href='contenido.html'
    }).catch(error => alert(error.message))

})




const getUser = (id) => firestore.collection('users').doc(id).get()

const loadUserData = async (userEmail) =>{
    const userContainer = document.querySelector('.data-show')
   
    
    if(userContainer){
        const fields = {
            photoField:userContainer.querySelector('#userPhoto'),
            nameField:userContainer.querySelector('#userName'),
            bioField:userContainer.querySelector('#userBio'),
            phoneField:userContainer.querySelector('#userPhone'),
            emailField:userContainer.querySelector('#userEmail'),
            passField:userContainer.querySelector('#userPass'),
            nameField2: document.querySelector('#userName2'),
            photoField2: document.querySelector('#userPhoto2')
        }
        
        let user = await getUser(userEmail)
        user = user.data()
        console.log(user)

        var storageRef = storage.ref()
        var url = await storageRef.child(userEmail+"/foto").getDownloadURL()
        

        if(user.photo){
            fields.photoField.src = url
            fields.photoField2.src = url
        }
        if(user.name){
            fields.nameField.innerHTML = user.name
            fields.nameField2.innerHTML = user.name
        }
        if(user.bio)
            fields.bioField.innerHTML = user.bio
        if(user.phone)
            fields.phoneField.innerHTML = user.phone
        if(userEmail)
            fields.emailField.innerHTML = userEmail
        if(user.pass)
            fields.passField.innerHTML = "******"


    }
    
 }




// actualizacion
const save = async ()=>{
    const newData = {}
    const id = auth.currentUser.email
    let data = await getUser(id)
    data = data.data()
    const form = document.querySelector('#updForm')

    form['updPhoto']?
        newData.photo = form['updPhoto'].value :
        newData.photo = data.photo
        // URL.revokeObjectURL(newData.photo)

    form['updName'].value != ""?
        newData.name = form['updName'].value :
        newData.name = data.name 

    form['updBio'].value != ""?
        newData.bio = form['updBio'].value :
        newData.bio = data.bio

    form['updPhone'].value != ""?
        newData.phone = form['updPhone'].value :
        newData.phone = data.phone
    
    form['updEmail'].value != ""?
        newData.email = form['updEmail'].value :
        newData.email = null

    form['updPass'].value!=""?
        newData.pass = form['updPass'].value :
        newData.pass = null
    
    var storageRef = storage.ref()
    var photoRef = storageRef.child(id+"/foto")

    // pendienteAqui lo de la foto, que en editar, se cambia porque abajo está agarrando directamente el archivo, toca poner algo como si está vacio pues dejar el anterior, toca ver si se usa el data base foto o que

    console.log(newData.photo)
    photoRef.put(form['selectPhoto'].files[0]).then((e)=>{
        firestore.collection('users').doc(id).set(newData).then(()=>{
            window.location.href="contenido.html"
        })
    })
    
}

const saveButton = document.querySelector('#saveChanges')
if(saveButton)
saveButton.addEventListener('click',e=>{
    save()
})

// cambioFoto
const changePhoto = ()=>{
    const photo = document.querySelector('#updPhoto')
    const input = document.querySelector('#selectPhoto')

    input.addEventListener('change',e=>{
        photo.src = URL.createObjectURL(e.target.files[0])
        console.log(photo.src)
        photo.onload = ()=>{
            URL.revokeObjectURL(photo.src)
        }
    })
}
if(document.querySelector('#updPhoto'))
changePhoto()





auth.onAuthStateChanged(user=>{
    if(user){
        loadUserData(user.email).then(()=>{
            document.querySelectorAll('.loading').forEach(e=>{
                if(e)
                e.style.display='none'
            })
        })
        
    } 
})









