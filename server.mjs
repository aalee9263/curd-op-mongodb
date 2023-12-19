import express from 'express';
import path from 'path';
import mongoose from 'mongoose';


const app = express()
app.use(express.json())

const port = process.env.PORT  || 5001 ;


let userSchema = new mongoose.Schema({
    firstName: String,
    secondName: String,
    createdOn: { type: Date, default: Date.now }
});
const user = mongoose.model('User', userSchema);


app.post('/users', async (req, res) => {
    try {
      const { firstName, lastName } = req.body;
      const user = new User({ firstName, lastName });
      const savedUser = await user.save();
      res.json(savedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

const __dirname = path.resolve();
app.get('/', express.static(path.join(__dirname, "/index.html")));
// app.use('/', express.static(path.join(__dirname, "/")));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




// /////////////////////////////////////////////////////////////////////////////////////////////////
let dbURI = "mongodb+srv://clusterstartup:clusterstartup@clusterstartup.xljmbks.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dbURI);


////////////////mongodb connected disconnected events///////////////////////////////////////////////
mongoose.connection.on('connected', function () {//connected
    console.log("Mongoose is connected");
});

mongoose.connection.on('disconnected', function () {//disconnected
    console.log("Mongoose is disconnected");
    process.exit(1);
});

mongoose.connection.on('error', function (err) {//any error
    console.log('Mongoose connection error: ', err);
    process.exit(1);
});

process.on('SIGINT', function () {/////this function will run jst before app is closing
    console.log("app is terminating");
    mongoose.connection.close(function () {
        console.log('Mongoose default connection closed');
        process.exit(0);
    });
});
/////////////////////mongodb connected disconnected events///////////////////////////////////////////////