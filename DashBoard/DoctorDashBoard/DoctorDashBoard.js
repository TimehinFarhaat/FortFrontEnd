var id =  window.localStorage.getItem("id");
async function getDoctor() {
    const Getdoctor = await fetch(`https://localhost:7013/api/Doctor/GetDoctorDetailsById?Id=${id}`);
    var get = Getdoctor.json();
    return get;
}
let displayDoctorDetails = async () => {
    var gets = await getDoctor();
    console.log(gets.data);
    const name = document.getElementById("Name");
    console.log(name);
    name.textContent = gets.data.firstName + " " + gets.data.lastName;
}
displayDoctorDetails();