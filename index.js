var nodent = require('nodent')();
var through = require('through');
//var convert = require('convert-source-map');

function isJavascript (file) {
    return (/\.js$/).test(file);
}

module.exports = function (file) {
    if (!isJavascript(file)) return through();

    var data = '';
    var stream = through(write, end);
    return stream;

    function write (buf) { data += buf }
    function end () {
        var opts,src;
        try {
            opts = nodent.parseCompilerOptions(data,console.log.bind(console)) || {};
            opts.mapStartLine = 1;
            opts.sourcemap = true;
            src = "Function.prototype.$asyncbind="+Function.prototype.$asyncbind.toString().replace(/\s+/g," ")
              + ";window.$error=window.$error||function(e){throw e};\n"
              + nodent.compile(data,file,undefined,opts).code ;
        } catch (error) {
            // Nodent couldn't compile this - just pass the source through unmolested
            // console.log(error.stack) ;
            stream.emit('error',error);
            src = data;
        }
        this.queue(src);
        this.queue(null);
    }
};
