/* eslint-disable semi */
/*eslint-disable*/
"use strict";

const emailInput = document.getElementById("input-email");
const submitBtn = document.getElementById("submit-btn");
const form = document.getElementById("form");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailInput.value.match(regEx)) {
    form.classList.remove("error");
  } else {
    form.classList.add("error");
  }
});
