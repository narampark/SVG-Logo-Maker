const { Circle, Square, Triangle } = require("./shapes");

describe("Circle", () => {
  test("sucess", () => {
    const shape = new Circle();
    const color = "red";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<circle cx="50%" cy="50%" r="100" fill="${shape.color}">`
    );
  });
});

describe("Square", () => {
  test("success", () => {
    const shape = new Square();
    const color = "blue";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<rect x="50" y="50" height="100" width="100" fill="${shape.color}">`
    );
  });
});

describe("Triangle", () => {
  test("success", () => {
    const shape = new Triangle();
    const color = "green";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      `<polygon points="0,200 300,200 150,0" fill="${shape.color}">`
    );
  });
});
