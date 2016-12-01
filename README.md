To run this application go to the test folder and type:

meteor --port $IP:$PORT

This will run the app and you will be told the url

the MONGO_URL can also be:
mongodb://diegomary:atreius@ds061371.mlab.com:61371/diegomary88

It is then possible to run the following:

MONGO_URL="mongodb://diegomary:atreius@ds061371.mlab.com:61371/diegomary88" meteor --port $IP:$PORT 

in such case we use the mongolab instance and we free the application from the burden of having Mongo in local
