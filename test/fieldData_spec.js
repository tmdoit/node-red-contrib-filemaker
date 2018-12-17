/* global describe beforeEach afterEach it */
var { expect } = require("chai");
const helper = require("node-red-node-test-helper");
const client = require("../src/client/client.js");
const createNode = require("../src/nodes/create.js");
const getNode = require("../src/nodes/get.js");
const fieldData = require("../src/nodes/fieldData.js");
const catchNode = require("./core/25-catch.js");

helper.init(require.resolve("node-red"));

describe("FieldData Utility Node", function() {
  beforeEach(function(done) {
    helper.startServer(done);
  });

  afterEach(function(done) {
    helper.unload();
    helper.stopServer(done);
  });

  it("should be loaded", function(done) {
    var testFlows = [{ id: "n1", type: "inject" }];
    helper.load(fieldData, testFlows, function() {
      done();
    });
  });
  it("should transform an array of data", function(done) {
    var testFlow = [
      {
        id: "737aeefc.65dcd8",
        type: "tab",
        label: "Select Field Data",
        disabled: false,
        info: ""
      },
      {
        id: "4a8a701a.934d4",
        type: "helper"
      },
      {
        id: "ffdef185.7d8578",
        type: "create-record",
        z: "737aeefc.65dcd8",
        client: "e5173483.adc92",
        layout: "payload.layout",
        layoutType: "msg",
        data: "payload.data",
        dataType: "msg",
        scripts: "",
        scriptsType: "none",
        merge: "false",
        mergeType: "bool",
        output: "payload",
        x: 260,
        y: 40,
        wires: [["e3e225bd.df3f68"]]
      },
      {
        id: "a9d649c0.1d3ff",
        type: "catch",
        z: "737aeefc.65dcd8",
        name: "",
        scope: null,
        x: 680,
        y: 100,
        wires: [["4a8a701a.934d4"]]
      },
      {
        id: "e3e225bd.df3f68",
        type: "get-record",
        z: "737aeefc.65dcd8",
        client: "e5173483.adc92",
        layout: "payload.layout",
        layoutType: "msg",
        recordId: "payload.recordId",
        recordIdType: "msg",
        scripts: "",
        scriptsType: "none",
        portals: "",
        portalsType: "none",
        output: "payload",
        x: 450,
        y: 40,
        wires: [["ffd6eb0e.fd17"]]
      },
      {
        id: "ffd6eb0e.fd17",
        type: "fieldData",
        z: "737aeefc.65dcd8",
        data: "payload.data",
        dataType: "msg",
        output: "payload.data",
        x: 660,
        y: 40,
        wires: [["4a8a701a.934d4"]]
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
      [client, createNode, getNode, fieldData, catchNode],
      testFlow,
      {
        "e5173483.adc92": {
          username: process.env.FILEMAKER_USERNAME,
          password: process.env.FILEMAKER_PASSWORD
        }
      },
      function() {
        var createNode = helper.getNode("ffdef185.7d8578");
        var helperNode = helper.getNode("4a8a701a.934d4");
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
        createNode.receive({
          payload: { layout: "people", data: { name: "Anakin Skywalker" } }
        });
      }
    );
  });
});
