const fs   = require( 'fs' );
const http = require( 'http' );

var port = process.env.PORT || 8080;
const StaticFolder = "./public"; // "./public"
const indexFile = '/index.html';

const server = http.createServer( ( req, res )=>{

  
  req.url == '/'
  ? req.url = indexFile 
  : req.url;

  const file = `${ StaticFolder }${ req.url }`;


    fs.readFile( file, ( err, data )=>{

      if ( err ){

        res.writeHead( 404 );
        res.end( 'File Not Found' );
        return;
      
      }

      res.writeHead( 200 );
      res.end( data );

    } );

} );

server.listen( Port, null, ()=>{

  console.log( `Server started on: ${ Port }` );

} );