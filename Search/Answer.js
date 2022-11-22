console.log("The File...");
const form = document.querySelector("#answer");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    CreateAnswer();
    
})
let CreateAnswer = () => {
    const data = new FormData(form);
    
    fetch('https://localhost:7013/api/Answer/AnswerQuestion',
        {
            method: 'POST',
            body: data,

        }) .then((res) => res.json()).then(resp => {
            console.log(resp);
            console.log(resp.status);
            if (resp.status == true)
            {
           
               alert(resp.message)
            }
    
         alert(resp.message)
            
           
        })
};


async function DeleteAnswer(id)
{
    let response=fetch( `https://localhost:7013/api/Answer/DeleteAnswer?id=${id}`
    )
    const result = await response.json()
    console.log(result);
    if (result.status == 200)
    {
        alert(result.message);
    }
    else
    {
      alert(result.message)    
    }
    
}

function viewAllUserQuestion()
{
    var num = 0;
console.log("hfjfgfhgfjgh");

    fetch('https://localhost:7013/api/Question/GetQuestions',
    ).then((res) => res.json())
        .then(resp => {
        console.log("hfjfgfhgfjgh");
        console.log(resp.status);
        if (resp.status == true)
        {
            const table=document.querySelector("#table-Body")
            resp.data.forEach(element => {
                num += 1;
                console.log(element);
                table.innerHTML += `
                <thead>
                    <tr>
                        <td>${num}</td>
                        <td>${element.description}</td>
                       <button>View</button>
                    </tr>
                </thead>
                `
                element.answers.forEach(element =>
                {
                    
                })
            });
            
        }

        alert(resp.message);
        
       
    })
}

