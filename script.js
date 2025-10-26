const weight = document.getElementById('weight');
const height = document.getElementById('height');
const calculate = document.getElementById('calculateBtn');
const result = document.getElementById('result');

calculateBtn.addEventListener('click', function() {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) 

  if(!weight || !height) {
    result.textContent = "Please enter valid weight and height!";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);

  let message = '';
  if(bmi < 18.5) {
    message = 'Underweight';
  } else if(bmi < 25) {
    message = 'Normal weight';
  } else if(bmi < 30) {
    message = 'Overweight';
  } else {
    message = 'Obese';
  }

  result.textContent = `Your BMI is ${bmi} (${message})`;
});
