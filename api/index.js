const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const loadApiDataInDb = require("./src/utils/loadApiDataInDb");
const PORT = 3001;


conn.sync({ force: true }).then(() => {
  server.listen(PORT, async () => {
    await loadApiDataInDb();
    console.log("Server is listening at", PORT); // eslint-disable-line no-console
  });
});
