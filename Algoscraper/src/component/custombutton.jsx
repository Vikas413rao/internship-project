import { Button } from "@mui/material";

const Custombutton = ({
  label,
  onClick,
  width = "120px",
  height = "40px",
  fontSize = "12px",
  expandedWidth = "140px",
  expandedHeight = "44px",
  isExpanded = false,
  margin = "5px 0px 0px 0px",
  variant = "contained",
  sx, 
  ...props
}) => {
  const finalWidth = isExpanded ? expandedWidth : width;
  const finalHeight = isExpanded ? expandedHeight : height;

  return (
    <Button
      onClick={onClick}
      variant={variant}
      {...props}
      sx={(theme) => ({
        width: finalWidth,
        height: finalHeight,
        fontSize: fontSize,
        fontFamily: theme.typography.fontFamily,
         fontWeight: 500,
        margin: margin,
        textTransform: "none",
        transition: "all 0.3s ease",
       color: "whitesmoke",
        "& .MuiButton-label": {
    fontWeight: 500,
  },
        ...(typeof sx === "function" ? sx(theme) : sx),
      })}
    >
      {label}
    </Button>
  );
};

export default Custombutton;