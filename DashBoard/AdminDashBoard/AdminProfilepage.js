var Getadmin=document.querySelector("#GetAdmin")
var id = window.localStorage.getItem("id");
console.log(id);
console.log(Getadmin)
async function GetAdmin() {
    const GetAdmin= await fetch(`https://localhost:7013/api/Admin/GetAdminDetailsById?id=${id}`);
    var get = GetAdmin.json();
    return get;
}
let displayAdminDetails = async () => {
    var gets = await GetAdmin();
  console.log(gets.data)
  if (gets.data == null) {
    Getadmin.innerHTML += `
           
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
  const name = document.querySelector(".name")
    console.log(name);
    console.log(gets)
  name.textContent = gets.data.userName;
        Getadmin.innerHTML += `
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