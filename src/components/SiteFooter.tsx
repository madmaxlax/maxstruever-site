import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { socialLinks } from '../data/site';

const year = new Date().getFullYear();

export default function SiteFooter() {
  return (
    <Box component="footer" sx={{ borderTop: 1, borderColor: 'divider', py: 4, mt: 8 }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          sx={{ alignItems: 'center', justifyContent: 'space-between', gap: 2 }}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            © 1989–{year} Max Struever. Made with too much coffee.
          </Typography>
          <Stack direction="row" sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <IconButton
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                size="small"
                sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
              >
                <Icon size={18} aria-hidden />
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
