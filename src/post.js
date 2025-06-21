const { v4 } = require("uuid");
const AWS = require("aws-sdk");

module.exports.handler = async (event) => {
  const db = new AWS.DynamoDB.DocumentClient();
  const { task } = JSON.parse(event.body);
  const createdAt = new Date().toISOString();
  const id = v4();
  const newTask = {
    id,
    task,
    createdAt,
    completed: false,
  };
  await db.put({
    TableName: "TODO",
    Item: newTask,
  }).promise();
  return {
    statusCode: 200,
    body: JSON.stringify(newTask),
  };
};
