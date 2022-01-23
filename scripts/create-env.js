const fs = require("fs");

fs.writeSync("./.env", `API=${process.env.API_KEY}\n`);
