let content = require('./storage/indexes.json');
const path = require("path")
const {writeFile} = require('fs')

// reqExr is /<[^>]*>?/gm

// tokenise 1 => only get texts and paragrapghs
function paragraphsOnly() {
    for(let i=0;i<content.length;i++){
        content[i].Level2Contents =  content[i].Level2Contents.filter(value=>value['type']=='text' || value['type']=='paragraph')
    }
} 
paragraphsOnly();

writeFile(
    path.resolve(__dirname, 'storage/indexes.json'),
    JSON.stringify(content),
    'utf-8',
    function (c) {
      console.log(c)
    }
  )

// Tokenise 2 => removing tags and curly braceses expressions 
