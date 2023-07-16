const { InteractionCommandClient } = require("detritus-client");
const { DISCORD_TOKEN } = require("./lib/EnvValues");
const { resolve } = require("path");
const { readdir } = require("fs/promises");

async function main() {
  const bot = new InteractionCommandClient(DISCORD_TOKEN, {
    useClusterClient: true,
  });

  // Adding interaction commands
  await bot.addMultipleIn("./commands");

  // Adding events
  const eventsDir = resolve(__dirname, "events");

  await readdir(eventsDir).then((files) =>
    files.forEach((file) => {
      const path = resolve(eventsDir, file);
      const event = require(path);
      bot.client.on(event.event, event.run);
    })
  );

  bot.run();
}

main();
