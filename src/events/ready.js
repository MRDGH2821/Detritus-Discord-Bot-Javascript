const { ClientEvents } = require("detritus-client/lib/constants");
const readyEvent = {
  event: ClientEvents.GATEWAY_READY,
  /**
   *
   * @param {Object} args
   * @param {import("detritus-client").ShardClient} args.shard
   * @param {import("detritus-client").GatewayClientEvents.GatewayReady} args.raw
   * @returns {void}
   */
  run(args) {
    const { shard } = args;
    console.log(
      "Logged in as:",
      shard.user?.username + "#" + shard.user?.discriminator
    );
    shard.rest.fetchApplicationCommands(shard.userId).then((commands) => {
      console.log("Global Commands: ", commands.length);
    });
  },
};
module.exports = readyEvent;
