import { Parser } from 'json2csv';

/**
 * Returns data ready to be sent to the output
 *
 * @param {Array<JSON>} data A collection of data
 * @param {string} format The format to return the data in
 * @returns {any} The data, formatted as desired
 */
function formatOutput(data, format) {
  if (format === 'csv') {
    const fields = Object.keys(data[0]);
    const json2csvParser = new Parser({ fields });

    const csv = json2csvParser.parse(data);
    return csv;
  }

  return data;
}

export default formatOutput;
