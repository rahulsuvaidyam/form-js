
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
    let main = `<table class="table table-striped table-hover" >`;

    main = main + `<tr><th scope="col">Sr No.</th><th scope="col">Task</th><th scope="col">Edit</th><th scope="col">Delete</th></tr> `;

    for (let k = 0; k < clients.length; k++) {
        main = main + `<tr class-"bg-light">
        <td class="col-2">${[k+1]}</td>
        <td class="col-4">${clients[k].task}</td>
        <td class="col-3"><button class="btn btn-warning" onclick="editForm(${k})">edit</button></td>
        <td class="col-3"><button class="btn btn-danger" onclick="deleteClient(${k})">delete</button></td>
        </tr> `;
    }

    main = main + `</table>`;
    document.getElementById('table').innerHTML = main;
}

function clientDetails() {
    let task = document.getElementById('task').value;
    

    let client = {
        'task': task,
      
    };
    clients.push(client)

    setItem()

    document.getElementById('task').value = '';
  

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
    let newTask = document.getElementById('editTask').value;

    clients[index] = {
        task: newTask,
       
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
       <div class="input-group">
       <input class='form-control' type='text' id='editTask' value='${clients[index].task}' placeholder="Your name" /> <br> <br>
       <button class='btn btn-warning' onclick='editMember(${index})'>Update</button> 
   
       </div>
    </div>
    `
    
    document.getElementById('edit').innerHTML = str;

}
function detailForm(){
    let str = `
   
    <h2 class="h-2">Your details</h2>
   <div class="form-input">
    <div class="input-group">
       <input class="form-control"  type="text" name="task" id="task" placeholder="Your Task">
       <button class="btn btn-info" onclick="clientDetails()">ADD</button>
       </div>
   </div>
    `
    document.getElementById('edit').innerHTML = str;
}
function addForm(index){
    let str = `
    <div class="form-input">

    <h2 class='h-2'>Update Details</h2>
    <div class="input-group">
    <input class='input-1' type='text' id='editTask' placeholder="Updat Task" /> <br> <br>
    <button class='btn' onclick='(${index})'>Add</button> 
   </div>

    </div>
    `
    
    document.getElementById('edit').innerHTML = str;
}

