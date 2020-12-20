const  express = require('express');
const mongoose = require('mongoose')
const  config = require('./config.json');
const  postRoutes = require('./routes/postRoutes');
const commentRoutes=require('./routes/commentRoutes');
const themesRoutes=require('./routes/themeRoutes');
const forumRoutes=require("./routes/forumRoutes");
const userRoutes=require('./routes/userRoutes');

const morgan = require('morgan')
const bodyParser =  require("body-parser");

//app
const app = express()


//db
mongoose.connect(config.DATABASE, {
    useNewUrlParser : true,
    useCreateIndex : true
}).then(() => console.log('DB connected'));

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());


//Routes

app.use(forumRoutes);
app.use(themesRoutes);
app.use(userRoutes);
app.use(commentRoutes);
app.use(postRoutes);

app.listen(config.port,()=>{
    console.log(`Server Started on port ${config.port}`);
});