module.exports = function(RED) {
  function login(configuration) {
    const { merge } = require("../services");
    RED.nodes.createNode(this, configuration);
    const node = this;
    const { client } = configuration;
    node.connection = RED.nodes.getNode(client);

    node.on("input", async message => {
      let client = await this.connection.client;
      client
        .login()
        .then(response =>
          node.send(merge(configuration.output, message, response))
        )
        .catch(error => node.error(error.message, message));
    });
  }
  RED.nodes.registerType("dapi-login", login);
};
