//. app.js

var express = require( 'express' ),
    ejs = require( 'ejs' ),
    app = express();

var settings = require( './settings' );

var paypay = require( './paypay/paypay' );
app.use( '/paypay', paypay );

app.use( express.Router() );
app.use( express.static( __dirname + '/public' ) );

app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );

app.get( '/', function( req, res ){
  res.render( 'index', { settings: settings } );
});

var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server stating on " + port + " ..." );
