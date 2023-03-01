const sum = require("../src/");

describe("Test", () => {
	it("sum", () => {
		expect(sum(1, 2)).toBe(3);
	});
});
