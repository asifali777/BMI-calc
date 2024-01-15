function forButton1() {
  var x = document.getElementById("nameInput").value;
  if (x == "") {
    alert("Please enter your good name");
  } else {
    setTimeout(function() {
      var name = document.getElementById("nameInput").value;
      console.log(name);
      document.querySelector("div").classList.toggle("hidden");
      document.querySelectorAll("div")[1].classList.toggle("hidden");
      var element = document.getElementById("greet");
      element.classList.toggle("hidden");
      var element = document.getElementById("displayName");
      element.classList.toggle("hidden");
      var element = document.getElementById("second");
      element.classList.toggle("hidden");
      document.getElementById("displayName").innerHTML ="Hi, " + name ;    
    }, 500);
  }
};
function maleSelection(){
  document.getElementById("male-button").style.backgroundColor="rgb(107, 238, 238)";
  document.getElementById("female-button").style.backgroundColor="gray";
  document.getElementById("femaleImage").style.filter="grayscale()";
  document.getElementById("maleImage").style.filter="grayscale(0)";
};   
function femaleSelection(){
   document.getElementById("male-button").style.backgroundColor="gray";
   document.getElementById("femaleImage").style.filter="grayscale(0)";
   document.getElementById("maleImage").style.filter="grayscale()";
   document.getElementById("female-button").style.backgroundColor="rgb(107, 238, 238)";
}
function forButton3() {
var ageNUm = document.getElementById("ageInput").value;
var weightNum = document.getElementById("weightInput").value;
var heightNum = document.getElementById("heightInput").value;
const givenHeight = heightNum/3.2808;
const height = givenHeight*givenHeight;
var claculatedBMI = weightNum/height;
///////////////////////////////
if (ageNUm == "" || weightNum == "" || heightNum == "") {
  alert("Please enter appropriat details")
} else{ 
  setTimeout(()=>{ 
 var element = document.getElementById("second");
 element.classList.toggle("hidden");
// show third section 
var element = document.getElementById("result-section");
element.classList.toggle("hidden");
document.getElementById("displayName").innerHTML = "Here is your BMI Result..."
//////////////////////////////////////
var roundNum = parseFloat(claculatedBMI).toFixed(1);
document.getElementById("range-value").innerHTML = roundNum;
/////////////////////////////////////
document.getElementById("age-number").innerHTML = ageNUm;
document.getElementById("weight-number").innerHTML = weightNum;
document.getElementById("height-number").innerHTML = heightNum;
////////////////////////////////////
if (roundNum < 18.5) {
  document.getElementById("status1").classList.toggle("hidden");
  document.getElementById("tips1").classList.toggle("hidden");
}
 else if (roundNum >= 18.5 && roundNum <= 24.9 ){
  document.getElementById("status").classList.toggle("hidden");
  document.getElementById("tips2").classList.toggle("hidden");
} 
else if (roundNum >= 25) {
  document.getElementById("status2").classList.toggle("hidden");
  document.getElementById("tips3").classList.toggle("hidden");
}
},500);
}};
