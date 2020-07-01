
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const path = require('path');

const { users } = require('./dataset/mock/users.js');
const { table } = require('./dataset/mock/table.js');

const port = 4000;

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(bodyParser());
app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log('Started mocked server on port: ' + port);
});

let userAuth;
let authenticated = false;

console.log("User authenticated = false");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.post("/sign_in", urlencodedParser, (req, res) => {
    const body = req.body;
    const task = body.t;
    const p = body.p;

    if (task === "login" && p === "account") {
        const { username, password } = req.body;
        let responseText;
            if (username === 'testuser') {
                switch (password) {
                    case 'jr123':
                        responseText = 'logged';
                        userAuth = 0;
                        authenticated = true;
                        console.log("Login successful");
                        break;
                    case 'pl123':
                        responseText = 'logged';
                        userAuth = 1;
                        authenticated = true;
                        console.log("Login successful");
                        break;
                    case 'sr123':
                        responseText = 'logged';
                        userAuth = 2;
                        authenticated = true;
                        console.log("Login successful");
                        break;
                    case 'admin':
                        responseText = 'logged';
                        userAuth = 3;
                        authenticated = true;
                        console.log("Login successful");
                        break;     
                    default:
                        responseText = '<span class="error"></span>';
                    }
            } else {
                responseText = '<span class="error"></span>';
            }
	    return res.send(responseText);
    }
});

app.get("/sign_out", urlencodedParser, (req, res) => {
    authenticated = false;
    console.log("Logout successful");
    res.status(200).send({
        message: "User logged off"
        });
});
        
// profile
app.get('/user', (_, res) => {
    if (authenticated) {
        switch (userAuth) {
            case 0:
                res.json(users[0]);
                break;
            case 1:
                res.json(users[1]);
                break;
            case 2:
                res.json(users[2]);
                break;
            case 3:
                res.json(users[3]);
                break;
            default:
                res.sendStatus(401);
        }
    } else {
        res.sendStatus(401);
    }
});

// Page1 page
app.get('/page1', (_, res) => {
    if (authenticated) {
        res.json(table);
    } else {
        res.sendStatus(401);
    }
});