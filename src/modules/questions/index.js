import inquirer from 'inquirer';

const QUESTIONS = [
  {
    name: 'table',
    type: 'input',
    message: 'Which table would you like to dump?',
    validate: validateRequiredField,
  },
  {
    name: 'credential_access_key',
    type: 'input',
    message: 'What is your access key ID?',
    validate: validateRequiredField,
  },
  {
    name: 'credential_secret_access_key',
    type: 'input',
    message: 'What is your secret access key?',
    validate: validateRequiredField,
  },
];

/**
 * validates that the input has a value
 *
 * @param {string} input The data being validated
 * @returns {string | boolean} Either the message to send in the input's absense, or true
 */
function validateRequiredField(input) {
  if (input.length === 0) {
    return 'Must provide a value here!';
  }

  return true;
}

/**
 * Fetches the answers to the questions above
 *
 * @returns {Promise<Array<string>>} The data needed to dump a dynamo table
 */
async function prompt() {
  return inquirer.prompt(QUESTIONS);
}

export default prompt;
