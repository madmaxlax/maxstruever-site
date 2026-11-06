import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import PageHero from '../components/PageHero';

const DRIVE_FOLDER =
  'https://drive.google.com/embeddedfolderview?id=0B994MvzpbbuzfjFrVFVkVTc1dmtBMktWSldnMVA0M2R5QjN6dVlGSXB2anVmQkVVTWEyWHc&resourcekey=0-Ufq5iBoLMkvcB-Ct-oQ1IQ#list';

export default function CityRecsPage() {
  return (
    <>
      <title>City Recommendations | Max Struever</title>
      <PageHero
        title="City Recommendations"
        subtitle="Lists of activities and places to stay in different cities, compiled over the years."
      />
      <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 6 } }}>
        <Card>
          <Box
            component="iframe"
            title="City recommendations from Google Drive"
            src={DRIVE_FOLDER}
            sx={{ display: 'block', width: '100%', height: { xs: 640, md: 900 }, border: 0, bgcolor: '#fff' }}
          />
        </Card>
      </Container>
    </>
  );
}
