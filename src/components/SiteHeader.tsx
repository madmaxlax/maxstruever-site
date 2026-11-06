import CloseIcon from '@mui/icons-material/Close';
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LightModeOutlined from '@mui/icons-material/LightModeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import { useColorScheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useLayoutEffect, useRef, useState } from 'react';
import { Link as RouterLink, NavLink, useLocation } from 'react-router';
import { headerSocialLinks, navItems, socialLinks, type NavItem } from '../data/site';

const linkProps = (item: NavItem) =>
  item.external
    ? { component: 'a' as const, href: item.href, target: '_blank', rel: 'noopener noreferrer' }
    : { component: NavLink, to: item.href };

function ThemeToggle() {
  const { mode, systemMode, setMode } = useColorScheme();
  const resolved = mode === 'system' ? systemMode : mode;
  const next = resolved === 'dark' ? 'light' : 'dark';
  return (
    <Tooltip title={`Switch to ${next} mode`}>
      <IconButton aria-label={`Switch to ${next} mode`} onClick={() => setMode(next)} color="inherit">
        {resolved === 'dark' ? <LightModeOutlined fontSize="small" /> : <DarkModeOutlined fontSize="small" />}
      </IconButton>
    </Tooltip>
  );
}

// Priority+ navigation: show as many links as fit, fold the rest into "More".
function usePriorityNav(count: number, enabled: boolean) {
  const navRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(count);

  useLayoutEffect(() => {
    const nav = navRef.current;
    const measure = measureRef.current;
    if (!nav || !measure) return;

    const recalc = () => {
      const widths = Array.from(measure.children, (el) => Math.ceil(el.getBoundingClientRect().width));
      const moreWidth = widths.pop() ?? 0;
      const available = nav.getBoundingClientRect().width;
      const total = widths.reduce((a, b) => a + b, 0);
      if (total <= available) return setVisible(widths.length);
      let used = moreWidth;
      let fit = 0;
      while (fit < widths.length && used + widths[fit] <= available) used += widths[fit++];
      setVisible(fit);
    };

    recalc();
    // Watching the hidden copy catches label width changes, e.g. when the web font swaps in
    const observer = new ResizeObserver(recalc);
    observer.observe(nav);
    observer.observe(measure);
    return () => observer.disconnect();
  }, [enabled]);

  return { navRef, measureRef, visible };
}

const navButtonSx = {
  color: 'text.secondary',
  px: 1.5,
  whiteSpace: 'nowrap',
  flexShrink: 0,
  '&:hover': { color: 'text.primary', bgcolor: 'action.hover' },
  '&.active': { color: 'text.primary', bgcolor: 'action.selected' },
} as const;

export default function SiteHeader() {
  const compact = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [moreAnchor, setMoreAnchor] = useState<HTMLElement | null>(null);
  const { navRef, measureRef, visible } = usePriorityNav(navItems.length, !compact);
  const { pathname } = useLocation();

  // Drop stale open state when the layout switches, so menus don't reappear later
  const layoutKey = `${compact}-${visible}`;
  const [seenLayout, setSeenLayout] = useState(layoutKey);
  if (layoutKey !== seenLayout) {
    setSeenLayout(layoutKey);
    setDrawerOpen(false);
    setMoreAnchor(null);
  }

  const shown = navItems.slice(0, visible);
  const overflow = navItems.slice(visible);
  const overflowActive = overflow.some((item) => item.href === pathname);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="inherit"
      sx={(theme) => ({
        bgcolor: `rgba(${theme.vars!.palette.background.defaultChannel} / 0.8)`,
        backdropFilter: 'saturate(180%) blur(12px)',
        borderBottom: 1,
        borderColor: 'divider',
      })}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 1, minHeight: { xs: 60 } }}>
          <Button
            component={RouterLink}
            to="/"
            color="inherit"
            sx={{ fontFamily: 'h1.fontFamily', fontSize: '1.2rem', fontWeight: 600, px: 1, flexShrink: 0 }}
          >
            Max Struever
          </Button>

          {compact ? (
            <Box sx={{ flex: 1 }} />
          ) : (
            <Box
              ref={navRef}
              component="nav"
              aria-label="Main"
              sx={{
                flex: 1,
                minWidth: 0,
                display: 'flex',
                justifyContent: 'flex-end',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Hidden copy of every link, used only to measure widths */}
              <Box
                ref={measureRef}
                aria-hidden
                sx={{
                  position: 'absolute',
                  visibility: 'hidden',
                  pointerEvents: 'none',
                  display: 'flex',
                  top: 0,
                  left: 0,
                }}
              >
                {navItems.map((item) => (
                  <Button key={item.href} sx={navButtonSx} tabIndex={-1}>
                    {item.label}
                  </Button>
                ))}
                <Button sx={navButtonSx} endIcon={<ExpandMore />} tabIndex={-1}>
                  More
                </Button>
              </Box>

              {shown.map((item) => (
                <Button key={item.href} {...linkProps(item)} sx={navButtonSx}>
                  {item.label}
                </Button>
              ))}
              {overflow.length > 0 && (
                <>
                  <Button
                    sx={navButtonSx}
                    className={overflowActive ? 'active' : undefined}
                    endIcon={<ExpandMore />}
                    id="more-button"
                    aria-haspopup="menu"
                    aria-controls={moreAnchor ? 'more-menu' : undefined}
                    aria-expanded={moreAnchor ? 'true' : undefined}
                    onClick={(e) => setMoreAnchor(e.currentTarget)}
                  >
                    More
                  </Button>
                  <Menu
                    id="more-menu"
                    slotProps={{ list: { 'aria-labelledby': 'more-button' } }}
                    anchorEl={moreAnchor}
                    open={Boolean(moreAnchor)}
                    onClose={() => setMoreAnchor(null)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  >
                    {overflow.map((item) => (
                      <MenuItem
                        key={item.href}
                        {...linkProps(item)}
                        selected={item.href === pathname}
                        onClick={() => setMoreAnchor(null)}
                      >
                        {item.label}
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              )}
            </Box>
          )}

          {!compact && (
            <Stack direction="row" sx={{ display: { xs: 'none', md: 'flex' } }}>
              {headerSocialLinks.map(({ label, href, icon: Icon }) => (
                <Tooltip key={label} title={label}>
                  <IconButton href={href} target="_blank" rel="noopener noreferrer" aria-label={label} color="inherit">
                    <Icon size={18} aria-hidden />
                  </IconButton>
                </Tooltip>
              ))}
            </Stack>
          )}
          <ThemeToggle />
          {compact && (
            <IconButton aria-label="Open menu" onClick={() => setDrawerOpen(true)} color="inherit" edge="end">
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={compact && drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box component="nav" aria-label="Mobile" sx={{ width: 280, pt: 1 }}>
          <Stack direction="row" sx={{ justifyContent: 'flex-end', px: 1 }}>
            <IconButton aria-label="Close menu" onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <List>
            {[{ label: 'Home', href: '/' }, ...navItems].map((item) => (
              <ListItemButton
                key={item.href}
                {...linkProps(item)}
                selected={item.href === pathname}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary={item.label} slotProps={{ primary: { sx: { fontWeight: 600 } } }} />
              </ListItemButton>
            ))}
          </List>
          <Divider />
          <Stack direction="row" sx={{ flexWrap: 'wrap', p: 1.5, gap: 0.5 }}>
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <IconButton key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon size={20} aria-hidden />
              </IconButton>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  );
}
