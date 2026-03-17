const app = require("./app");
const PORT = 3001;
app.listen(PORT, () => {
 console.log(`https://localhost:3001`);
 console.log(process.env.DB_DATABASE);
});
//https://localhost:3001