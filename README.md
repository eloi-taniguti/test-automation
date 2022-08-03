# Test Automation project


# Start dev environment

* Requirements
    * node v14.19.1

**NOTE:** If you have a different node version, use *nvm* to change to the required one.  
On MacOS:
~~~~
brew update 
brew install nvm 
~~~~
or use the following cURL or Wget command:
~~~~
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
~~~~
~~~~
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
~~~~


1. Install dependencies. On project root folder run both commands in sequence:
    ~~~~
    npm install
    npm run install-all
    ~~~~

2. Start from project root folder:
    ~~~~
    npm start
    ~~~~

3. Or if you want to start separately.  
   First start Server:
    ~~~~
    cd server
    node server.js
    ~~~~

4. And then start Client:
    ~~~~
    cd client
    npm start
    ~~~~

* Open the application
    * http://localhost:3000/