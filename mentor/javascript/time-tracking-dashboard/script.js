/* eslint-disable semi */
/*eslint-disable*/
"use strict";
const dailyBtn = document.getElementById("daily-btn");
const weeklyBtn = document.getElementById("weekly-btn");
const monthlyBtn = document.getElementById("monthly-btn");

const dailyArr = document.querySelectorAll(".daily");
const weeklyArr = document.querySelectorAll(".weekly");
const monthlyArr = document.querySelectorAll(".monthly");

dailyBtn.addEventListener("click", () => {
  dailyArr.forEach((arr) => {
    arr.classList.add("active");
  });
  weeklyArr.forEach((arr) => {
    arr.classList.remove("active");
  });
  monthlyArr.forEach((arr) => {
    arr.classList.remove("active");
  });
  dailyBtn.style.color = "hsl(236, 100%, 87%)";
  weeklyBtn.style.color = "hsl(235, 45%, 61%)";
  monthlyBtn.style.color = "";
});

weeklyBtn.addEventListener("click", () => {
  weeklyArr.forEach((arr) => {
    arr.classList.add("active");
  });
  dailyArr.forEach((arr) => {
    arr.classList.remove("active");
  });
  monthlyArr.forEach((arr) => {
    arr.classList.remove("active");
  });
  weeklyBtn.style.color = "hsl(236, 100%, 87%)";
  dailyBtn.style.color = "";
  monthlyBtn.style.color = "";
});

monthlyBtn.addEventListener("click", () => {
  monthlyArr.forEach((arr) => {
    arr.classList.add("active");
  });
  weeklyArr.forEach((arr) => {
    arr.classList.remove("active");
  });
  dailyArr.forEach((arr) => {
    arr.classList.remove("active");
  });
  monthlyBtn.style.color = "hsl(236, 100%, 87%)";
  dailyBtn.style.color = "";
  weeklyBtn.style.color = "hsl(235, 45%, 61%)";
});
