import { Box } from '@mui/material';
import Navbar from '../../component/navBar';
import EbookSection from '../../sections/EbookSection';
import Footer from '../../sections/Footer';

const LandingPage = () => {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Navbar />
      <EbookSection />
    <Footer />
    </Box>
  );
};

export default LandingPage;
