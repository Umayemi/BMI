
function calculate() {
  var height = document.getElementById('height').value;
  var weight = document.getElementById('weight').value;
  var result = document.getElementById('result').value;
  var correct = document.getElementById('correct'); 
var bmi = weight/(height/100*height/100);
  var bmio = (bmi.toFixed(2));
  console.log(bmio)
 if (bmio<18.6) {
   document.getElementById('result').innerHTML = bmio;
   document.getElementById('comment').innerHTML = 'You are Underweight';
 }
 else if (bmio<=18.5 || bmio<=24.9) {
  document.getElementById('result').innerHTML = bmio;
  document.getElementById('comment').innerHTML = 'You are Healthy';
}
else if (bmio<=25 || bmio<=29.9) {
  document.getElementById('result').innerHTML = bmio;
  document.getElementById('comment').innerHTML = 'You are Overweight';
}
else if (bmio<=30 || bmio<=34.5) {
  document.getElementById('result').innerHTML = bmio;
  document.getElementById('comment').innerHTML = 'You are Obese';
}
else if (bmio>35) {
  document.getElementById('result').innerHTML = bmio;
  document.getElementById('comment').innerHTML = 'You are Extremely obese';
}

if (weight == '' || (weight <=0)) {
  alert("provide your weight.");
document.getElementById('result').innerHTML = '00.00';
document.getElementById('comment').innerHTML = '';
}
else{
  document.getElementById('weight_error').innerText = '';
}
if (height == '' || (height <=0)) {
  alert("provide your height.");
  document.getElementById('result').innerHTML = '00.00';
  document.getElementById('comment').innerHTML = '';
  }
  else{
    document.getElementById('weight_error').innerText = '';
  }

}
function selcect() {
var swap = document.getElementById('img');
 swap.style.display = 'block';
 swap.src="images/Untitled-2.png";
}
function select() {
  var swap = document.getElementById('img');
   swap.style.display = 'block';
   swap.src="images/Untitled-1.png";
  }
  
