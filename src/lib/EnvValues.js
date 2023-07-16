const { config } = require("dotenv");

config();

if (!process.env.DISCORD_TOKEN) {
  throw new Error("DISCORD_TOKEN is not defined");
}

const { DISCORD_TOKEN } = process.env;

module.exports = {
  DISCORD_TOKEN,
};
