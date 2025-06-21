const AWS = require("aws-sdk");

module.exports.handler = async (event) => {
  const db = new AWS.DynamoDB.DocumentClient();
  let task;
  try {
    const result = await db
      .scan({
        TableName: "TODO",
      })
      .promise();
    task = result.Items;
  } catch (err) {
    console.error(err);
  }
  return {
    statusCode: 200,
    body: JSON.stringify(task),
  };
};
