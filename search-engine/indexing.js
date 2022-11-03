
/**
 * Generate a front-matter object from all markdowns,
 * and cache them into an indexes array.
 *
 * @author Nawaf Khalifah
 * @contibuter Abdulaziz Qannam
 */



 const express = require('express')
 const app = express()
 const port = 3000 
 let cors = require('cors')
 app.use(cors())

const parseMarkdown = require('front-matter-markdown/lib')
const path = require("path")
const {readdirSync, readFileSync, writeFile} = require('fs')

// Paths
const DESTINATION_DIRECTORY = path.resolve(__dirname, '../site/content/docs/1.0')
const DESTINATION_EXTENSION = '.md'


app.post('/search', (req, res) => {
  console.log(req.body.keyword);
let rawdata = fs.readFileSync('/storage/indexes.json');
let words = JSON.parse(rawdata);
console.log(words);
})

const markdownParser = (text) => {
  const toHTML = text
    .replace(/^### (.*$)/gim, '<h3>$1</h3>') // h3 tag
    .replace(/^## (.*$)/gim, '<h2>$1</h2>') // h2 tag
    .replace(/^# (.*$)/gim, '<h1>$1</h1>') // h1 tag
    .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>') // bold text
    .replace(/\*(.*)\*/gim, '<i>$1</i>') // italic text
    .replace(/<[^>]*>?/gm, "")
    .replace(/`[^`]*`?/gm,"")
    .replace(/({)[^(})]*(})?/gm,"")
    .replace(/^(\{\{\< \w*([\W\w]) \>\}\})\s*((?:.|\s)*)+(\{\{\< \/\w*([\W\w]) \>\}\})/gm, '')
    .replace(/[^a-zA-Z ]+/gm,"");
  return toHTML.trim(); // using trim method to remove whitespace
}


// Finder
const findFiles = (destinationDirectory) => {
  let files = [];
  const items = readdirSync(destinationDirectory, {withFileTypes: true});

  for (const item of items) {
    if (item.isDirectory()) {
      files = [...files, ...findFiles(`${destinationDirectory}/${item.name}`)]
    } else {
      if (path.extname(item.name) === '.md') {
        files.push({
          path: destinationDirectory,
          name: item.name,
          fp: `${destinationDirectory}/${item.name}`
        })
      }
    }
  }

  return files;
}

const onlyLetters = (str) => {
  let words = str.split(' ');
  for(let i=0; i<words.length;i++){
    words[i] = words[i].replace(/[^a-zA-Z]+/,'')
    console.log(words[i])
  }
  return words.join();
}

const files = findFiles(DESTINATION_DIRECTORY)
let matters = [];

for (const file in files) {
  const currentFile = files[file].fp
  const fileContent = readFileSync(currentFile)

  if (fileContent.length) {
    const stringify = fileContent.toString()

    let frontMatter = parseMarkdown(stringify, {content : true, headingsAsToc: false})
    frontMatter.id = files[file].name
    frontMatter.fullContent = markdownParser(frontMatter.content);

    matters.push(frontMatter)
  }

}

if (matters.length) {
  writeFile(
    path.resolve(__dirname, 'storage/indexes.json'),
    JSON.stringify(matters),
    'utf-8',
    function (c) {
      console.log(c)
    }
  )
}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
