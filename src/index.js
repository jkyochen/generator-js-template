"use strict";

const Generator = require("yeoman-generator");

module.exports = class extends Generator {
	initializing() {
		this.spawnCommandSync("git", ["init", "--quiet"]);
	}

	writing() {
		this.fs.copy(this.templatePath("."), this.destinationPath("."));
	}
};
