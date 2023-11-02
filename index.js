const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes");

class Svg {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }
  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
  }
  setTextElement(text, color) {
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }
  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }
}

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter 1-3 characters for the logo text:",
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter a color for the text by name or hexadecimal number:",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose the shape of the logo",
    choices: ["Circle", "Square", "Triangle"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter a color for the logo by name or hexadecimal number",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.error(err);
    }
    console.log("Generated logo.svg");
  });
}

async function init() {
  let svgString = "";
  const svgFile = "logo.svg";

  const answers = await inquirer.prompt(questions);

  let userText = "";
  if (answers.text.length > 0 && answers.text.length < 4) {
    userText = answers.text;
  } else {
    console.log("Must enter 1-3 characters");
    return;
  }
  userTextColor = answers["textColor"];
  userShape = answers["shape"];
  userShapeColor = answers["shapeColor"];

  let userShapeSelected;
  if (userShape === "Square") {
    userShapeSelected = new Square();
  } else if (userShape === "Circle") {
    userShapeSelected = new Circle();
  } else if (userShape === "Triangle") {
    userShapeSelected = new Triangle();
  }
  userShapeSelected.setColor(userShapeColor);

  const svg = new Svg();
  svg.setTextElement(userText, userTextColor);
  svg.setShapeElement(userShapeSelected);
  svgString = svg.render();
  writeToFile(svgFile, svgString);
}
init();
