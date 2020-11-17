/*------------------------------------------------------------------*
Create an empty project with a remote repository
https://github.com/HassanKanj/create-empty-project-with-remote-repo
*------------------------------------------------------------------*/

// the dotenv path is set explicity since the app may run
// from a different directory than the current code directory

require("dotenv").config({ path: __dirname + "/.env" });
const chalk = require("chalk");
const { exec } = require("child_process");
const { Octokit } = require("@octokit/rest");
const packageJson = require("./package.json");

const octokit = new Octokit({
  auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
});

function showAppInfo() {
  console.log(
    chalk.bold(
      `# Create Project With Remote Repo version ${packageJson.version} (By Hassan Kanj)\n`
    )
  );
}

function executeCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
}

function createPrivateRepository(name, description) {
  return octokit.repos.createForAuthenticatedUser({
    name: name,
    private: true,
    description: description,
  });
}

function print(message) {
  console.log(chalk.green(">>> ") + message);
  console.log();
}

function printSuccess(message) {
  // 0xD83C 0xDF89 is the celebration emoji
  print(message + " \uD83C\uDF89");
}

function printFailure(message) {
  // U+274C is the X mark
  print(message + " \u274C");
}

module.exports = {
  createPrivateRepository,
  print,
  printSuccess,
  printFailure,
  showAppInfo,
  executeCommand,
};
