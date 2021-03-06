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
  {
    name: 'region',
    type: 'input',
    message: 'Which region does your Dynamo table belong to?',
    validate: validateRequiredField,
  },
  {
    name: 'format',
    type: 'list',
    message: 'What format would you like to see the data in?',
    validate: validateRequiredField,
    choices: ['json', 'csv'],
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
 * Method to format the raw data from the customer to an object that makes more sense to our API
 *
 * @param {object} answers Object representing the answers to the above questions
 * @returns {object} Formatted answers to fit the calls we'll make later
 */
function formatAnswers(answers) {
  const formattedAnswers = answers;
  formattedAnswers.credentials = {
    accessKeyId: answers.credential_access_key,
    secretAccessKey: answers.credential_secret_access_key,
  };

  delete formattedAnswers.credential_access_key;
  delete formattedAnswers.credential_secret_access_key;

  return formattedAnswers;
}

/**
 * Fetches the answers to the questions above
 *
 * @returns {Promise<Array<string>>} The data needed to dump a dynamo table
 */
async function prompt() {
  return inquirer.prompt(QUESTIONS).then((answers) => formatAnswers(answers));
}

export default prompt;
