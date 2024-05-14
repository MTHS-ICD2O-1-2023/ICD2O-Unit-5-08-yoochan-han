// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yoochan
// Created on: May 2024
// This file contains the JS functions for index.html
function calculate(){
let left = document.getElementById("get_number1").value
const Number1 = document.getElementById("get_number2").value
let count = 0
let answer
while(true) {
  if(left-Number1 <= 0) {
    break
  }else{
    left -= Number1
    count++
  }
}
document.getElementById("Answer").innerHTML = "The answer is " + left + ' and ' + count + "R"
}