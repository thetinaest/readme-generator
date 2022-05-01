// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //generates the correct color of license
  function licenseColor(license) {
  if (license.name === 'MIT License') {
      return 'yellow.svg';
    } else if (license.name === 'Mozilla Public License 2.0') {
      return 'brightgreen.svg';
    } else if (license.name === 'Boost Software License 1.0') {
      return 'lightblue.svg';
    } else {
      return 'blue.svg';
    }
  }

  if (license === 'none') {
    return '';
  } else {
    return `[![License](https://img.shields.io/badge/License-${license.badge}-${licenseColor(license)})](https://opensource.org/licenses/${license.badge})`;
  }
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    return '';
  } else {
    return `- [License](#license)`;
  }
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return '';
  } else {
    return `## License
    [${license.name}](${license.link})`;
  }
}

//generates markdown using user answers
function generateMarkdown(response) {
  return `# ${response.projectTitle}
  ${renderLicenseBadge(response.license)}
  ## Description :
  ${response.description}

  ## Table of Contents:

  - [installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
   ${renderLicenseLink(response.license)}

  ## Installation
  ${response.intallation}

  ## Usage
  ${response.usage}

  ## Contributing
  ${response.contributions}

  ## Tests
  ${response.testing}

  ## Questions 
  If you have any questions, please contact me using the following links: 
  - Please visit my [Github](https://guthub.com/${response.username})
  - Please email me at [${response.email}](mailto:${response.email})

  ${renderLicenseSection(response.license)}
`;
}

module.exports = generateMarkdown;
