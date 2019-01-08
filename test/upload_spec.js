/* global before describe beforeEach afterEach it */
const { expect } = require("chai");
const path = require("path");
const helper = require("node-red-node-test-helper");
const environment = require("dotenv");
const varium = require("varium");
const uploadNode = require("../src/nodes/upload.js");
const clientNode = require("../src/client/client.js");
const catchNode = require("./core/25-catch.js");

helper.init(require.resolve("node-red"));

describe("Upload File Node", function() {
  before(function(done) {
    environment.config({ path: "./test/.env" });
    varium(process.env, "./test/env.manifest");
    done();
  });

  beforeEach(function(done) {
    helper.startServer(done);
  });

  afterEach(function(done) {
    helper.unload();
    helper.stopServer(done);
  });

  it("should be loaded", function(done) {
    const testFlow = [{ id: "n1", type: "inject" }];
    helper.load(uploadNode, testFlow, function() {
      done();
    });
  });

  it("should upload to a record", function(done) {
    var testFlows = [
      {
        id: "146270a1.3bd87f",
        type: "tab",
        label: "Upload File From Path",
        disabled: false,
        info: ""
      },
      {
        id: "44103afd.2b0cd4",
        type: "helper"
      },
      {
        id: "705e457f.31fc0c",
        type: "catch",
        z: "146270a1.3bd87f",
        name: "",
        scope: null,
        x: 260,
        y: 100,
        wires: [["44103afd.2b0cd4"]]
      },
      {
        id: "556248ef.700408",
        type: "dapi-upload-file",
        z: "146270a1.3bd87f",
        client: "e5173483.adc92",
        layout: "payload.layout",
        layoutType: "msg",
        file: "payload.file",
        fileType: "msg",
        field: "payload.field",
        fieldType: "msg",
        parameters: "",
        parametersType: "none",
        output: "payload",
        x: 250,
        y: 40,
        wires: [["44103afd.2b0cd4"]]
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
      [clientNode, uploadNode, catchNode],
      testFlows,
      {
        "e5173483.adc92": {
          username: process.env.FILEMAKER_USERNAME,
          password: process.env.FILEMAKER_PASSWORD
        }
      },
      function() {
        const uploadNode = helper.getNode("556248ef.700408");
        const helperNode = helper.getNode("44103afd.2b0cd4");
        helperNode.on("input", function(msg) {
          try {
            expect(msg)
              .to.be.an("object")
              .with.any.keys("payload");
            done();
          } catch (err) {
            done(err);
          }
        });
        uploadNode.receive({
          payload: {
            file: path.join(__dirname, "./assets/placeholder.json"),
            layout: "Images",
            field: "container"
          }
        });
      }
    );
  });
  it("should throw an error with a message and a code", function(done) {
    var testFlow = [
      {
        id: "f1",
        type: "tab",
        label: "Catch Upload Error"
      },
      {
        id: "n2",
        type: "dapi-upload-file",
        z: "f1",
        name: "Upload Node",
        client: "3783b2da.4346a6",
        layout: "Devices",
        scripts: "",
        merge: true,
        wires: [["n3"]]
      },
      {
        id: "n3",
        type: "helper",
        z: "f1"
      },
      {
        id: "3783b2da.4346a6",
        type: "filemaker-api-client",
        server: process.env.FILEMAKER_SERVER,
        name: "Mute Symphony",
        application: process.env.FILEMAKER_APPLICATION,
        usage: true
      },
      {
        id: "n1",
        type: "catch",
        z: "f1",
        name: "catch",
        wires: [["n3"]]
      }
    ];
    helper.load(
      [clientNode, uploadNode, catchNode],
      testFlow,
      {
        "3783b2da.4346a6": {
          username: process.env.FILEMAKER_USERNAME,
          password: process.env.FILEMAKER_PASSWORD
        }
      },
      function() {
        const upload = helper.getNode("n2");
        const helperNode = helper.getNode("n3");
        helperNode.on("input", function(msg) {
          try {
            expect(msg)
              .to.be.an("object")
              .with.any.keys("_msgid", "code", "error", "message");
            done();
          } catch (err) {
            done(err);
          }
        });
        upload.receive({ payload: { layout: "none" } });
      }
    );
  });
});
