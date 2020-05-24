import app from './app';
const {
  env: {PORT = 3000},
} = process;
const server = app.listen(PORT, () => {
  console.log(
      'App is running at http://localhost:%d in %s mode', PORT, app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});

export default server;
