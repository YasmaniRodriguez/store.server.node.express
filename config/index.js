const PRIVATE_KEY = "miclaveultrasecreta123*";
const SESSION_OPTIONS = {
	secret: "miClaveUltraSecreta456*",
	resave: false,
	saveUninitialized: false,
	rolling: true,
	cookie: { maxAge: 600000 },
};
const PORT = 8080;
const DATA_PERSISTENCE_MODE = 1;
const MONGO_DATA_LOCAL_OPTIONS = {
	authSource: "admin",
	user: "root",
	pass: "qwerty456",
};
const MONGO_DATA_CLOUD_URI =
	"mongodb+srv://root:masterinc@online-store-server.ocmyz.mongodb.net/ecommerce";
const MONGO_SESSION_CLOUD_URI =
	"mongodb+srv://root:masterinc@online-store-server.ocmyz.mongodb.net/sessions";
const MONGO_DATA_LOCAL_URI = "mongodb://localhost:27017/ecommerce";
const MYSQL_LOCAL_OPTIONS = {
	client: "mysql",
	connection: {
		host: "127.0.0.1",
		port: 3306,
		user: "root",
		password: "q3rtY456*",
		database: "ecommerce",
	},
	pool: { min: 0, max: 7 },
};
const SQLITE_LOCAL_OPTIONS = {
	filename: "dao/SQLite/data/ecommerce.sqlite",
};
const DATA_NORMALIZATION = true;

const FACEBOOK_CLIENT_ID = "672538957001557";
const FACEBOOK_CLIENT_SECRET = "6e3c8aca68729c7d1bef57eaaa375d81";

const GOOGLE_CLIENT_ID = "XyLuTLIKFiy28WRHX6Ov_93IP";
const GOOGLE_CLIENT_SECRET =
	"3184723834901-tn6figvte2381.apps.googleusercontent.com";

const ETHEREAL_OPTIONS = {
	host: "smtp.ethereal.email",
	port: 587,
	auth: {
		user: "joan.block56@ethereal.email",
		pass: "XCkab1jHFg8xN1GpNn",
	},
};

const GMAIL_OPTIONS = {
	service: "gmail",
	auth: {
		user: "ys.dev.mode@gmail.com",
		pass: "M%D3vM0d3",
	},
};

const TWILIO_ACCOUNT_SID = "AC17ac2aac57a660f4504873ac56b5fdbc";

const TWILIO_AUTH_TOKEN = "e50c8e281f88d7968e0f32799984c617";

const TWILIO_ACCOUNT_NUMBER = "+12058838709";

const TWILIO_WHATSAPP_NUMBER = "+14155238886";

const ADMIN_PHONE_NUMBER = "+5491134601544";

module.exports = {
	PRIVATE_KEY,
	SESSION_OPTIONS,
	PORT,
	DATA_PERSISTENCE_MODE,
	MONGO_DATA_CLOUD_URI,
	MONGO_DATA_LOCAL_URI,
	MONGO_DATA_LOCAL_OPTIONS,
	MYSQL_LOCAL_OPTIONS,
	SQLITE_LOCAL_OPTIONS,
	DATA_NORMALIZATION,
	MONGO_SESSION_CLOUD_URI,
	FACEBOOK_CLIENT_ID,
	FACEBOOK_CLIENT_SECRET,
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	ETHEREAL_OPTIONS,
	GMAIL_OPTIONS,
	TWILIO_ACCOUNT_SID,
	TWILIO_AUTH_TOKEN,
	TWILIO_ACCOUNT_NUMBER,
	TWILIO_WHATSAPP_NUMBER,
	ADMIN_PHONE_NUMBER,
};