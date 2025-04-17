import { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Button, Box, IconButton, Drawer, List,
  ListItem, ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

type MenuItem =
  | { label: string; external: true; url: string }
  | { label: string; external: false; path: string };

const menuItems: MenuItem[] = [
  { label: 'BITCONXP', external: true, url: 'https://bitconxp.com' },
  { label: 'EBOOKS', external: false, path: 'Ebooks' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const position = element.offsetTop - offset;

      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });

      setActiveSection(id);
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      menuItems.forEach((item) => {
        if (!item.external) {
          const element = document.getElementById(item.path);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              setActiveSection(item.path);
            }
          }
        }
      });
    };

    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#1a1a1a', color: '#fff', zIndex: 1000, height: '80px' }}>
      <Toolbar sx={{ justifyContent: 'space-between', paddingX: 2 }}>

        {/* LOGO */}
        <a href="https://bitconxp.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <Box display="flex" alignItems="center" sx={{ cursor: 'pointer' }}>
            <img
              src="/logo1.png"
              alt="Logo"
              style={{ width: '250px', height: 'auto' }}
            />
          </Box>
        </a>

        {/* MENU DESKTOP */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          {menuItems.map((item) =>
            item.external ? (
              <Button
                key={item.label}
                href={item.url}
                target="_blank"
                sx={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  mx: 1,
                  padding: '5px 10px',
                  '&:hover': { color: '#ffa500' },
                }}
              >
                {item.label}
              </Button>
            ) : (
              <Button
                key={item.label}
                onClick={() => handleScroll(item.path)}
                sx={{
                  color: activeSection === item.path ? '#ffa500' : '#fff',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  mx: 1,
                  padding: '5px 10px',
                  '&:hover': { color: '#ffa500' },
                }}
              >
                {item.label}
              </Button>
            )
          )}
        </Box>

        {/* PARTICIPAR DESKTOP */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#E28D1C',
              color: '#fff',
              borderRadius: '20px',
              fontWeight: 'bold',
              fontSize: '15px',
              px: 3,
              '&:hover': { backgroundColor: '#d47a0b' },
            }}
            href="https://bitconxp.com"
            target="_blank"
          >
            PARTICIPAR
          </Button>
        </Box>

        {/* MENU MOBILE */}
        <IconButton sx={{ display: { xs: 'block', md: 'none' }, color: '#fff' }} onClick={() => setMobileOpen(true)}>
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          sx={{ '& .MuiDrawer-paper': { backgroundColor: '#1a1a1a', color: '#fff', width: '250px' } }}
        >
          <List sx={{ textAlign: 'center', padding: '20px' }}>
            {menuItems.map((item) =>
              item.external ? (
                <ListItem key={item.label} component="a" href={item.url} target="_blank" sx={{ cursor: 'pointer' }}>
                  <ListItemText
                    primary={item.label}
                    sx={{
                      textAlign: 'center',
                      color: '#fff',
                      fontWeight: 'bold',
                    }}
                  />
                </ListItem>
              ) : (
                <ListItem key={item.label} onClick={() => handleScroll(item.path)} sx={{ cursor: 'pointer' }}>
                  <ListItemText
                    primary={item.label}
                    sx={{
                      textAlign: 'center',
                      color: activeSection === item.path ? '#ffa500' : '#fff',
                      fontWeight: 'bold',
                    }}
                  />
                </ListItem>
              )
            )}

            {/* PARTICIPAR MOBILE */}
            <ListItem sx={{ justifyContent: 'center', marginTop: '15px' }}>
              <Button
                variant="contained"
                href="https://bitconxp.com"
                target="_blank"
                sx={{
                  backgroundColor: '#E28D1C',
                  color: '#fff',
                  borderRadius: '20px',
                  width: '100%',
                  fontWeight: 'bold',
                  '&:hover': { backgroundColor: '#d47a0b' },
                }}
              >
                PARTICIPAR
              </Button>
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
