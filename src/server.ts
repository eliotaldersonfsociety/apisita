import express, { Request, Response } from 'express';

// Crear una instancia de Express
const app = express();

// Middleware para manejar el cuerpo de las solicitudes (por ejemplo, JSON)
app.use(express.json());

// Ruta GET
app.get('/api/greet', (req: Request, res: Response) => {
  res.json({ message: 'Hello, welcome to my API!' });
});

// Ruta POST
app.post('/api/submit', (req: Request, res: Response) => {
  const { name, age } = req.body;
  console.log('Datos recibidos:', { name, age });

  res.json({
    message: 'Datos recibidos correctamente',
    received: { name, age },
  });
});

// Iniciar el servidor en el puerto 3000
const port = 3000;
app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
