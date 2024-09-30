const fs = require('fs').promises;

async function readFileAsync() {
    try {
        const data = await fs.readFile('output.txt', 'utf8');
        console.log('File content:', data);
    } catch (err) {
        console.error('Error reading the file', err);
    }
}

readFileAsync();
