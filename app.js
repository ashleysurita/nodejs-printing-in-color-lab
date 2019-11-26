const fs = require('fs')

// fs.writeFileSync('notes.txt', 'My name is Ashley.')
//first argument is the name of file, second argument will overwrite what will be in the file

//
//Challenge: Append a message to notes.txt
//
// 1. Use appendfileSync to append to the file
// 2. Run the script
// 3. Check your work by opening the file and viewing the append text

fs.appendFileSync('notes.txt', 'I\'m from NYC')