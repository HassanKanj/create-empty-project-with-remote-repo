/*------------------------------------------------------------------*
Create an empty project with a remote repository
https://github.com/HassanKanj/create-empty-project-with-remote-repo
*------------------------------------------------------------------*/

// the dotenv path is set explicity since the app may run
// from a different directory than the current code directory

require("dotenv").config({ path: __dirname + "/.env" });
const utils = require("./utils");
const chalk = require("chalk");
const fs = require("fs");
const commandLineArgs = require("command-line-args");

const optionDefinitions = [
  { name: "name", type: String },
  { name: "description", type: String },
];

const args = commandLineArgs(optionDefinitions);

if (!process.env.GITHUB_PERSONAL_ACCESS_TOKEN) {
  utils.printFailure(
    "Error: GITHUB_PERSONAL_ACCESS_TOKEN is not set in the .env file."
  );
  process.exit();
}

if (typeof args["name"] === "undefined") {
  utils.printFailure("Error: --name is not set! exiting...");
  process.exit();
}

if (typeof args["description"] === "undefined") {
  utils.printFailure("Error: --description is not set! exiting...");
  process.exit();
}

async function main() {
  try {
    let repositoryName = args["name"].replace(/ /g, "-");
    let directoryName = args["name"];
    let directoryFullPath = `${process.cwd()}/${directoryName}`;
    console.log();
    utils.showAppInfo();
    utils.print(
      `Creating the GitHub private repository: ${chalk.underline(
        repositoryName
      )}`
    );
    let remoteRepositoryLink = (
      await utils.createPrivateRepository(repositoryName, args["description"])
    ).data.clone_url;
    utils.printSuccess(`Repository created successfully`);
    utils.print(
      `Creating the local directory: ${chalk.underline(directoryFullPath)}`
    );
    fs.mkdirSync(directoryName);
    utils.printSuccess(`Directory created successfully`);
    utils.print(
      `Initializing a local repository in ${chalk.underline(
        directoryFullPath
      )} and linking it to ${chalk.underline(remoteRepositoryLink)}`
    );
    await utils.executeCommand(
      `cd '${directoryName}' && git init && git remote add origin ${remoteRepositoryLink} && git checkout -b main`
    );
    utils.printSuccess(
      `Local git repository was initialized successfully and linked to your remote GitHub repository.`
    );
    console.log(
      `To go to your local project folder, type: cd "${directoryName}"`
    );
    console.log();
  } catch (error) {
    utils.printFailure("An error occured, check below for more details");
    console.log(error);
  }
}

main();
