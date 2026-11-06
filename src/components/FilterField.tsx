import Close from '@mui/icons-material/Close';
import Search from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

interface FilterFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export default function FilterField({ value, onChange, placeholder }: FilterFieldProps) {
  return (
    <TextField
      fullWidth
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      slotProps={{
        htmlInput: { 'aria-label': placeholder },
        input: {
          sx: { bgcolor: 'background.paper', borderRadius: 3 },
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
          endAdornment: value && (
            <InputAdornment position="end">
              <IconButton aria-label="Clear filter" onClick={() => onChange('')} edge="end" size="small">
                <Close fontSize="small" />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
