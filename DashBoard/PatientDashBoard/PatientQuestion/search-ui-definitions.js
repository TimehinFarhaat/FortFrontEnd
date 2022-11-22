const choices = new Choices(".choices-select", {
  silent: true,
  choices: window.Issues.map((Issues) => ({
    value: Issues.ID,
    label: Issues.Name,
  })),
  removeItemButton: true,
});
var swing;

function onSearchClicked() {
  function getIssues() {
    if (choices) {
      swing = choices.getValue().map((c) => c.label);
      return choices.getValue().map((c) => c.value);
    }
    alert("Invalid input");
    return;
  }

  const params = encodeQueryString({
    symptoms: getIssues(),
  });
  if (params == null) {
    alert("Invalid input")
    window.location.href = `/Landing/Index.html`;
    return;
  }

  const r = params
  var rObj = JSON.stringify(r);
  window.localStorage.setItem("symtom", swing);
  window.localStorage.setItem("symptoms",rObj );
  const email = window.localStorage.getItem("email");
  if (!email) {
    window.location.href = `/SignUpAndSignIn/LogIn/SignUp/colorlib-regform-24/index.html`
    return;
  }
  window.location.href = `/DashBoard/PatientDashBoard/DisplaySearchResult.html?${params}`;
}


