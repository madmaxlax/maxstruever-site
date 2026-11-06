// Shared styles for Markdown rendered from Trello card descriptions.
export const markdownSx = {
  lineHeight: 1.65,
  overflowWrap: 'anywhere',
  '& p': { mt: 0, mb: 1.5 },
  '& a': { color: 'primary.main' },
  '& ul, & ol': { pl: 3, mb: 1.5 },
  '& img': { maxWidth: '100%' },
  '& code': { bgcolor: 'action.hover', px: 0.75, py: 0.25, borderRadius: 1, fontSize: '0.9em' },
} as const;
