let clearBtnHandler = () => {
  if (document.getElementById("progressBarContainer")) {
    let progressBarContainer = document.getElementById("progressBarContainer");
    progressBarContainer.parentNode.removeChild(progressBarContainer);
  } else {
    console.log("Sorry");
    return;
  }
};

let calculatePercentage = (prgrsBarDtls) => {
  let totalNum = prgrsBarDtls.total.value;
  let completedNum = prgrsBarDtls.completed.value;

  let percentage = (completedNum * 100) /  totalNum + "%";
  if (document.getElementById("prgrsBar")) {
    let progressBarDescription = document.getElementById(
      "progressBarDescription"
    );
    progressBarDescription.innerText = "Completed " + percentage;
    progressBarDescription.style.color = "#1338be";
    progressBarDescription.style.textAlign = "center";
    progressBarDescription.classList.add("mr-t-10","mr-b-10");
    let prgrsBar = document.getElementById("prgrsBar");
    prgrsBar.style.width = "100%";
    prgrsBar.style.height = "10px";
    prgrsBar.style.border = "1px solid black";
    prgrsBar.style.borderRadius = "3px";
    prgrsBar.style.padding = "1.5px";
    let prgsBarInnrBgColor = document.getElementById("prgsBarInnrBgColor");
    prgsBarInnrBgColor.style.backgroundColor = "#1338be";
    prgsBarInnrBgColor.style.height = "100%";
    prgsBarInnrBgColor.style.width = percentage;
    prgsBarInnrBgColor.style.borderRadius = "3px";
  }
  console.log("Hi", percentage);
};

let createProgressBar = (prgrsBarDtls) => {
  let progressBarCont = document.createElement("div");
  progressBarCont.classList.add("progressBarCont", "pd-5", "mr-t-10");
  progressBarCont.setAttribute("id", "progressBarContainer");

  let progressBarHeader = document.createElement("div");
  progressBarHeader.classList.add("progressBarDescription");
  progressBarHeader.innerText = prgrsBarDtls.label.value;
  progressBarHeader.style.textAlign = "center";
  progressBarHeader.classList.add("mr-b-10");

  let progressBar = document.createElement("div");
  progressBar.setAttribute("id", "prgrsBar");
  progressBar.classList.add("progressBar");

  let progressBarDescription = document.createElement("div");
  progressBarDescription.setAttribute("id", "progressBarDescription");
  progressBarDescription.innerText = "Calculating";

  let progressBarInnrBgColor = document.createElement("div");
  progressBarInnrBgColor.classList.add("progressBarInnrBgColor");
  progressBarInnrBgColor.setAttribute("id", "prgsBarInnrBgColor");
  progressBar.appendChild(progressBarInnrBgColor);

  progressBarCont.appendChild(progressBarHeader);
  progressBarCont.appendChild(progressBarDescription);
  progressBarCont.appendChild(progressBar);

  let parentContainer = document.getElementById("parentContainer");
  parentContainer.appendChild(progressBarCont);

  calculatePercentage(prgrsBarDtls);
};

if (document.getElementById("prgrsBarDtlsForm")) {
  let prgrsBarDtlsForm = document.getElementById("prgrsBarDtlsForm");
  // Attach a submit event listener to the login form
  prgrsBarDtlsForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    let prgrsBarDtls = document.forms.prgrsBarDtlsForm;

    if (!document.getElementById("progressBarContainer")) {
      createProgressBar(prgrsBarDtls);
    }
  });
}
