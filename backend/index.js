const db = require('./db/db.config')
const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const multer = require('multer');
const path = require('path');
var client = require('./routes/client');
var category = require('./routes/category')
var admClient = require('./routes/adminLogin');
var exams = require('./routes/exam');
var subject = require('./routes/subject');
var topic = require('./routes/topic');
var questions = require('./routes/question');
var candidate = require('./routes/candidate');


const storage = multer.diskStorage({
  destination: './uploads', 
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const extname = path.extname(file.originalname);
    cb(null, 'logo-' + uniqueSuffix + extname); 
  }
});
app.use('/uploads', express.static('uploads'));
const upload = multer({ storage: storage });
const uploadexcel = multer({ dest: 'csv/' });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());
const corsOptions = {
  origin: ['http://localhost:3000','http://localhost:3001']
};
app.use(cors(corsOptions));


// Create a new client
app.post('/createCategory', upload.single('category_logo'),(req,res) => {
  console.log(req.body)
  let logo = req.file ? req.file.filename : 'default_logo.png';
  const data = {
    category_name:req.body.category_name,
    logo:logo
  } 
  console.log("-----"+JSON.stringify(data))
  category.createCategory(data);
  res.status(200).json({ message: 'category created successfully' });
});


app.get('/allCategory', async (req, res) => {
  const clients = await category.allCategory();
  console.log(clients)
  res.json(clients);
});
app.get('/allSubCategory', async (req, res) => {
  const clients = await category.allSubCategory();
  console.log(clients)
  res.json(clients);
});


app.post('/createSubCategory', upload.single('sub_category_logo'),(req,res) => {
  console.log(req.body)
  const data = {
    category_name:req.body.category_name,
    sub_category_name:req.body.sub_category_name,
    logo:req.file.filename
  } 
  console.log("-----"+JSON.stringify(data))
  category.createSubCategory(data);
  res.status(200).json({ message: 'Sub Category created successfully' });
});

app.post('/createClient',(req,res) => {
  const data = req.body;
  console.log("-----"+JSON.stringify(req.body))
  client.createClient(req, res);
});

app.post('/createExam', upload.single('exam_logo'),(req,res) => {
  console.log(req.body)
  const data = {
    category_name:req.body.category_name,
    sub_category_name:req.body.sub_category_name,
    exam_name:req.body.exam_name,
    exam_overview:req.body.exam_overview,
    numberof_exam_stage:req.body.numberof_exam_stage,
    exam_mode:req.body.exam_mode,
    exam_duration:req.body.exam_duration,
    logo:req.file.filename
  } 
  console.log("-----"+JSON.stringify(req.body))
  exams.createExam(data);
  res.status(200).json({ message: 'Exam created successfully' });
});
app.get('/allExams', async (req, res) => {
  const clients = await exams.allexams();
  console.log(clients)
  res.json(clients);
});

app.post('/createSubject',(req,res) => {
  const data = req.body;
  console.log("-----"+JSON.stringify(req.body))
  subject.createSubject(req, res);
});

app.get('/allSubject', async (req, res) => {
  const clients = await subject.allSubjects();
  console.log(clients)
  res.json(clients);
});

app.get('/allCandidate', async (req, res) => {
  const clients = await candidate.allCandidates();
  console.log(clients)
  res.json(clients);
});


app.post('/createCandidate', upload.single('candidate_image'),(req,res) => {
  console.log(req.body)
  const data = {
    name:req.body.name,
    mobile_no:req.body.mobile_no,
    username:req.body.username,
    password:req.body.password,
    candidate_image:req.file.filename,
    gender:req.body.gender,
    dob:req.body.dob
  } 
  console.log("-----"+JSON.stringify(data))
  candidate.createCandidate(data);
  res.status(200).json({ message: 'Candidate created successfully' });
});
app.post('/createTopic',(req,res) => {
  const data = req.body;
  console.log("-----"+JSON.stringify(req.body))
  topic.createTopic(req, res);
});



app.get('/allQuestions', async (req, res) => {
  const clients = await questions.allQuestions();
  console.log(clients)
  res.json(clients);
});

app.post('/createQuestion',(req,res) => {
  const data = req.body;
  console.log("-----"+JSON.stringify(req.body))
  questions.createQuestion(req, res);
});

app.post('/createQuestionCsv', upload.single('file'), (req, res) => {

  const file = req.file;
  questions.parseExcelFile(file.path);
  res.status(200).json({ message: 'Questions created successfully'});
});



app.get('/allTopic', async (req, res) => {
  const clients = await topic.allTopic();
  console.log(clients)
  res.json(clients);
});


// Read all clients
app.post('/adminLogin', async (req, res) => {
  const data = req.body;
  console.log(data)
  const clients = await admClient(data);
  console.log(clients)
  res.status(200).json(clients);
});

// Read all clients
app.get('/client', async (req, res) => {
  const clients = await client.readClients();
  console.log(clients)
  res.json(clients);
});

// Update a client
app.put('/updateClient/:id', (req, res) => {
  const id = req.params.id;
  const data = req.body;
  client.updateClient(id, data);
  res.send('client updated successfully');
});

// Delete a client
app.delete('/deleteClient/:id', (req, res) => {
  const id = req.params.id;
  client.deleteClient(id);
  res.send('client deleted successfully');
});
const port = 4000;


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


