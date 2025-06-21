import v4 from "uuid";
import AWS from "aws-sdk";

module.exports.add = async (event) => {
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
  });
  return {
    statusCode: 200,
    body: JSON.stringify(newTask),
  };
};
