const { expect } = require("chai");
const { RobotPaths } = require("../src/robotPaths");

describe("robotPaths", function() {
  this.timeout(5000);
  it("should exist", () => {
    expect(RobotPaths).not.to.be.undefined;
  });

  it("should be a function", () => {
    expect(RobotPaths).to.be.a("function");
  });

  it("should return a number", () => {
    const path = new RobotPaths(3);
    expect(path).not.to.be.undefined;
    expect(path.solve).to.be.a("function");
    const result = path.solve();
    expect(result).to.be.a("number");
  });

  it("should return a number greater than zero for non-empty grids", () => {
    const result = new RobotPaths(3).solve();
    expect(result).to.be.greaterThan(0);
  });

  it("should correctly identify the number of unique paths for a 1x1 grid", () => {
    const result = new RobotPaths(1).solve();
    expect(result).to.equal(1);
  });

  it("should correctly identify the number of unique paths for a 2x2 grid", () => {
    const result = new RobotPaths(2).solve();
    expect(result).to.equal(2);
  });

  it("should correctly identify the number of unique paths for a 3x3 grid", () => {
    const result = new RobotPaths(3).solve();
    expect(result).to.equal(12);
  });

  it("should correctly identify the number of unique paths for a 4x4 grid", () => {
    const result = new RobotPaths(4).solve();
    expect(result).to.equal(184);
  });

  it("should correctly identify the number of unique paths for a 5x5 grid", (done) => {
    const result = new RobotPaths(5).solve();
    expect(result).to.equal(8512);
    done();
  });

  it("should correctly identify the number of unique paths for 6x6 grid", (done) => {
    const newRobotPaths = new RobotPaths(6);
    const resolvingPromise = new Promise((resolve) => {
      resolve(newRobotPaths.solve());
    });
    resolvingPromise.then((result) => {
      expect(result).to.equal(1262816);
      done();
    });
  });
});
