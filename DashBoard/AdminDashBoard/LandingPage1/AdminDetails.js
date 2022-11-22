var Getadmin = document.getElementById('GetPatientDetails')
var id =  window.localStorage.getItem("id");
async function GetAdmin() {
    const Getadmin = await fetch(`https://localhost:7013/api/Admin/GetAdminDetailsById?Id=${id}`);
    var get = Getadmin.json();
    return get;
}
let displayAdminDetails = async () => {
    console.log(Getpatient)
    var gets = await GetAdmin();
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
  name.textContent = gets.data.userName;
        Getpatient.innerHTML += `
           
       <div class="card-body">
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Full Name</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            ${gets.data.userName}
          </div>
        </div> 
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">First Name</h6>
          </div>
          <div class="col-sm-9 text-secondary">
             ${gets.data.firstName}
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Last Name</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            ${gets.data.lastName}
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Age</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            ${gets.data.age}
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Gender</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            ${gets.data.gender}
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Phone Number</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            ${gets.data.phoneNumber}
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Email</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            ${gets.data.email}
          </div>
        </div>
        <hr>
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Roles</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            ${gets.data.userRoles}
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Date Created</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            ${gets.data.dateCreated}
          </div>
        </div>
       
        `
}

displayAdminDetails();



