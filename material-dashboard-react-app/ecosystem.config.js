module.exports = {
  apps: [
    {
      name: 'material-app-react-app',
      script: 'node_modules/serve/bin/serve.js',
      args: "-s build -l 3001",
      exec_mode: "fork_mode"
    },
  ],
};
