var nodecr = require('nodecr');

// Recognise text of any language in any format
nodecr.process(process.argv[2], function(err, text) {
    if(err) {
        console.error(err);
    } else {
        console.log(text);
    }
});
