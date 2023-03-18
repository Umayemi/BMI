
function calculate() {
  var height = document.getElementById('height').value;
  var weight = document.getElementById('weight').value;
  var input =  document.getElementById('input').value;
  var result = document.getElementById('result').value;
  var correct = document.getElementById('correct'); 
var bmi = weight/(height/100*height/100);
  var bmio = (bmi.toFixed(2));
 if (bmio<18.6) {
   document.getElementById('result').innerHTML = bmio;
   document.getElementById('comment').innerHTML = 'You are Underweight';
 }
 else if (18.5<=bmio<=24.9) {
  document.getElementById('result').innerHTML = bmio;
  document.getElementById('comment').innerHTML = 'You are Healthy';
}
else if (25<=bmio<=29.9) {
  document.getElementById('result').innerHTML = bmio;
  document.getElementById('comment').innerHTML = 'You are Overweight';
}
else if (30<=bmio<=34.9) {
  document.getElementById('result').innerHTML = bmio;
  document.getElementById('comment').innerHTML = 'You are Obese';
}
else if (35<=bmio) {
  document.getElementById('result').innerHTML = bmio;
  document.getElementById('comment').innerHTML = 'You are Extremely obese';
}
var male=document.getElementById("male");
var female=document.getElementById("female");
if(male.checked==false && female.checked==false){
   document.getElementById('gender_error').innerHTML = 'please select gender'
   document.getElementById('result').innerHTML = '00.00';
   document.getElementById('comment').innerHTML = '';
}
else{
  document.getElementById('gender_error').innerHTML = '' 
}
if (weight == '' || (weight <=0) || height == '' || (height <=0)) {
document.getElementById('weight_error').innerText = 'please fill these fields correctly.';
document.getElementById('result').innerHTML = '00.00';
document.getElementById('comment').innerHTML = '';
}
else{
  document.getElementById('weight_error').innerText = '';
}
if (input == '' || isNaN(input) || (input<=0)) {
  document.getElementById('age_error').innerText = 'please provide your age.';
  document.getElementById('result').innerHTML = '00.00';
  document.getElementById('comment').innerHTML = '';
  }
  else{
    document.getElementById('age_error').innerText = '';
  }
console.log('result')
}
