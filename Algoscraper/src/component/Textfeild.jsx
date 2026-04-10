import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";

const CustomTextField = ({
  label,
  value,
  onChange,
  width = "100%",
  height = "40px",
  fontSize = "14px",
  placeholderSize = "14px",
  expandedWidth = "100%",
  expandedHeight = "50px",
  isExpanded = false,
  margin = "0px",
  isSearch = false,
  isLink=false,
  error,
  helperText,
  InputProps,
  ...props
}) => {
  const finalWidth = isExpanded ? expandedWidth : width;
  const finalHeight = isExpanded ? expandedHeight : height;

  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      {...props}
      InputProps={{
        ...InputProps,
        ...(isSearch && {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "black" }} />
            </InputAdornment>
          ),
        }),
      }}
      sx={(theme) => ({
        width: finalWidth,
        margin: margin,
        transition: "all 0.3s ease",
        "& .MuiInputBase-root": {
          height: finalHeight,
          fontFamily: theme.typography.fontFamily,
          transition: "all 0.3s ease",
        },
        "& .MuiInputBase-input": {
          fontSize: fontSize,
          fontFamily: theme.typography.fontFamily,
          padding: "8px",
          ...(isLink && {
            color: theme.palette.primary.main,
            textDecoration: "underline",
            cursor: "pointer",
          }),
        },
       
        "& .MuiInputBase-input::placeholder": {
          fontSize: placeholderSize,
          fontFamily: theme.typography.fontFamily,
          opacity: 1,
        },
        "& .MuiInputLabel-root": {
          fontSize: fontSize,
        },
      })}
    />
  );
};

export default CustomTextField;