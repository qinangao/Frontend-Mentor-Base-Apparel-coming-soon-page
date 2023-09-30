let emailId = document.getElementById("email_id");
let errorMsg = document.getElementById("error-msg");
let errorIcon = document.getElementById("error_icon");
let formBorder = document.getElementById("form");

let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
function checker() {
  console.log(emailId);
  if (emailId.value.match(mailRegex)) {
    errorMsg.style.display = "none";
    errorIcon.style.display = "none";
    formBorder.style.border = "1px solid var(--Desaturated-Red)";
  } else {
    errorMsg.style.display = "block";
    errorIcon.style.display = "block";
    formBorder.style.border = "1.3px solid var( --Soft-Red)";
  }
}
