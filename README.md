# Node.js and ES6+ Project: Good README Generator

When creating an open source project on GitHub, it is important to have a quality README with information about the app--what is the app for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project. A command-line application will allow for quick and easy generation of a project README to get started quickly. This will allow a project creator to spend more time working on finishing the project and less time creating a good README.

The task is to create a command-line application that dynamically generates a professional README.md from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). Review the [Good README guide](../../01-HTML-Git-CSS/04-Important/Good-README-Guide/README.md) as a reminder of everything that a quality, professional README contains. The application will be invoked with the following command:

```
node index.js
```

## What is done
* Created command-line application that accepts user input
* The project title user entered will be displayed as title of generated readme.md
* Description, table of contents, installation, usage, license choice, contribution, tests and questions will be displayed after the user answering all questions
* The information will be added to the sections entitled Description, Installation, Usage, Contributing, and Tests
* The badge of choosen license will be added to the top of the readme file and a notice is added to the entitled License, explaining which license the application is covered
* The Github user name, email address will be added to section entitled Questions, with link to the github profile and instructions to reach me
* When clicking on the links in the table of contents, user will be taken to the corresponding section of readme

## User Story

```
AS A developer
I WANT a README generator
SO THAT can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Minimum Application Requirements

* Meets [Submission Requirements](#submission-requirements) in the following section.

* Functional application.

* GitHub repository with a unique name and a README describing project.

* The generated README includes the following sections: 

  * Title
  * Description
  * Table of Contents
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions

* The generated README includes 1 badge that's specific to the repository.


## Submission Requirements

* Create a `.gitignore` file and include `node_modules/` and `.DS_Store/`.

* `node_modules` is not tracked and uploaded to GitHub. (Hint: It is easy if you create your `.gitignore` file before installing dependencies with npm.)

* Repo **MUST** include `package.json` with required dependencies. (Hint: Run `npm init` when you first setup the project before installing any dependencies.)

* Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.

* Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers/other developers in the future what you built and why, and to show how it works.

* Because screenshots (and well-written READMEs) are extremely important in the context of GitHub, this will be part of the grading.

## Commit Early and Often

Follow these guidelines for committing:

* Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.

* Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.

* Don't commit half-done work, for the sake of your collaborators (and your future self!).

* Test your application before you commit to ensure functionality at every step in the development process.

## Submission

You are required to submit the following:

* A walkthrough video demonstrating the functionality of the application. 

* A sample README.md file for a project repository generated using your application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

