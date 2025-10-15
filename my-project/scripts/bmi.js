 document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);
    const resultSpan = document.getElementById('result');
    const statusSpan = document.getElementById('status');

    if (height > 0 && weight > 0) {
      const bmi = (weight / (height * height)).toFixed(2);
      resultSpan.textContent = bmi;

      let status = '';
      if (bmi < 18.5) {
        status = 'Underweight';
      } else if (bmi < 25) {
        status = 'Normal weight';
      } else if (bmi < 30) {
        status = 'Overweight';
      } else {
        status = 'Obese';
      }

      statusSpan.textContent = status;
    } else {
      resultSpan.textContent = "Invalid input";
      statusSpan.textContent = "";
    }
});