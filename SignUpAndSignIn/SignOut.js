const signoutbtn = document.querySelector("#sign-out-btn");
signoutbtn.addEventListener('click', function () {
    window.location.href = `/FrontPage/Index.html`
    localStorage.removeItem("token");
    localStorage.clear();

})
