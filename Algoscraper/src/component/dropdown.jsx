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
  margin = "0px",
  isTable = false,
  ...props
}) => {

  const finalHeight = isExpanded ? expandedHeight : height;

  return (
    <FormControl fullWidth sx={{ width, margin }}>
      {!isTable &&(
      <InputLabel
        sx={{
          fontSize: fontSize,
          top: value ? 0 : "50%",
            transform: value
              ? "translate(14px, -9px) scale(0.75)"
              : "translate(14px, -50%) scale(1)",
          ml:2,
        }}
      >
        {label}
      </InputLabel>
      )}
      <Select
        value={value ?? ""}
        label={label}
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
            padding: isTable ? "2px 6px" : "8px", 
          },
        })}
          renderValue={(selected) => {
    if (!selected) {
      return <span style={{ color: "#999" }}>Select</span>;
    }
    return options.find((opt) => opt.value === selected)?.label;
  }}
      >
          <MenuItem value="" disabled>
          Select
        </MenuItem>
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