var Getpatient = document.getElementById('GetPatientDetails')
var id =  window.localStorage.getItem("id");
async function GetPatient() {
    const Getpatient = await fetch(`https://localhost:7013/api/Patient/GetPatientDetailsById?Id=${id}`);
    var get = Getpatient.json();
    return get;
}

async function EditPatient()
{
    console.log("Submitted....")
    var editBtn = document.querySelector('#edit-btn');
    var form = document.querySelector("#form");
    console.log(form,1);
    console.log(form,2);
    const data = new FormData(form);
    console.log(editBtn);
    console.log(data.get("emailAddress"));
    var id = window.localStorage.getItem("id");
    console.log(id);
    await fetch(`https://localhost:7013/api/Patient/Updatepatient?id=${id}`, {
            body: data,
            method: "PATCH",
       }) .then((resp) => {
               return resp.json();
           })
           .then((result) => {
               console.log(result);
               alert(result.message);
        })
}


let displayPatientDetails = async () => {
    console.log(Getpatient)
    var gets = await GetPatient();
     console.log(gets.data)
  if (gets.data == null) {
   Getpatient.innerHTML += `
           
       <div class="card-body">
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0"></h6>
          </div>
          <div class="col-sm-9 text-secondary">
            User Does Not Exist
          </div>
        </div>`
  }
  const name = document.getElementById("Name")
  console.log(name);
  console.log(gets)
name.textContent = gets.data.firstName +" "+gets.data.lastName;
  Getpatient.innerHTML += `
    
        <form id="form" onsubmit="EditPatient()" enctype="multipart/form-data" action="#"> 
        
        <div class="card-body">
        
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">First Name</h6>
          </div>
          <input class="col-sm-9 text-secondary" placeholder=${gets.data.firstName} value=${gets.data.firstName} name="firstName">
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Last Name</h6>
          </div>
          <input class="col-sm-9 text-secondary" placeholder=${gets.data.lastName}  value=${gets.data.lastName} name="lastName">
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Age</h6>
          </div>
          <input class="col-sm-9 text-secondary" placeholder=${gets.data.age} value=${gets.data.age} name="age">
        </div>
        <hr>
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Phone Number</h6>
          </div>
          <input class="col-sm-9 text-secondary" placeholder=${gets.data.phoneNumber} value=${gets.data.phoneNumber} name="phoneNumber">
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Email</h6>
          </div>
          <input class="col-sm-9 text-secondary" placeholder=${gets.data.email} value=${gets.data.email} name="emailAddress">
        </div>
        
        <hr>
        <div class="row">
             <input class="btn btn-info " target="__blank" href="" id="edit-btn"  type="submit" value="Edit">
        </div>
      </div>
      <hr>
        
        </form>
        `
}



displayPatientDetails();




