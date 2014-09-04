nodecr = require("nodecr")

# Recognise text of any language in any format
nodecr.process process.argv[2], (err, text) ->
    if err
        console.error err
    else
        console.log text
    return

