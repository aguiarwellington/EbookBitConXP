import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Divider,
  Stack,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #002f87, #e69c47)',
        color: '#fff',
        py: 6,
        px: 2,
        textAlign: 'center',
        boxShadow: '0 -4px 10px rgba(0,0,0,0.2)',
      }}
    >
      <Stack spacing={2} alignItems="center">
        {/* Nome da empresa */}
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#FFEB3B' }}>
          W&N Cripto Solutions
        </Typography>

        {/* Redes sociais */}
        <Typography variant="body1">Siga-nos nas redes sociais:</Typography>
        <Box>
          <IconButton href="https://instagram.com/nykcasana" target="_blank" sx={{ color: '#FFEB3B' }}>
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton href="#" target="_blank" sx={{ color: '#FFEB3B' }}>
            <YouTubeIcon fontSize="large" />
          </IconButton>
          <IconButton href="#" target="_blank" sx={{ color: '#FFEB3B' }}>
            <TwitterIcon fontSize="large" />
          </IconButton>
          <IconButton href="#" target="_blank" sx={{ color: '#FFEB3B' }}>
            <TelegramIcon fontSize="large" />
          </IconButton>
        </Box>

        {/* Divider */}
        <Divider sx={{ width: '60%', borderColor: 'rgba(255,255,255,0.3)' }} />

        {/* Política, Termos e Bitcoin */}
        <Box>
          <Typography variant="body2">
            <a
              href="#"
              style={{ color: '#FFEB3B', fontWeight: 'bold', marginRight: '15px', textDecoration: 'none' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#ffa500')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#FFEB3B')}
            >
              Política de Privacidade
            </a>
            |
            <a
              href="#"
              style={{ color: '#FFEB3B', fontWeight: 'bold', marginLeft: '15px', textDecoration: 'none' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#ffa500')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#FFEB3B')}
            >
              Termos de Uso
            </a>
          </Typography>

          <Typography
            variant="body2"
            mt={1}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}
          >
            Preferimos Bitcoin <CurrencyBitcoinIcon sx={{ color: '#FFEB3B' }} />
          </Typography>
        </Box>

        {/* Créditos finais */}
        <Typography variant="body2" sx={{ color: '#ccc' }}>
          © 2025 Evento BitCon XP. Todos os direitos reservados.
        </Typography>
        <Typography variant="body2" sx={{ color: '#ccc' }}>
          Desenvolvido by Wellington Carvalho.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
