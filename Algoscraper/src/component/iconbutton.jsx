import { Button } from "@mui/material";

const CustomIconButton = ({
  children,
  onClick,
  width = 34,
  height = 30,
  expandedWidth = 40,
  expandedHeight = 40,
  isExpanded = false,
  margin = "2px 4px 0px 0px",
  bgColor,
   disableBg = false,
  sx,
  ...props
}) => {
  const finalWidth = isExpanded ? expandedWidth : width;
  const finalHeight = isExpanded ? expandedHeight : height;

  return (
    <Button
      onClick={onClick}
      {...props}
      sx={(theme) => ({
        minWidth: 0,
        width: finalWidth,
        height: finalHeight,
        padding: 0,
        margin: margin,
        position: "relative",
        backgroundColor: disableBg
          ? "transparent"
          : bgColor || theme.palette.background.paper,
           boxShadow: disableBg
          ? "none"
          : "0px 2px 6px rgba(0,0,0,0.1)",

        ...(typeof sx === "function" ? sx(theme) : sx),
      })}
    >
      {children}
    </Button>
  );
};

export default CustomIconButton;