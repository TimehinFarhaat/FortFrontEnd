

function GetAllQuestion() {
    id = window.localStorage.getItem("id");
    fetch(`https://localhost:7013/api/Question/GetQuestions`)
      .then((res) => res.json())
      .then((resp) => {
        // console.log(resp);
        // console.log(resp.status);
        // console.log(resp.data);
        if (resp.status == true) {
          const container = document.querySelector(".discussions-container");
          if (resp.data.length != 0) {
            // console.log(resp.data.length);
            var card = `<div class="element"  >`;
            for (let i = 0; i < resp.data.length; i++) {
              if (resp.data[i].answerContent.length != 0) {
                //for (let j = 0; j < resp.data[i].answerContent.length; j++) {
  
                card += `<div class="content">${resp.data[i].description}</div>`;
                  card += ` <button class="accuracy" id="${resp.data[i].questionId}"  >Answers</button>`;
//card += ` <button class="accuracy" id="unseen" style="display:none" onclick=clearAns() >Clear Answer</button>`;
                card += `<div class ="answerss" ></div>`;
                card += "</div>";
                container.innerHTML += card;
              } else {
                // console.log(resp.data.description);
                let card = `<div class="element"  >`;
                card += `<div class="content">${resp.data[i].description}</div>`;
                card += `<div class="content">No answer to this question<div>`;
                // card += ` <button class="accuracy">Answers</button>`;
                card += "</div>";
                container.innerHTML += card;
              }
            }
          } else {
            // console.log(resp.data.description);
            let card = `<div class="element"  >`;
            card += `<div class="content">No Questions</div>`;
            card += "</div>";
            container.innerHTML += card;
            }
            CreateAns();
        }
  
        // alert(resp.message);
        return;
      });
  }
GetAllQuestion();

  












console.log("The File...");

const [quest, descriptionInput] = [document.querySelector("#form"),document.querySelector("#postContent")]
quest.addEventListener('submit', (e) => {
    e.preventDefault();
    CreateAnswer();
    
})




function CreateAnswer(id)
{
    const quest = document.querySelector("#form");
    DoctorId = window.localStorage.getItem("id");
    console.log(descriptionInput.value)
    const data = {
        "description": descriptionInput.value,
    }
    fetch(`https://localhost:7013/api/Answer/AnswerQuestion?questionId=${id}doctorid=${DoctorId}`,
    {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "content-type": "application/json",
        }

    }).then((res) => res.json()).then(resp =>
    {
        console.log(resp);
        console.log(resp.status);
        if (resp.status == true)
        {
            alert(resp.message)
            return;
        }

        alert(resp.message)
        return;
    })
}


function CreateAns(){
    var getbtn = document.querySelectorAll(".accuracy")
    getbtn.forEach(e => {
        e.addEventListener('click', event => {
            window.location.href = `/Answer/CreateAnswer.html?${event.target.id}`;
            console.log("while");
            var questionId=window.location.href.split('?')[1]
             console.log(questionId);
            CreateAnswer(questionId);
          })
    })
}