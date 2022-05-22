
let clients = [];
getItem();
detailForm()
renderTable();

// Session Storage
function getItem() {
    let memData = localStorage.getItem('clients');
    if (memData) {
        clients = JSON.parse(memData);
    } else {
        setItem();
    }
}
function setItem() {
    localStorage.setItem('clients', JSON.stringify(clients));
}
// dd
function renderTable() {
    let main = `<table >`;

    main = main + `<tr><th>Name</th><th>Email</th><th>Mobile No.</th><th>Edit</th><th>Delete</th></tr> `;

    for (let k = 0; k < clients.length; k++) {
        main = main + `<tr>
        <td>${clients[k].name}</td>
        <td>${clients[k].email}</td>
        <td>${clients[k].mobile}</td>
        <td><button class="button" onclick="editForm(${k})">edit</button></td>
        <td><button class="button" onclick="deleteClient(${k})">delete</button></td>
        </tr> `;
    }

    main = main + `</table>`;
    document.getElementById('table').innerHTML = main;
}

function clientDetails() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('mobile').value;

    let client = {
        'name': name,
        'email': email,
        'mobile': mobile
    };
    clients.push(client)

    setItem()

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mobile').value = '';

    renderTable();
}
// delet ============
function deleteClient(index) {
    clients.splice(index, 1);

    setItem()
    detailForm()
    renderTable();
}
// 
function editMember(index) {
    let newName = document.getElementById('editName').value;
    let newEmail = document.getElementById('editEmail').value;
    let newMobile = document.getElementById('editMobile').value;
    clients[index] = {
        name: newName,
        email: newEmail,
        mobile: newMobile
    }
    setItem()

    document.getElementById('edit').innerHTML = '';
    detailForm()
    renderTable();
}

function editForm(index) {
    let str = `
    <div class="form-input">

    <h2 class='h-2'>Update Details</h2>

    <label for="name">Name * </label> <br>
    <input class='input-1' type='text' id='editName' value='${clients[index].name}' placeholder="Your name" /> <br> <br>

    <label for="name">Email * </label> <br>
    <input class='input-1' type='text' id='editEmail' value='${clients[index].email}' placeholder="Your email"/> <br> <br>

    <label for="name">Mobile No * </label> <br>
    <input class='input-1' type='number' id='editMobile' value='${clients[index].mobile}' placeholder="Your mobile number"/> <br> <br>
    
    <button class='button' onclick='editMember(${index})'>Update</button> 

    </div>
    `
    
    document.getElementById('edit').innerHTML = str;

}
function detailForm(){
    let str = `
   
    <h2 class="h-2">Your details</h2>
   <div class="form-input">
    <div class="form-input-1">
        <label for="name">Name * </label> <br>
       <input class="input-1"  type="text" name="name" id="name" placeholder="Your name">
    </div>
    <div class="form-input-1">
        <label for="name">Email * </label> <br>
       <input class="input-1"  type="text" name="email" id="email" placeholder="Your email">
    </div>
    <div class="form-input-1">
        <label for="age">Mobile No * </label> <br>
        <input class="input-1"  type="number" name="mobile" id="mobile" placeholder="You mobile number">
    </div>
    <div class="form-input-1">
       <button class="button" onclick="clientDetails()">ADD</button>
    </div>
   </div>
    `
    document.getElementById('edit').innerHTML = str;
}
function addForm(){
    let str = `
    <div class="form-input">

    <h2 class='h-2'>Update Details</h2>

    <label for="name">Name * </label> <br>
    <input class='input-1' type='text' id='editName' placeholder="Your name" /> <br> <br>

    <label for="name">Email * </label> <br>
    <input class='input-1' type='text' id='editEmail' placeholder="Your email"/> <br> <br>

    <label for="name">Mobile No * </label> <br>
    <input class='input-1' type='number' id='editMobile' placeholder="Your mobile number"/> <br> <br>
    
    <button class='button' onclick='(${index})'>Add</button> 

    </div>
    `
    
    document.getElementById('edit').innerHTML = str;
}

