module.exports = function(RED) {
  function find(config) {
    const {
      compact,
      merge,
      parse,
      sanitizeParameters
    } = require("../services");
    RED.nodes.createNode(this, config);
    const node = this;
    const { client, ...configuration } = config;
    node.connection = RED.nodes.getNode(client);
    node.on("input", async msg => {
      const { layout, data, query, ...parameters } = compact([
        sanitizeParameters(configuration, [
          "layout",
          "limit",
          "offset",
          "sort",
          "query",
          "scripts",
          "portals",
          "data"
        ]),
        msg.parameters,
        msg.payload
      ]);
      let connection = await this.connection.client
      connection
        .find(layout, query, parse(parameters))
        .then(response =>
          node.send(merge(msg, data ? response.data : response))
        )
        .catch(error => node.error(error.message, msg));
    });
  }
  RED.nodes.registerType("perform-find", find);
};
