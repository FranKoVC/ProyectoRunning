// server.js
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Configura CORS para aceptar peticiones desde GitHub Pages y localhost
app.use(cors({
  origin: [
    'https://frankovc.github.io', // Tu frontend en GitHub Pages
    'http://localhost:5173'       // Para desarrollo local
  ],
  credentials: true
}));

// Ruta de prueba
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend conectado correctamente!' });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});