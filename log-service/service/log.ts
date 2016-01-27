var seneca = require('seneca')

function color() {
  this.add( 'color:red', function(args,done){
    done(null, {hex:'#FF0000'});
  })
}

seneca()
  .use(color)
  .listen()
