/**
 * Generate a front-matter object from all markdowns,
 * and cache them into an indexes array.
 *
 * @author Nawaf Khalifah
 * @contibuter Abdulaziz Qannam
 */
const parseMarkdown = require('front-matter-markdown/lib')
const path = require("path")
const {readdirSync, readFileSync, writeFile} = require('fs')

// Paths
const DESTINATION_DIRECTORY = path.resolve(__dirname, '../site/content/docs/1.0')
const DESTINATION_EXTENSION = '.md'

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

const files = findFiles(DESTINATION_DIRECTORY)
let matters = [];

for (const file in files) {
  const currentFile = files[file].fp
  const fileContent = readFileSync(currentFile)

  if (fileContent.length) {
    const stringify = fileContent.toString()
    let frontMatter = parseMarkdown(stringify, null, 1)
    frontMatter.id = files[file].name
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
