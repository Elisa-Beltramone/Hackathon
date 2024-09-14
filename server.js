const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const app = express();

// Lee tu clave API del archivo de configuración
const { apiKey } = require('./config');

const apiUrl = `https://opendata.aemet.es/opendata/api/observacion/convencional/todas?api_key=${apiKey}`;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/weather-data', async (req, res) => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const weatherResponse = await fetch(data.datos);
        const weatherData = await weatherResponse.json();
        res.json(weatherData);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
