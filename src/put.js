const AWS = require("aws-sdk");

module.exports.handler = async (event) => {
  const db = new AWS.DynamoDB.DocumentClient();
  const { completed } = JSON.parse(event.body);
  const { id } = event.pathParameters;
  await db
    .update({
      TableName: "TODO",
      Key: { id },
      UpdateExpression: "set completed = :completed",
      ExpressionAttributeValues: { ":completed": completed },
      ReturnValues: "ALL_NEW",
    })
    .promise();
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Task completed." }),
  };
};
