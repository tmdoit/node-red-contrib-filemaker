module.exports = function(RED) {
  function recordId(config) {
    const { recordId } = require("fms-api-client");
    const { merge } = require("../services");
    RED.nodes.createNode(this, config);
    const node = this;
    node.on("input", msg =>
      node.send(
        merge(
          msg,
          Object.assign({ data: recordId(msg.payload.data) }, msg.payload)
        )
      )
    );
  }
  RED.nodes.registerType("recordId", recordId);
};
