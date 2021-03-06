import AWS from 'aws-sdk';

/**
 * Method to scan a table in dynamo and export the results
 *
 * @param {object} credentials credentials to access the dynamo table
 * @param {string} table the table to access
 * @param {string} region the region that the table lives in
 * @returns {Promise<any>} Returns a promise containing the data, or an error
 */
async function scanTable(credentials, table, region) {
  AWS.config.update(credentials);
  AWS.config.update({ region });

  const docClient = new AWS.DynamoDB.DocumentClient();

  const params = {
    TableName: table,
  };

  return new Promise((resolve, reject) => {
    docClient.scan(params, (error, data) => {
      if (error) reject(error);
      else resolve(data.Items);
    });
  });
}

export default scanTable;
