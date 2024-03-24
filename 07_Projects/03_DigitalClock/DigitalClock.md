# JavaScript Projects

## Project Link

[Click Here](https://github.com/Shashijha1617/Shashi-JS/tree/main/07_Projects/03_DigitalClock)

## Project 3 (Digital Clock)

```html
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Digital Clock</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h2>Your Local Time !</h2>
    <div id="clock"></div>
  </body>
  <script src="script.js"></script>
</html>
```

```css
 body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: rgb(255, 255, 255);
}
h2 {
  word-spacing: 0.5rem;
}

#clock {
  width: fit-content;
  min-width: 100px;
  background-color: orange;
  color: white;
  font-weight: bold;
  height: 3rem;
  padding: 0.2rem 1rem;
  border-radius: 50px;
  box-shadow: 0 0 20px 2px rgba(255, 166, 0, 0.529);
  border: 3px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  text-transform: uppercase;
}
```
```javascript
const clock = document.getElementById("clock");

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```