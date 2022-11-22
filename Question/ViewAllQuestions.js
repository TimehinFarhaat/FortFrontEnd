function GetAllQuestion() {
  id = window.localStorage.getItem("id");
  fetch(`https://localhost:7013/api/Question/GetQuestions`)
    .then((res) => res.json())
    .then((resp) => {
          if (resp.status == true) {
        const container = document.querySelector(".discussions-container");
        if (resp.data.length != 0) {

          var card = `<div class="element"  >`;
          for (let i = 0; i < resp.data.length; i++) {
            if (resp.data[i].answerContent.length != 0) {
              card += `<div class="content">${resp.data[i].description}</div>`;
                card += ` <button class="accuracy" id="seen" onclick=getAnswers(${resp.data[i].questionId}) >Answers</button>`;
                card += ` <button class="accuracy" id="unseen" style="display:none" onclick=clearAns() >Clear Answer</button>`;
              card += `<div class ="answerss" ></div>`;
              card += "</div>";
              container.innerHTML += card;
            } else {
              let card = `<div class="element"  >`;
              card += `<div class="content">${resp.data[i].description}</div>`;
              card += `<div class="content">No answer to this question<div>`;
              card += "</div>";
              container.innerHTML += card;
            }
          }
        } else {
          let card = `<div class="element"  >`;
          card += `<div class="content">No Questions</div>`;
          card += "</div>";
          container.innerHTML += card;
        }
      }
      return;
    });
}






let clearAns = () => {
  let getUnseen = document.getElementById("unseen");
  let getseen = document.getElementById("seen");
  getseen.removeAttribute("style");
  getUnseen.style = "display:none"
      const container = document.querySelector(".answerss");
      container.innerHTML = "";
}
 






function getAnswers(id) {
    let getUnseen = document.getElementById("unseen");
    getUnseen.removeAttribute("style");
    let getseen = document.getElementById("seen");
    getseen.style = "display:none"
  fetch(`https://localhost:7013/api/Question/GetQuestionsById?id=${id}`)
    .then((res) => res.json())
    .then((resp) => {
        const container = document.querySelector(".answerss");  
        var contain = [];
      if (resp.data != null && container.childNodes.length == 0)  {
        if (resp.data.answerContent.length != 0) {
                    for (let i = 0; i < resp.data.answerContent.length; i++)
            {
           var card = `<div class="element${i}"  >`;
            card += `<div class="content">${resp.data.answerContent[i].description}</div>`;
              var ids = window.localStorage.setItem("AnswerId", resp.data.answerContent[i].Id);
            card += `<div class="content">Doctor Name:${resp.data.answerContent[i].doctorName}<div>`;
            let box = document.createElement("div");
            let num = resp.data.answerContent[i].rating;
            let nom = 5;
            if (num != 0) {
              for (let j = 1; j <= 5; j++) {
                let span = document.createElement("span");
                if (j <= num) {
                  span.classList = ["fa fa-star checked"];
                } else {
                  span.classList = ["fa fa-star"];
                }
                box.appendChild(span);
              }
              card += box.innerHTML;
            } else
            {
              for (let j = 0; j < nom; j++) {
                let span = document.createElement("span");
                span.classList = ["fa fa-star"];
                box.appendChild(span);
              }
              card += box.innerHTML;
              }
              card += `<div><button class="rateBtn" onclick="RateStar(${resp.data.answerContent[i].answerId})">Rate</button></div>`
              card +=`<div id="starContainer${resp.data.answerContent[i].answerId}"></div>`
              card += `</div>`
                contain.push(card);
          }
        }
      }
      else {
        let card = `<div class="element1"  >`;
        card += `<div class="content">${resp.data[i].description}</div>`;
        card += `<div class="content">No answer to this question<div>`;
          card += "</div>";
          contain.push(card);
      
        }   
        
        contain.forEach(item => {
            
          container.innerHTML += item;
        })
      displayRateBtns();
    });
}
GetAllQuestion();
    




function displayRateBtns()
{
  const rateButtons = document.querySelectorAll(".rateBtn");
  rateButtons.forEach(element => {
    let count = 0;
    element.addEventListener('click', function(e)
    {
      console.log("2");
      count++;
      if (count >=1)
      {
        console.log(element);
        element.setAttribute("onclick", "");
      }
    })
  })
}

function hideAndSubmitStars(starContainerId)
{
  const submitBtns = document.querySelectorAll('.submit-btns');
  const container = document.querySelector(`#starContainer${starContainerId}`);
  submitBtns.forEach(submitBtn =>
  {
    submitBtn.addEventListener('click', function (e)
    {
      container.style.visibility = "hidden";
    })  
  })
}




function RateStar(id)
{
  const container = document.querySelector(`#starContainer${id}`);
  
  let starDiv = `<div>
    <fieldset class="rating${id}">
          <input type="radio" id="star5" name="rating" value="5"  class="stars"/><label class = "full" for="star5" title="Awesome - 5 stars"></label>
          <input type="radio" id="star4" name="rating" value="4"  class="stars"/><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
          <input type="radio" id="star3" name="rating" value="3"  class="stars"/><label class = "full" for="star3" title="Meh - 3 stars"></label>
          <input type="radio" id="star2" name="rating" value="2"  class="stars"/><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
          <input type="radio" id="star1" name="rating" value="1"  class="stars"/><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
     </fieldset>   
     <button class="submit-btns">Submit</button>                                                                                        
  </div>`
  container.innerHTML += starDiv;
   ReturnStyles(id)
   var stars = document.querySelectorAll(".stars");
    console.log(stars);
    stars.forEach(element => {
    console.log(element,4)
    element.addEventListener('click', function ()
    {
        element.style.color = "yellow";
       hideAndSubmitStars(id)
    })
});

}



function ReturnStyles(id)
{
  var individualRatingDiv = document.querySelector(`.rating${id}`);
  var testStyle = ` border: none; float:left; `
  individualRatingDiv.setAttribute('style', testStyle);
  // var templateString1 =`
  // .rating${id}>input:checked ~ label,
  // .rating${id}:not(:checked) > label:hover,               
  //  .rating${id}:not(:checked) > label:hover ~ label {color: #FFD700} 
  //  .rating${id}> input:checked + label:hover, 
  //  .rating${id}>input:checked ~ label:hover,
  // .rating${id}>label:hover ~ input:checked ~ label,  
  // .rating${id}>input:checked ~ label:hover ~ label {color: #FFED85} `
  //  const styleTag1 = document.createElement('style');
  //    styleTag1.innerHTML = templateString1;
  //    document.head.insertAdjacentElement('beforeend', styleTag1);
  //   console.log(document.head)
  
  var IRDChildren = Array.from(individualRatingDiv.children);
  IRDChildren.forEach(element => {
    if (element.tagName.toLowerCase() === "input")
    {
      element.setAttribute('style', 'display: none')  
    }
    if (element.tagName.toLowerCase() === "label")
    {
      var labelStyle = `color:#ddd; 
      float: right`;
      const templateString = `.rating${id} > label:before
      {
        margin: 5px;
        font-size: 1.25em;
        font-family: FontAwesome;
        display: inline-block;
        content: "\\f005";
      }
      .rating${id} > input:checked, input:hover
      {
         color: #FFED85;
      }
      `
      const styleTag = document.createElement('style');
      styleTag.innerHTML = templateString;
      document.head.insertAdjacentElement('beforeend', styleTag);
      element.setAttribute('style', labelStyle);
    }
  })
  console.log(individualRatingDiv,208)
}

function AddRating()
{
  var ans = window.localStorage.getItem("AnswerId");
  var value = window.localStorage.getItem("w");
  fetch(`https://localhost:7013/api/Rating/AddRating?id=${ans}`, {
    method: 'POST',
    body: JSON.stringify(value),
    headers: {
        "content-type": "application/json",
    }
  })
    .then(e => {
    e.json()
    })
    .then(e => {
      console.log(e.data);
  })
    .catch(e => {
      console.log(e.data);
  })
}
  
