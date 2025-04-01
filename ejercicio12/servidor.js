
app.get('/api/escuelas/:direccion', (req, res) => {
    const { direccion } = req.params;
    const escuelas = [
      { nombre: "Escuela Benito Juárez", direccion: "Av. Principal 123, Ciudad de México" },
      { nombre: "Escuela Superman", direccion: "Krypton323" }
    ];
  
    const direc = escuelas.find(e => e.direccion.toLowerCase() === direccion.toLowerCase());
  
    if (direc) {
      res.status(200).json(direc);
    } else {
      res.status(404).json({ mensaje: "direccion no encontrada" });
    }
  });