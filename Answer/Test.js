// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  // DisplayCheckedStar();
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function DisplayStars() {
  const box1 = document.querySelector(".modal-content");
  let box = `<div> </div>`;
  let num = 4;
  let nom = 5;
  if (num != 0) {
    for (i = 0; i < num; i++) {
      box += `<span class="fa fa-star checked"></span>`;
    }
    let no = nom - num;
    if (no != 0) {
      for (i = 0; i < no; i++) {
        box += `<span class="fa fa-star"></span>`;
      }
      box1.innerHTML += box;
    }
  } else {
    for (i = 0; i < nom; i++) {
      box += `<span class="fa fa-star"></span>`;
    }
    box1.innerHTML += box;
  }
}

function DisplayCheckedStar() {
  var w = 0;
  const box1 = document.querySelector(".modal-content");
  let box2 = `  <div class="rating"></div>`;
  box2 += `<i class="rating__star far fa-star"></i>
     <i class="rating__star far fa-star"></i>
     <i class="rating__star far fa-star"></i>
     <i class="rating__star far fa-star"></i>
    <i class="rating__star far fa-star"></i>`;
  box1.innerHTML += box2;
  const ratingStars = [...document.getElementsByClassName("rating__star")];

  const starClassActive = "rating__star fas fa-star";
  const starClassInactive = "rating__star far fa-star";
  const starsLength = ratingStars.length;

  let i;

  ratingStars.map((star) => {
    star.onclick = () => {
      i = ratingStars.indexOf(star);
      // console.log(i);
      console.log("sdfghjkl");
      const r = window.localStorage.getItem("w");
      if (star.className === starClassInactive) {
        w = i + 1;
        if (r == null) {
         window.localStorage.setItem("w", w)
        }
        else {
          window.localStorage.setItem("w",w)
        }
        for (i; i >= 0; --i) ratingStars[i].className = starClassActive;
      } else {
        w = i;
        if (r == null) {
          window.localStorage.setItem("w", w)
        }
        else {
            window.localStorage.setItem("w",w)
        }
      
        for (i; i < starsLength; ++i)
          ratingStars[i].className = starClassInactive;
      }
    };
  });
}
console.log(window.localStorage.getItem("w"))
