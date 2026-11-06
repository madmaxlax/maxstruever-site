// Dark gradient over a city photo, with a smaller file on phones.
export const heroBackground = (name: string, overlay = 'rgba(8, 12, 24, 0.45) 0%, rgba(8, 12, 24, 0.85) 100%') => ({
  backgroundImage: {
    xs: `linear-gradient(180deg, ${overlay}), url(/img/${name}-sm.webp)`,
    md: `linear-gradient(180deg, ${overlay}), url(/img/${name}.webp)`,
  },
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});
