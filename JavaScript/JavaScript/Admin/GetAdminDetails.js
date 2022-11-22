var Getadmin = document.getElementById('GetAdminDetails')
var email = "sdfghj";
async function GetAdmin() {
    const getAdmin = await fetch(`https://localhost:7013/api/Admin/GetAdminDetailsByEmail?email=${email}`);
    var get = getAdmin.json();
    return get;
}
let displayAdminDetails = async () => {
    var num = 0;
    var gets = await GetAdmin();
            console.log(gets.data)
        Getadmin.innerHTML = `
           
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
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Date Created</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            ${gets.data.dateCreated}
          </div>
        </div>
    //     <hr>
    //     <div class="row">
    //       <div class="col-sm-3">
    //         <a class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
    //       </div>
    //     </div>
    //   </div>
    //   <hr>
        `
}

displayAdminDetails();


