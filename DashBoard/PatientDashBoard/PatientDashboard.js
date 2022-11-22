var id =  window.localStorage.getItem("id");
async function GetPatient() {
    const Getpatient = await fetch(`https://localhost:7013/api/Patient/GetPatientDetailsById?Id=${id}`);
    var get = Getpatient.json();
    return get;
}
let displayPatientDetails = async () => {
    console.log(Getpatient)
    var gets = await GetPatient();
    console.log(gets.data)
    const name = document.getElementById("Name")
    console.log(name);
    name.textContent = gets.data.userName;
}
displayPatientDetails();