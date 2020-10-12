var express               = require("express");
var app                   = express();
var ejs                   = require("ejs");
var bodyParser            = require("body-parser");
var cors                  = require("cors");
var passport              = require("passport");
var User                  = require("./models/user");
var Project               = require("./models/project");
var LocalStrategy         = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var methodOverride        = require("method-override");
const multer              = require("multer");
const mongoose            = require('mongoose');
const path                = require('path');
const livereload          = require("livereload");
var xlsxtojson            = require("xlsx-to-json");
const fs                  = require('fs');
var csv                   = require("fast-csv");
var projectId , filename , dataInMongoose,  projects ;
const liveReloadServer  = livereload.createServer();
const connectLivereload = require("connect-livereload");

liveReloadServer.watch(path.join(__dirname, 'public'));
app.set("view engine", "ejs");
const port = process.env.PORT || 3000;

app.use(connectLivereload());
app.use( express.static( "public" ) );
app.use(bodyParser.urlencoded({extendeed: true}));
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
//connect mongoose
mongoose.connect('mongodb://localhost:27017/novadb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});


const upload = multer({ storage: storage });
app.use(express.static('public'));


app.post('/project', upload.single('file'), 
    (req, res ,next ) => {
    	file = req.file
    	if (!file){
    		const error = new error("lütfen bir dosya yükleyin")
    		error.httpStatusCode = 400
    		return next(error);
    	}else{
    	res.setHeader('Content-Type', 'multipart/form-data');
    	res.setHeader('Connection' , 'keep-alive');
    	console.log("dosya yüklendi")
    	res.status(204).send(file);
    	console.log(file.filename)
    	console.log(file.path)
    	projectId=req.file.filename +"/"+ Date.now()
    	fileName =file.filename;
    	console.log(projectId);
		callConverter();
		Project.find(dataInMongoose).remove().exec();
    	}
    });

app.get("/project", function(req, res , next){
    Project.find({},function(err, projects){
        if(err){
            throw err;
        } else {
            res.render("project",{projects:projects});
        }
    })
});	
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/project");
  }, 5);
});

//PASSPORT CONFIG
app.use(require("express-session")({
	secret: "lololo",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//ROUTES
//===========
app.get("/", function(req, res){
	res.render("home");
});

app.get("/dashboard", function(req, res){
	res.render("dashboard");
});

//===============
//AUTH ROUTES
//===============
//show the register form
app.get("/", function(req, res){
	res.render("home");
});
//handle signup logic
app.post("/", function(req, res){
	var newUser = new User({email: req.body.email, username: req.body.username});
	User.register(newUser, req.body.password, function(err, user){
		if (err) {
			console.log(err);
			return res.render("home")
		}
		passport.authenticate("local")(req,res, function(){
			res.redirect("/dashboard");
		})
	});
});

//show login form
app.get("/login", function(req, res){
	res.render("login");
});

//handle login logic
app.post("/login", passport.authenticate("local", 
	{
		successRedirect: "/dashboard",
		failureRedirect: "/login"
	}), function(req, res){
	res.send("login logic happenns here");
});

//logout logic routes
app.get("/logout", function(req,res){
	req.logout();
	res.redirect("/");
});

//Converter Function file to json
function callConverter() {
	xlsxtojson({
		input: "./uploads/" + fileName,  // input xls 
		output: "output.json", // output json 
	}, function (err, result) {
		if (err) {
			console.log(err);
		} else {
			console.log(result);
			dataInMongoose=result;
			Project.insertMany(result);
		}
   })
};


app.listen(port, () => console.log(`Listening on ${port}`));