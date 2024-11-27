const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    '##############################################################\n'
  );
  console.log(`          CodeGen Node Template Server\n`);
  console.log(`            started on port: ${PORT} 🚀\n`);
  console.log(
    '##############################################################\n'
  );
});
