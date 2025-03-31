import express from 'express';

const app = express();
const puerto = 1984;

app.use(express.static('archivos'));

function getEscuelas(req, res) {
  const escuelas = [
    {
      "nombre": "Escuela Benito Juárez",
      "direccion": "Av. Principal 123, Ciudad de México",
    },
    {
      "nombre": "Escuela Superman",
      "direccion": "Krypton 323",
    }
  ];
  res.status(200).json(escuelas);
}

function getDonantes(req, res) {
  const donantes = [
    {
      "nombre": "Jose Luis Gamez",
      "donacion": "bicicletas",
    },
    {
      "nombre": "clark kent",
      "donacion": "libros",
    }
  ];
  res.status(200).json(donantes);
}

function R404(req, res) {
  res.status(404).send('Aqui no esta el tesoro, busca la x en el mapa');
}

app.get('/api/escuelas', getEscuelas);
app.get('/api/donantes', getDonantes);
app.use(R404);

app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
