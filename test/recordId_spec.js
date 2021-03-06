/* global describe beforeEach afterEach it */

const { expect } = require("chai");
const helper = require("node-red-node-test-helper");
const recordIdNode = require("../src/nodes/recordId.js");
const listNode = require("../src/nodes/list.js");
const clientNode = require("../src/client/client.js");
const catchNode = require("./core/25-catch.js");

helper.init(require.resolve("node-red"));

describe("Record Id Utility Node", function() {
  beforeEach(function(done) {
    helper.startServer(done);
  });

  afterEach(function(done) {
    helper.unload();
    helper.stopServer(done);
  });

  it("should be loaded", function(done) {
    let testFlows = [{ id: "n1", type: "inject" }];
    helper.load(recordIdNode, testFlows, function() {
      done();
    });
  });
  it("should extract record ids from a single object", function(done) {
    let testFlow = [
      {
        id: "eff0d28.1c78bb",
        type: "tab",
        label: "Select Record Id",
        disabled: false,
        info: ""
      },
      {
        id: "abcce428.f88018",
        type: "helper"
      },
      {
        id: "b4b1ae5f.4801b8",
        type: "catch",
        z: "eff0d28.1c78bb",
        name: "",
        scope: null,
        x: 560,
        y: 100,
        wires: [["abcce428.f88018"]]
      },
      {
        id: "871850c1.2c366",
        type: "dapi-list-records",
        z: "eff0d28.1c78bb",
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
        wires: [["c2e318c8.f96378"]]
      },
      {
        id: "c2e318c8.f96378",
        type: "dapi-record-id",
        z: "eff0d28.1c78bb",
        data: "payload.data[0]",
        dataType: "msg",
        output: "payload.data",
        x: 530,
        y: 40,
        wires: [["abcce428.f88018"]]
      },
      {
        id: "e5173483.adc92",
        type: "dapi-client",
        z: "",
        name: "Node Red Test Client",
        usage: true
      }
    ];
    helper.load(
      [recordIdNode, clientNode, listNode, catchNode],
      testFlow,
      {
        "e5173483.adc92": {
          server: process.env.FILEMAKER_SERVER,
          application: process.env.FILEMAKER_APPLICATION,
          username: process.env.FILEMAKER_USERNAME,
          password: process.env.FILEMAKER_PASSWORD
        }
      },
      function() {
        var listNode = helper.getNode("871850c1.2c366");
        var helperNode = helper.getNode("abcce428.f88018");
        helperNode.on("input", function(msg) {
          try {
            expect(msg)
              .to.be.an("object")
              .with.any.keys("payload")
              .and.property("payload")
              .to.be.an("object")
              .with.any.keys("data")
              .and.property("data")
              .to.be.a("string");
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
  it("should extract record ids from an array of objects", function(done) {
    let testFlow = [
      {
        id: "eff0d28.1c78bb",
        type: "tab",
        label: "Select Record Id",
        disabled: false,
        info: ""
      },
      {
        id: "abcce428.f88018",
        type: "helper"
      },
      {
        id: "b4b1ae5f.4801b8",
        type: "catch",
        z: "eff0d28.1c78bb",
        name: "",
        scope: null,
        x: 560,
        y: 100,
        wires: [["abcce428.f88018"]]
      },
      {
        id: "871850c1.2c366",
        type: "dapi-list-records",
        z: "eff0d28.1c78bb",
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
        wires: [["c2e318c8.f96378"]]
      },
      {
        id: "c2e318c8.f96378",
        type: "dapi-record-id",
        z: "eff0d28.1c78bb",
        data: "payload.data",
        dataType: "msg",
        output: "payload.data",
        x: 530,
        y: 40,
        wires: [["abcce428.f88018"]]
      },
      {
        id: "e5173483.adc92",
        type: "dapi-client",
        z: "",
        name: "Node Red Test Client",
        usage: true
      }
    ];
    helper.load(
      [recordIdNode, clientNode, listNode, catchNode],
      testFlow,
      {
        "e5173483.adc92": {
          server: process.env.FILEMAKER_SERVER,
          application: process.env.FILEMAKER_APPLICATION,
          username: process.env.FILEMAKER_USERNAME,
          password: process.env.FILEMAKER_PASSWORD
        }
      },
      function() {
        var listNode = helper.getNode("871850c1.2c366");
        var helperNode = helper.getNode("abcce428.f88018");
        helperNode.on("input", function(msg) {
          try {
            expect(msg)
              .to.be.an("object")
              .with.any.keys("payload")
              .and.property("payload")
              .to.be.a("object")
              .and.property("data")
              .to.be.a("array")
              .and.property(0)
              .to.be.a("string");
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
  it("should reject with an error message and a code", function(done) {
    let testFlow = [
      {
        id: "a0254177.9c8dc",
        type: "tab",
        label: "Select Record Id Error",
        disabled: false,
        info: ""
      },
      {
        id: "c03adb39.c4a738",
        type: "helper"
      },
      {
        id: "bb98f3db.1ee78",
        type: "catch",
        z: "a0254177.9c8dc",
        name: "",
        scope: null,
        x: 360,
        y: 100,
        wires: [["c03adb39.c4a738"]]
      },
      {
        id: "faf29df7.988c78",
        type: "dapi-record-id",
        z: "a0254177.9c8dc",
        data: "payload.data",
        dataType: "msg",
        output: "payload.data",
        x: 330,
        y: 40,
        wires: [["c03adb39.c4a738"]]
      }
    ];
    helper.load(
      [recordIdNode, catchNode],
      testFlow,
      {
        "e5173483.adc92": {
          server: process.env.FILEMAKER_SERVER,
          application: process.env.FILEMAKER_APPLICATION,
          username: process.env.FILEMAKER_USERNAME,
          password: process.env.FILEMAKER_PASSWORD
        }
      },
      function() {
        const recordIdNode = helper.getNode("faf29df7.988c78");
        const helperNode = helper.getNode("c03adb39.c4a738");
        helperNode.on("input", function(msg) {
          try {
            expect(msg)
              .to.be.an("object")
              .with.any.keys("payload")
              .and.property("payload")
              .to.be.a("object")
              .and.property("data")
              .to.be.a("string");
            done();
          } catch (err) {
            done(err);
          }
        });
        recordIdNode.receive({
          payload: { data: "none" }
        });
      }
    );
  });
});
