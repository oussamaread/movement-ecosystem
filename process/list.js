const fs = require('fs');
const path = require('path');

// Define the path to the ecosystem.json file
const filePath = path.resolve(__dirname, '../ecosystem.json');

// Read the ecosystem.json file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    try {
        const ecosystem = JSON.parse(data);
        const partners = Object.keys(ecosystem);

        console.log('List of projects:');
        console.log(partners.join('\n'));
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
});
