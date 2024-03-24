# JavaScript Projects

## Project Link

[Click Here](https://github.com/Shashijha1617/Shashi-JS/tree/main/07_Projects/02_BMICalculator)

## Project 2 (BMI Calculator)

```html
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BMI Calculator</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>BMI CALCULATOR</h1>
    <form>
      <div>
        <lable class="label">Height in Cm</lable>
        <input
          class="text-field"
          type="text"
          name=""
          id="height"
          placeholder="Height"
        />
      </div>
      <div>
        <lable class="label">Weight in Kg</lable>
        <input
          class="text-field"
          type="text"
          name=""
          id="weight"
          placeholder="Weight"
        />
      </div>
      <input class="submitBtn" type="submit" value="Calculate" />
    </form>

    <p class="text-field text-result" id="result"></p>

    <h2>BMI Weight Guide</h2>
    <p><b>Underweight : less than 18.6</b></p>
    <p><b>Normal Range : 18.6 - 24.9</b></p>
    <p><b>OverWeight :more than 24.9</b></p>
  </body>
  <script src="script.js"></script>
</html>

```

```css
 body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  box-shadow: 0px 0px 5px 1px rgb(218, 217, 217) inset;
  padding: 1rem;
  border-radius: 10px;
}
form div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.text-field {
  text-align: center;
  border: none;
  box-shadow: 0 0 2px 1px rgb(233, 233, 233);
  border-radius: 10px;
  height: 2rem;
  width: 100px;
}
.label {
  font-weight: bold;
}
.text-result {
  margin: 2rem;
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 0.1rem 0.5rem;
}
.submitBtn {
  width: 100%;
  border: none;
  height: 2rem;
  border-radius: 50px;
  font-weight: bold;
  box-shadow: 0 0 3px 5px rgb(232, 232, 232) inset;
}

```
```javascript
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

```