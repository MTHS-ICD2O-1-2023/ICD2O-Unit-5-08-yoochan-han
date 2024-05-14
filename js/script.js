// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yoochan
// Created on: May 2024
// This file contains the JS functions for index.html
function calculate(){
  let Number1 = document.getElementById("get_number1").value
const Number2 = document.getElementById("get_number2").value
let count = 0
while(true) {
  if (Number1 - Number2 < 0) {
    break
  }else{
    Number1 -= Number2
    count++
  }
}
  document.getElementById("Answer").innerHTML = "The answer is " + count + ' and ' + Number1 + "R"
}