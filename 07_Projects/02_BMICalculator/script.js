const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const resultData = document.querySelector("#result");

  if (height == "" || height < 0 || isNaN(height)) {
    resultData.innerHTML = "Invalid Height Input Data";
  } else if (weight == "" || weight < 0 || isNaN(weight)) {
    resultData.innerHTML = "Invalid weight Input Data";
  } else {
    const bmiResult = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmiResult > 18.6) {
      resultData.innerHTML = `You Are Under Weight : ${bmiResult}`;
    }
    if (bmiResult <= 18.6) {
      resultData.innerHTML = `You Have Ideal BIM : ${bmiResult}`;
    }
    if (bmiResult > 18.6) {
      resultData.innerHTML = `You Are Over Weighted : ${bmiResult}`;
    }
  }
});
