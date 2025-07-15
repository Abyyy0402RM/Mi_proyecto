import React, { useEffect, useState } from 'react';
import api from '../api/axios';
import { Box, Typography, Card, CardContent } from '@mui/material';

function MiComponente() {
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    try {
      const respuesta = await api.get('api/mimodelo/');
      setDatos(respuesta.data);
    } catch (err) {
      console.error('Error:', err);
      setError('No se pudo cargar la información');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Typography>Cargando...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box sx={{ padding: 2 }}>
      {datos.map((item) => (
        <Card key={item.id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h5">{item.nombre}</Typography>
            <Typography>{item.descripcion}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default MiComponente;