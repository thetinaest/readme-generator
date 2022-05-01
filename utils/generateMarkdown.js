// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    return '';
  } else {
    return `[![License](https://img.dhields.io/badge/License-${license.badge}-blue.svg)](${license.link})`;
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
    return `## License : 
    [${license.name}](${license.link})`;
  }
}

// TODO: Create a function to generate markdown for README
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

  ## GitHub
  [Github](https://guthub.com/${response.username})

  ## Email
  [${response.email}](mailto:${response.email})
`;
}

module.exports = generateMarkdown;
