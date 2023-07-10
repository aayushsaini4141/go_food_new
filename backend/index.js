const express = require('express')
const app = express()
const port = 5000
const mongoDB = require('./db')
const cors = require('cors');
// const { Next } = require('react-bootstrap/esm/PageItem')
app.use(cors({
  origin: 'http://localhost:3000', // Only allow requests from this origin
  methods: 'GET, POST', // Only allow GET and POST requests
  allowedHeaders: 'Content-Type, Authorization', // Allow specific headers
  credentials: true // Enable handling of cookies, authentication headers, etc.
}));

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})
mongoDB();
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
// app.post('/api/creatuser', (req, res) => {
//   res.status(200).send({message:"good"});
// });
app.use('/api',require("./routes/CreateUser"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})