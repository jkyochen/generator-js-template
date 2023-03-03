"use strict";

const Generator = require("yeoman-generator");

module.exports = class extends Generator {
	constructor(args, opts) {
		super(args, opts);
		this.option("isNeedTypeScript", {
			type: Boolean,
			description: "Project type, default is javscript",
		});
	}

	initializing() {
		this.spawnCommandSync("git", ["init", "--quiet"]);
	}

	async prompting() {
		this.answers = await this.prompt({
			type: "confirm",
			name: "isNeedTypeScript",
			message: "Need TypeScirpt proejct?",
			default: false,
		});
	}

	writing() {
		if (this.answers.isNeedTypeScript) {
			this.fs.copy(this.templatePath("ts"), this.destinationPath("."));
		} else {
			this.fs.copy(this.templatePath("js"), this.destinationPath("."));
		}
		this.fs.copy(this.templatePath(".husky"), this.destinationPath(".husky"));
		this.fs.copy(
			this.templatePath(".gitignore.copy"),
			this.destinationPath(".gitignore"),
		);
	}

	install() {
		this.env.options.nodePackageManager = "npm";
	}
};
