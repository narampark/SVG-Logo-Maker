const { Circle, Square, Triangle } = require("./shapes");

describe("Circle", () => {
  test("success", () => {
    const shape = new Circle();
    let color = "red";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<circle cx="150" cy="100" r="80" fill="${color}"/>`
    );
  });
});

describe("Square", () => {
  test("success", () => {
    const shape = new Square();
    let color = "blue";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<rect x="50" y="25" height="200" width="200" fill="${color}"/>`
    );
  });
});

describe("Triangle", () => {
  test("success", () => {
    const shape = new Triangle();
    let color = "green";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<polygon points="0,200 300,200 150,0" fill="${shape.color}"/>`
    );
  });
});
