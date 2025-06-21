module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Application is UP!",
      },
      null,
      2
    ),
  };
};
