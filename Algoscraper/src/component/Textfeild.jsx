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
   multiline = false,
  rows = 3,
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
       multiline={multiline}
      rows={multiline ? rows : undefined}
      {...props}
      InputProps={{
        ...InputProps,
        ...(isSearch && {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "black" ,fontSize:'16px' , margin:'4px 0px 0px 0px'}} />
            </InputAdornment>
          ),
        }),
      }}
       sx={(theme) => ({
        width: finalWidth,
        margin: margin,
        transition: "all 0.3s ease",

        "& .MuiInputBase-root": {
            height:finalHeight,
          alignItems:'center',
          fontFamily: theme.typography.fontFamily,
          transition: "all 0.3s ease",
          backgroundColor: theme.palette.background.paper,
        },

        "& .MuiInputBase-input": {
          fontSize: fontSize,
          fontFamily: theme.typography.fontFamily,
          padding: multiline ? "10px" : "8px",

          ...(isLink && {
            color: theme.palette.primary.main,
            textDecoration: "underline",
            cursor: "pointer",
          }),
        },
"& .MuiInputBase-inputMultiline": {
 height: "100% !important",
  boxSizing: "border-box",
  overflow: "auto",
  padding: "6px 8px",
},
        "& .MuiInputBase-input::placeholder": {
          fontSize: placeholderSize,
          fontFamily: theme.typography.fontFamily,
        },

        "& .MuiInputLabel-root": {
          fontSize: fontSize,
        },
      })}
    />
  );
};
export default CustomTextField;