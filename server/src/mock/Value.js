const faker = require("faker");

const userId = faker.random.number,
  userIP = faker.internet.ip,
  dateTime = faker.date.past,
  deviceName = faker.commerce.productName;

module.exports = {
  userId,
  userIP,
  dateTime,
  deviceName
};
