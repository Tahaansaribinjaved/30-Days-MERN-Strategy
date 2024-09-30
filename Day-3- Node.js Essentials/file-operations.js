const fs = require('fs');

const content = 'This is the content to be written to the file!';

fs.writeFile('output.txt', content, (err) => {
    if (err) {
        console.error('Error writing to the file', err);
        return;
    }
    console.log('File successfully written!');
});
