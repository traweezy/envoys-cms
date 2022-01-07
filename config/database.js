const parse = require("pg-connection-string").parse;
const config =
  "postgres://lavgfahbdrhavg:927323450df10aab0072f5a738f4fb3e4871e3b88ffcf3f1a67dd1fbc245ac58@ec2-52-73-8-82.compute-1.amazonaws.com:5432/de65jolt2qqsd7";

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
