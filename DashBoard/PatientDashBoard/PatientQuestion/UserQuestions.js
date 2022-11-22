id = window.localStorage.getItem("id");
function GetUserQuestion()
{
    fetch(`https://localhost:7013/api/Question/GetUserQuestions?id=${id}`).
        then(res => res.json()).then(resp =>
        {
            console.log(resp);
            console.log(resp.status);
            console.log(resp.data)
            if (resp.status == true)
            {
                viewQuestions(id);
                const container = document.querySelector(".discussions-container");
                if (resp.data.length != 0)
                {
                   
                    for (let i = 0; i < resp.data.length; i++)
                    {
                        if (resp.data[i].answerContent.length != 0)
                        {
                        
                            card += `<div class="content">${resp.data[i].description}</div>`;
                              card += ` <button class="accuracy" id="seen" onclick=getAnswers(${resp.data[i].questionId}) >Answers</button>`;
                              card += ` <button class="accuracy" id="unseen" style="display:none" onclick=clearAns() >Clear Answer</button>`;
                            card += `<div class ="answerss" ></div>`;
                            card += "</div>";
                            container.innerHTML += card;
                        }
                        else
                        {
                            let card = `<div class="element"  >`;
                            card += `<div class="content">${resp.data[i].description}</div>`;
                            card += `<div class="content">No answer to this question<div>`;
                            card += "</div>";
                            container.innerHTML += card;
                        }
                   }
                    return;
                }
                else
                {
                    console.log(resp.data.description);
                        let card = `<div class="element"  >`;
                        card += `<div class="content">You have not ask any question</div>`
                        card += "</div>";
                        container.innerHTML += card;
                }
            }
    
            alert(resp.message)
            return;
       })
}








function getAnswers(questionId)
{
    let getUnseen = document.getElementById("unseen");
    getUnseen.removeAttribute("style");
    let getseen = document.getElementById("seen");
    getseen.style = "display:none"
    container = document.querySelector(".element");   
    contain = document.querySelector(".answerss");
    fetch(`https://localhost:7013/api/Question/GetQuestionsById?id=${questionId}`)
    .then((res) => res.json())
        .then((resp) =>
    {
        console.log(resp);
        console.log(resp.data);
        if (resp.data)
        {
            viewAnswers(questionId, id);
            console.log(contain)
            for (i = 0; i <resp. data.answerContent.length; i++)
            {
                console.log(resp.data.answerContent[i].description)
                let card = `<div></div>`;
                card+=`<div class="content">${resp.data.answerContent[i].description}</div>`;
                card += `<div class="content">Doctor Name:${resp.data.answerContent[i].doctorName}</div>`;
                card += `<div>
                <button class="btn" id="green${resp.data.answerContent[i].answerId}" onclick=AddLike(${resp.data.answerContent[i].answerId})><i class="fa fa-thumbs-up fa-lg" aria-hidden="true"></i></button>
                <button class="btn" id="red${resp.data.answerContent[i].answerId}"   onclick=RemoveLike(${resp.data.answerContent[i].answerId})><i class="fa fa-thumbs-down fa-lg" aria-hidden="true"></i></button>
                </div>`
                console.log(resp.data.answerContent[i].answerId)
                contain.innerHTML += card;
            }
        
        }
        else
        {
              // console.log(resp.data.description);
            let card = `<div class="element1"  >`;
            card += `<div class="content">${resp.data[i].description}</div>`;
            card += `<div class="content">No answer to this question<div>`;
             // card += ` <button class="accuracy">Answers</button>`;
            card += "</div>";
             contain.push(card);
        } 
    });
}



GetUserQuestion();
let clearAns = () => {
let getUnseen = document.getElementById("unseen");
let getseen = document.getElementById("seen");
getseen.removeAttribute("style");
getUnseen.style = "display:none"
const container = document.querySelector(".answerss");
container.innerHTML = "";
}






function AddLike(id)
{
var btn1 = document.getElementById(`green${id}`);
console.log(btn1);
var btn2 = document.getElementById(`red${id}`);
console.log(btn2.classList.contains('red'));
if (btn2.classList.contains('red'))
{
btn2.classList.remove('red');
} 
btn1.classList.toggle('green');
fetch(`https://localhost:7013/api/Answer/RateAnswer/${id}`,
{
method: "POST"
})
.then(res => res.json()).then(resp =>
{
  if (resp.status == true)
 {
      alert(resp.message);
      return;
  }
  else
  {
      alert(resp.message);
      return;
  }
})

}


function RemoveLike(id)
{

var btn1 = document.getElementById(`green${id}`);

var btn2 = document.getElementById(`red${id}`);
console.log(btn2)
console.log(btn2)
console.log(btn2.classList.contains('green'));

if (btn1.classList.contains('green')) {
btn1.classList.remove('green');
} 
btn2.classList.toggle("red");
console.log("DFGHJK")
fetch(`https://localhost:7013/api/Answer/RemoveAnswerRate/${id}`, {
method: "POST"
}).then(res => res.json()).then(resp =>
{
  if (resp.status == true)
  {
      alert(resp.message);
      return;
  }
else
 {
      alert(resp.message);
     return;
 }
})
}

 function viewAnswers(questionId, userId)
{
   fetch(`https://localhost:7013/api/View/ViewAnswers?userId=${userId}&questionId=${questionId}`,
    {
        method: 'PATCH',
        headers: {
            "content-type": "application/json",
        }

    }).then((res) => res.json()).then(resp => {
      console.log(resp)      
    })
}
 function viewQuestions(userId) {
 fetch(`https://localhost:7013/api/Answer/AnswerQuestion?userId=${userId}`,
      {
          method: 'PATCH',
          headers: {
              "content-type": "application/json",
          }
  
      }).then((res) => res.json()).then(resp => {
        console.log(resp)      
      })
  }