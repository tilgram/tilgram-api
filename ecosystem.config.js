module.exports = {
    apps : [{
          name        : "TILgram",
          script      : "./src/bin/server.js",
          watch       : false,
          env: {
                  "NODE_ENV": "development",
                  "NODE_PATH": "src"
                },
          env_production : {
                   "NODE_ENV": "production",
                   "NODE_PATH": "src"
                }
        }]
}


