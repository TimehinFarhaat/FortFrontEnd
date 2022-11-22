const loginlink = document.querySelector("#login");
const signuplink = document.querySelector("#signup");
const signoutBtn = document.querySelector("#sign-out-btn");
if (localStorage.getItem('token') !== null)
{
    loginlink.style.visibility = "hidden";
    signuplink.style.visibility = "hidden";
}
else
{
    signoutBtn.style.visibility = "hidden";
}
