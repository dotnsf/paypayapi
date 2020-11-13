//. app.js
var express = require( 'express' ),
    app = express();

var settings = require( './settings' );

var paypay = require( './paypay/paypay' );
app.use( '/paypay', paypay );

app.use( express.Router() );
app.use( express.static( __dirname + '/public' ) );

var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server stating on " + port + " ..." );
