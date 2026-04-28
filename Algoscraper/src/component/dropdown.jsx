import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
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
        IconComponent={isTable ? KeyboardArrowDownRoundedIcon : undefined}
  {...props}
        sx={(theme) => ({
          height: finalHeight,
          fontSize: fontSize,
          backgroundColor: isTable
      ? theme.palette.grey[200]
      : theme.palette.background.paper,
      borderRadius: isTable ? "4px" : undefined,

          "& .MuiSelect-select": {
      display: "flex",
      alignItems: "center",
      padding: isTable ? "4px 8px" : undefined,
    },
      "& .MuiOutlinedInput-notchedOutline": {
      border: isTable ? "none" : undefined,
    },

    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: isTable ? "none" : undefined,
    },

    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: isTable ? "none" : undefined,
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