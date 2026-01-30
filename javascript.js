// Get elements
 let input = document.getElementById('searchInput')

let btn = document.getElementsByTagName('button')[0]

// Global data store
let userArray = []

// Create container for users
let container = document.createElement('div')
document.body.appendChild(container)

// ----------------------
// SEARCH + FILTER
// ----------------------
btn.addEventListener('click', function () {
  let searchValue = input.value.toLowerCase()

  let filteredUsers = userArray.filter(user =>
    user.name.toLowerCase().includes(searchValue)
  )

  renderUsers(filteredUsers)
})

// ----------------------
// FETCH USERS
// ----------------------
async function users() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await response.json()

    // Store only required fields
    let newStorage = data.map(user => ({
      id: user.id,
      name: user.name,
      note: user.note || ""
    }))

    localStorage.setItem('usersdata', JSON.stringify(newStorage))
  } catch (error) {
    console.log(error)
  }

  let res = localStorage.getItem('usersdata')
  if (res) {
    userArray = JSON.parse(res)
    renderUsers(userArray)
  }
}

// ----------------------
// RENDER USERS
// ----------------------
function renderUsers(users) {
  container.innerHTML = ""

  users.forEach(element => {
    // User card
    let div = document.createElement('div')
    div.className = "user-card"

    // Name
    let nameDiv = document.createElement('div')
    nameDiv.className = "user-name"
    nameDiv.innerHTML = element.id + " - " + element.name

    // Note input
    let notesInput = document.createElement('input')
    notesInput.placeholder = "Add note"

    // Add button
    let addBtn = document.createElement('button')
    addBtn.innerHTML = "ADD"

    addBtn.addEventListener('click', function () {
      element.note = notesInput.value
      localStorage.setItem('usersdata', JSON.stringify(userArray))
      renderUsers(userArray)
    })

    // Append elements
    div.appendChild(nameDiv)
    div.appendChild(notesInput)
    div.appendChild(addBtn)

    // Show saved note if exists
    if (element.note) {
      let noteDiv = document.createElement('div')
      noteDiv.className = "user-note"
      noteDiv.innerHTML = element.note
      div.appendChild(noteDiv)
    }

    container.appendChild(div)
  })
}

// Initial call
users()































// let input=document.getElementsByTagName('input')[0]
// let userArray=[];
// let btn=document.getElementsByTagName('button')[0] 
// let container=document.createElement('div')
// document.body.appendChild(container)
// btn.addEventListener('click',function(){
   
//    let filteruser=userArray.filter((element)=>(element.name.toLowerCase().includes(input.value.toLowerCase())
    
// ))
// container.innerHTML = ""


// filteruser.forEach((element) => {
//   let div = document.createElement('div')
//   div.className = "user-card"

//   let nameDiv = document.createElement('div')
//   nameDiv.className = "user-name"
//   nameDiv.innerHTML = element.id + " - " + element.name

//   let notes = document.createElement('input')
//   notes.placeholder = "Add note"

//   let add = document.createElement('button')
//   add.innerHTML = "ADD"

//   add.addEventListener('click', function () {
//     element.note = notes.value
//     localStorage.setItem('usersdata', JSON.stringify(userArray))

//     let noteDiv = document.createElement('div')
//     noteDiv.className = "user-note"
//     noteDiv.innerHTML = element.note

//     div.appendChild(noteDiv)
//     div.appendChild(nameDiv)
// div.appendChild(notes)
// div.appendChild(add)
// container.appendChild(div)

//   })

 

// })
// async function users() {
//     try{
//         let response=await fetch('https://jsonplaceholder.typicode.com/users')
//         let data=await response.json()
//         let newstorage=[]
//         data.forEach(element => {
//             let storage={
//                 id:element.id,
//                 name:element.name
//             }
//              newstorage.push(storage)
            
//         });
//        localStorage.setItem('usersdata',JSON.stringify(newstorage))
        
        
//     } 

//     catch(error){
//         console.log(error)
//     }
//     let res=localStorage.getItem('usersdata')
//     if(res){
//          userArray=JSON.parse(res)
//         userArray.forEach(element=>{
//             let div=document.createElement('div')
//             div.className = "user-card"
//             let nameDiv = document.createElement('div')
// nameDiv.className = "user-name"
// nameDiv.innerHTML = element.id + " - " + element.name
// div.appendChild(nameDiv)

//              if (element.note) {
//     let noteDiv = document.createElement('div')
//     noteDiv.innerHTML = element.note
//     div.appendChild(noteDiv)
//   }
//        container.appendChild(div)
//         })
//     }
        
       
// }
//  users()









