/* global describe beforeEach afterEach it */
const { expect } = require("chai");
const helper = require("node-red-node-test-helper");
const transformNode = require("../src/nodes/transform.js");
const clientNode = require("../src/client/client.js");
const listNode = require("../src/nodes/list.js");
const catchNode = require("./core/25-catch.js");

helper.init(require.resolve("node-red"));

describe("Transform Utility Node", function() {
  beforeEach(function(done) {
    helper.startServer(done);
  });

  afterEach(function(done) {
    helper.unload();
    helper.stopServer(done);
  });

  it("should be loaded", function(done) {
    const testFlows = [{ id: "n1", type: "inject" }];
    helper.load(transformNode, testFlows, function() {
      done();
    });
  });
  it("should transform an array of data", function(done) {
    const testFlow = [
      {
        id: "bb39084f.0bba9",
        type: "tab",
        label: "Transform Data",
        disabled: false,
        info: ""
      },
      {
        id: "1a8a1be2.50d8e4",
        type: "helper"
      },
      {
        id: "242464a4.f640e4",
        type: "catch",
        z: "bb39084f.0bba9",
        name: "",
        scope: null,
        x: 580,
        y: 100,
        wires: [["1a8a1be2.50d8e4"]]
      },
      {
        id: "d5b348ab.46ac08",
        type: "list-records",
        z: "bb39084f.0bba9",
        client: "e5173483.adc92",
        layout: "payload.layout",
        layoutType: "msg",
        limit: "",
        limitType: "num",
        offset: "",
        offsetType: "num",
        sort: "",
        sortType: "none",
        scripts: "",
        scriptsType: "none",
        portals: "",
        portalsType: "none",
        output: "payload",
        x: 330,
        y: 40,
        wires: [["84f24eb5.f61b6"]]
      },
      {
        id: "84f24eb5.f61b6",
        type: "transform",
        z: "bb39084f.0bba9",
        parameters: "",
        parameterType: "none",
        data: "payload.data",
        dataType: "msg",
        output: "payload.data",
        x: 540,
        y: 40,
        wires: [["1a8a1be2.50d8e4"]]
      },
      {
        id: "e5173483.adc92",
        type: "filemaker-api-client",
        z: "",
        server: process.env.FILEMAKER_SERVER,
        name: "Mute Symphony",
        application: process.env.FILEMAKER_APPLICATION,
        usage: true
      }
    ];
    helper.load(
      [clientNode, listNode, transformNode, catchNode],
      testFlow,
      {
        "e5173483.adc92": {
          username: process.env.FILEMAKER_USERNAME,
          password: process.env.FILEMAKER_PASSWORD
        }
      },
      function() {
        var listNode = helper.getNode("d5b348ab.46ac08");
        var helperNode = helper.getNode("1a8a1be2.50d8e4");
        helperNode.on("input", function(msg) {
          try {
            expect(msg)
              .to.be.an("object")
              .with.any.keys("payload")
              .and.property("payload")
              .to.be.a("object")
              .and.property("data")
              .to.be.a("array");
            done();
          } catch (err) {
            done(err);
          }
        });
        listNode.receive({
          payload: {
            layout: "people"
          }
        });
      }
    );
  });
});
