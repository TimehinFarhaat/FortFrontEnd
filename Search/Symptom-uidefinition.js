const choices = new Choices('.choices-select', {
    silent: true,
    choices: window.Symptoms.map(Symptoms=> ({
        value: Symptoms.ID,
        label: Symptoms.Name
    })),
    removeItemButton: true
})

function getSymptoms() {
    return choices.getValue().map(c => c.value)
}

function getLanguage() {
    return 'en-gb'
}
const getButton = () => {
    const g = document.querySelector("#searchbtn");
    g.addEventListener("click", (e) => {
        e.preventDefault()
        console.log(e.target.id);
    })
}
async function onSearchClicked() {
    if ( getLanguage() !== null && getSymptoms()!== null)
    {
        const parameters = {
            language: getLanguage(),
            symptom_id:getSymptoms(),
            
        }

        const symptomResponse = await queryResults(parameters);
    
        if (symptomResponse.status !== 200) {
            // todo: Change to display a user-friendly error
            alert('An error occurred')
            return;
        }

        const symptom = symptomResponse.body
        if (symptom.Response.ok==true)
        {
             // todo: display the diagnosis
            console.log(symptom.Response)
        }
       console.log("Invalid input")
    }
    else
    {
        //todo:Change to display a user-friendly error
        alert('An error occured')
    }
   
}

getButton();
 