var GetDoctor= document.getElementById('GetDoctorDetails')
var id =  window.localStorage.getItem("id");
async function getDoctor() {
    const Getdoctor = await fetch(`https://localhost:7013/api/Doctor/GetDoctorDetailsById?Id=${id}`);
    var get = Getdoctor.json();
    return get;
}
let displayDoctorDetails = async () => {
    var gets = await  getDoctor();
  console.log(gets.data)
  if (gets.data == null) {


    GetDoctor.innerHTML += `
           
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
  name.textContent = gets.data.firstName + gets.data.lastName;
        GetDoctor.innerHTML += `
           
       <div class="card-body">
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Full Name</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            ${gets.data.firstName} ${gets.data.lastName}
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
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Specialization</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            ${gets.data.specialization}
          </div>
        </div>
        <hr>
        <div class="row">Email:</div>
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

displayDoctorDetails();



 