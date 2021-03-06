#!/usr/bin/env node

import * as utils from 'noodle-utils';

import prompt from './modules/questions';
import scanTable from './modules/storage';
import formatOutput from './modules/output';

/**
 * Main
 */
async function main() {
  const answers = await prompt();

  utils.startStatusIndicator('Scanning Table');

  const data = await scanTable(answers.credentials, answers.table, answers.region);

  utils.stopStatusIndicator();

  console.log(formatOutput(data, answers.format));
}

main();
