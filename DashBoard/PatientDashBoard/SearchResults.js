function getIssuesFromQueryString() {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  return params.symptoms;
}

function getLanguage() {
  return "en-gb";
}

async function getDetails() {
  const email = encodeURIComponent(window.localStorage.getItem("email"));
  if (!email) {
    alert("Log in to search");
    window.location.href = `/SignUpAndSignIn/LogIn/SignUp/colorlib-regform-24/index.html`
    return;
  }

  console.log(email);
  return fetch(
    `https://localhost:7013/api/User/GetUserDetailsByEmail?email=${email}`
  ).then((res) => res.json());
}

async function onReady() {
  if (getLanguage() !== null && getIssuesFromQueryString() !== null) {
    const details = await getDetails();
    if (details == null) {
        // todo: Change to display a user-friendly error
      window.location.href = `DashBoard/PatientDashBoard/LandingPage1/Index.html`;
        return;
    }
    else {
      const detail = details;
      console.log(detail);
      var year = new Date().getFullYear();
      var age = year - detail.data.age;
      console.log(year);
      const params = {
        gender: detail.data.gender,
        year_of_birth: age,
        symptoms:getIssuesFromQueryString( ),
        language: getLanguage(),
        format: "json",
      };
      console.log("hello");
  
      const issueResponse = await queryResult(params);
  
      if (!issueResponse) {
        // todo: Change to display a user-friendly error
        alert("An error ");
        return;
      }
      else {
        const issue = issueResponse;

        console.log(issue, "line 48");
        return issue;
      }
    }
  } else {
    //todo:Change to display a user-friendly 
    const id = decodeURIComponent(window.localStorage.getItem("symptoms"))
    const ids = JSON.parse(id).split("=");
    ids.shift();
    var s=JSON.parse(ids);
    console.log(s)
    // const arrOfNum = ans.map(str => {
    //   return Number(str);
    // });
    // console.log(arrOfNum);
    
    const details = await getDetails();
    if (details == null) {
        // todo: Change to display a user-friendly error
      window.location.href = `DashBoard/PatientDashBoard/LandingPage1/Index.html`;
        return;
    }
    else {
      const detail = details;
      console.log(detail);
      var year = new Date().getFullYear();
      var age = year - detail.data.age;
      console.log(year);
  
      const params = {
        gender: detail.data.gender,
        year_of_birth: age,
        symptoms: s,
        language: getLanguage(),
        format: "json",
      };
      console.log("hello");
  
      const issueResponse = await queryResult(params);
  
      if (!issueResponse) {
        // todo: Change to display a user-friendly error
        alert("An error ");
        return;
      }
      else {
        const issue = issueResponse;

        console.log(issue, "line 48");
        return issue;
      }
    }
  }
}

async function displayIssues() {

  console.log("ffff");
  const issues = await onReady();
  if (issues== null) {
    alert("input required");
    return
  }

  const container = document.querySelector(".card-container");
  if (issues.length==0)
  {
    let card = `<div class="element" id="change-radius" >`;
    card += `<div>Visit a doctor symptoms can't be diagnosed</div>`;
    card += ` <div class="accuracy"></div>`;
    card += "</div>";
    container.innerHTML += card;
  }
  else
  {
    for (let i = 0; i < issues.length; i++) {
    
      console.log(issues[0].Issue.Name);
      let card = `<div class="element" id="change-radius" onclick="getId(${issues[i].Issue.ID})">`;
      card += `<div class="word">${issues[i].Issue.Name}</div>`
      card += ` <div class="accuracy">Accuracy:${issues[i].Issue.Accuracy}</div>`;
      card += "</div>";
      container.innerHTML += card;
    }
  }
}
displayIssues();

 async function getId(issueId)
 {
   window.localStorage.setItem("diagnoseId", issueId);
   window.localStorage.setItem("empty", " ");                    
  window.location.href = `DashBoard/PatientDashBoard/DisplayIssueInformation1.html?${issueId}`;
}

//async function getId(issueId) {
//   if (issueId == null) { 
//     alert("An error occured");
//     return;
//   }
//   else {
//   }
// }



 

  



 
 



  
    
  
  
    
  




