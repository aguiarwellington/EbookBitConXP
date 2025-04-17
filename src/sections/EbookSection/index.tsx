import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import emailjs from '@emailjs/browser';

const EbookSection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send(
      'service_z4ihs1v', // service ID
      'template_en9asih', // template ID 
      {
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
      },
      '5Oz-hq6HO8pd-KB_q' // public key
    )
    .then(() => {
      setSubmitted(true);
    })
    .catch((error) => {
      console.error('Erro ao enviar e-mail:', error);
    });
  };

  return (
    <Box
      id="Ebooks"
      sx={{
        minHeight: '100vh',
        px: 2,
        background: 'linear-gradient(to right, #e69c47, #002f87)',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        py: 6,
      }}
    >
      {!submitted && (
        <Typography
          variant={isSmallScreen ? 'h5' : 'h4'}
          fontWeight="bold"
          gutterBottom
          sx={{ px: 2 }}
        >
          Cadastre-se para receber dois eBooks gratuitos
        </Typography>
      )}

      {!submitted && (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: '100%',
            maxWidth: 600,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            mt: 4,
          }}
        >
          <TextField
            label="Nome *"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            InputProps={{
              sx: {
                borderRadius: '12px',
                backgroundColor: 'transparent',
                color: '#fff',
              },
            }}
            InputLabelProps={{ sx: { color: '#fff' } }}
          />
          <TextField
            label="Email *"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            type="email"
            variant="outlined"
            InputProps={{
              sx: {
                borderRadius: '12px',
                backgroundColor: 'transparent',
                color: '#fff',
              },
            }}
            InputLabelProps={{ sx: { color: '#fff' } }}
          />
          <TextField
            label="Telefone *"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            InputProps={{
              sx: {
                borderRadius: '12px',
                backgroundColor: 'transparent',
                color: '#fff',
              },
            }}
            InputLabelProps={{ sx: { color: '#fff' } }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: '#00c851',
              color: '#fff',
              fontWeight: 'bold',
              py: 1.5,
              fontSize: '1rem',
              borderRadius: '12px',
              '&:hover': {
                backgroundColor: '#00a63f',
              },
            }}
          >
            ENVIAR
          </Button>
        </Box>
      )}

      {submitted && (
        <Box mt={6} width="100%" maxWidth={isSmallScreen ? '95%' : '700px'}>
          <Alert
            severity="success"
            sx={{
              mb: 4,
              backgroundColor: '#2e7d32',
              color: '#fff',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: isSmallScreen ? '0.95rem' : '1rem',
              borderRadius: 2,
              px: 3,
              py: 2,
            }}
          >
            Obrigado! Clique abaixo para baixar seus eBooks 👇
          </Alert>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'center',
              alignItems: 'center',
              gap: 4,
              flexWrap: 'wrap',
            }}
          >
            {/* eBook 1 */}
            <Box
              sx={{
                borderRadius: 3,
                boxShadow: 4,
                overflow: 'hidden',
                width: 280,
                backgroundColor: '#1a1a1a',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  height: 400,
                  backgroundImage: 'url("/mapaDoTesouro.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <Box sx={{ p: 2, color: '#fff' }}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  eBook 1 - Mapa do Tesouro Digital
                </Typography>
                <Typography variant="body2" mb={2}>
                  Aprenda os conceitos básicos do Bitcoin e como ele funciona.
                </Typography>
                <Button
                  fullWidth
                  variant="contained"
                  href="https://drive.google.com/uc?export=download&id=1nbpW9L0VjcYFEDlNniK47ENaGaTPFe25"
                  target="_blank"
                  sx={{
                    backgroundColor: '#00C851',
                    fontWeight: 'bold',
                    '&:hover': { backgroundColor: '#00b44a' },
                  }}
                >
                  Baixar eBook 1
                </Button>
              </Box>
            </Box>

            {/* eBook 2 */}
            <Box
              sx={{
                borderRadius: 3,
                boxShadow: 4,
                overflow: 'hidden',
                width: 280,
                backgroundColor: '#1a1a1a',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  height: 400,
                  backgroundImage: 'url("/AFormuladaAutonomia.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <Box sx={{ p: 2, color: '#fff' }}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  eBook 2 - A Fórmula da Autonomia Financeira
                </Typography>
                <Typography variant="body2" mb={2}>
                  Dicas de segurança, carteiras e como fazer transações.
                </Typography>
                <Button
                  fullWidth
                  variant="contained"
                  href="https://drive.google.com/uc?export=download&id=12Ufc5e2Bq1xa4RX9L_RGcPv747lfpY24"
                  target="_blank"
                  sx={{
                    backgroundColor: '#00C851',
                    fontWeight: 'bold',
                    '&:hover': { backgroundColor: '#00b44a' },
                  }}
                >
                  Baixar eBook 2
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default EbookSection;
