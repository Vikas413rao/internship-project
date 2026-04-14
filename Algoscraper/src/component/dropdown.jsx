import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const CustomDropdown = ({
  label,
  value,
  onChange,
  options = [],
  width = "100%",
  height = "28px",
  fontSize = "12px",
  isExpanded = false,
  expandedHeight = "50px",
  showPlaceholder = true,
  margin = "0px",
  isTable = false,
  ...props
}) => {
  const finalHeight = isExpanded ? expandedHeight : height;

  return (
    <FormControl fullWidth sx={{ width, margin }}>
      
     
      {!isTable && <InputLabel  sx={(theme) => ({
      fontSize: fontSize,
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.text.primary,
        top: '-6px',
      "&.Mui-focused": {
        color: theme.palette.primary.main,
      },

      "&.MuiInputLabel-shrink": {
        fontSize: "11px",
       
      },
    })}>{label}</InputLabel>}

      <Select
        value={value ?? ""}
        label={!isTable ? label : undefined}
        onChange={onChange}
        displayEmpty
        {...props}
        sx={(theme) => ({
          height: finalHeight,
          fontSize: fontSize,
          backgroundColor: theme.palette.background.paper,

          "& .MuiSelect-select": {
            display: "flex",
            alignItems: "center",
           
          },
        })}
        renderValue={(selected) => {
          if (!selected) {
            return showPlaceholder ? (
              <span style={{ color: "#999" }}>Select</span>
            ) : "";
          }
          return options.find((opt) => opt.value === selected)?.label;
        }}
      >
        {showPlaceholder && (
          <MenuItem value="" disabled>
            Select
          </MenuItem>
        )}

        {options.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomDropdown;