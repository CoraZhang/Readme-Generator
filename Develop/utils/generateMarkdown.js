// Function to generate the required readme section headings.
function generateMarkdown(data) {
    return `
# Project Title
[![npm](https://badge.fury.io/js/inquirer.svg)](http://badge.fury.io/js/inquirer)
${data.licenseBadge}

${data.title}

# Description
${data.description}

# Table of contents
* [Installation](https://github.com/CoraZhang/Readme-Generator/tree/master/Develop/sample#installation)
* [Usage](https://github.com/CoraZhang/Readme-Generator/tree/master/Develop/sample#usage)
* [License](https://github.com/CoraZhang/Readme-Generator/tree/master/Develop/sample#license)
* [Contributing](https://github.com/CoraZhang/Readme-Generator/tree/master/Develop/sample#contributing)
* [Tests](https://github.com/CoraZhang/Readme-Generator/tree/master/Develop/sample#tests)
* [Questions](https://github.com/CoraZhang/Readme-Generator/tree/master/Develop/sample#questions)

# Installation
To install necessary NPM module dependencies, run the following command:

${data.installation}



# Usage
${data.usage}

# License
License used for this project - ${data.license}

* For more information on license types, please reference this website for additional licensing information - [https://choosealicense.com/](https://choosealicense.com/).

# Contributing
${data.contributing}

# Tests
${data.tests}

# Questions
* Please reach me at: 
* GitHub Username: ${data.userName}
* GitHub Email: ${data.userEmail}
* Github Profile: "https://github.com/${data.userName}"
`
}
// Exporting the generateMarkdown function inorder to invoke in the index.js file.
module.exports = generateMarkdown;