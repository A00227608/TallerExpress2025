import http from 'http';

async function ObtenerFact() {
    const respuesta = await fetch("https://catfact.ninja/fact");
    const respuestaJson = await respuesta.json();
    return respuestaJson;
}

const servidor = http.createServer(async (req, res) => {
    console.log("ha llegado una solicitud");
      
  const datos = await ObtenerFact();
      res.setHeader("Access-Control-Allow-Origin", "*"); 
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
      res.writeHead(200, { 'Content-Type': 'Application/json' });
      res.end(JSON.stringify(datos));
  });

    const puerto = 1984;

    servidor.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
    }
);