var stars = document.querySelectorAll(".stars");
console.log(stars);
stars.forEach(element => {
    console.log(element,4)
    element.addEventListener('click', function ()
    {
        document.getElementById("val").innerText = element.value;
    })
});