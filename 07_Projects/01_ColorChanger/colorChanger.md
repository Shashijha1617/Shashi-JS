# JavaScript Projects

## Project Link

[Click Here](https://github.com/Shashijha1617/Shashi-JS)

## Project 1 (Background Color Changer)

```html
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ColorChanger</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body
    style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
    "
  >
    <div style="display: flex; gap: 1rem">
      <button class="button" id="yellow"></button>
      <button class="button" id="red"></button>
      <button class="button" id="blue"></button>
      <button class="button" id="gray"></button>
      <button class="button" id="purple"></button>
      <button class="button" id="silver"></button>
      <button class="button" id="goldenrod"></button>
    </div>
    <h1>Select Any Color Box to Change The Background</h1>
  </body>
  <script src="script.js"></script>
</html>
```

```css
 .button {
  height: 60px;
  width: 60px;
  outline: none;
  border: none;
  cursor: pointer;
  border: 3px solid white;
}
#red {
  background-color: red;
}
#yellow {
  background-color: yellow;
}
#blue {
  background-color: blue;
}
#green {
  background-color: green;
}
#gray {
  background-color: gray;
}
#silver {
  background-color: silver;
}
#purple {
  background-color: purple;
}
#goldenrod {
  background-color: goldenrod;
}
```
```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", (e) => {
    if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "gray") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "silver") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "goldenrod") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```