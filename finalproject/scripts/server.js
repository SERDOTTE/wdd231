const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const data = req.body;
    const filePath = 'submissions.json';

    // Reads existing file or creates new array
    let submissions = [];
    if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath, 'utf8');
        if (fileData) {
            submissions = JSON.parse(fileData);
        }
    }

    submissions.push(data);

    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));
    res.json({ message: 'Dados recebidos e salvos com sucesso!' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});