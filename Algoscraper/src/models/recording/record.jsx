import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Box, Card, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Titletext = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "active" && prop !== "titleFontSize",
})(({ theme, active, titleFontSize }) => ({
  fontWeight: 600,
  color: theme.palette.primary.main,
  fontSize: titleFontSize,  
  position: 'relative',
  display: 'inline-block',
  whiteSpace: "nowrap",
  minWidth: "110px",
  flexShrink: 0,

  "&::after": {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: -3,
    width: active ? "100%" : "0%",
    height: '2px',
    backgroundColor: theme.palette.primary.main,
  }
}));
const IconBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isactive" && prop !== "isExpanded",
})(({ isactive, isExpanded }) => ({
  width: isExpanded ? 90 : 80,
  height: isExpanded ? 80 : 70,
  borderBottomRightRadius: "50px",

  backgroundColor: isactive ? "#E6F3FF" : "#2F8BCC",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",

  border: isactive
    ? "3px solid rgba(47, 139, 204, 0.25)"
    : "3px solid rgba(255,255,255,0.15)",

  boxShadow: isactive
    ? "inset 0 4px 8px rgba(47,139,204,0.15), 0 5px 10px rgba(47,139,204,0.15)"
    : "inset 0 4px 8px rgba(255,255,255,0.2), 0 5px 10px rgba(0,0,0,0.1)",
}));

const MainIconWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isactive" && prop !== "isExpanded",
})(({ isactive, isExpanded }) => ({
  position: "absolute",
  left: isExpanded ? 26 : 22,
  width: isExpanded ? 38 : 34,
  height: isExpanded ? 38 : 34,
  borderRadius: "10px",
  backgroundColor: isactive ? "#E6F3FF" : "rgba(255,255,255,0.2)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const SmallIconWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isactive" && prop !== "isExpanded",
})(({ isactive, isExpanded }) => ({
  position: "absolute",
  bottom: isExpanded ? 14 : 12,
  right: isExpanded ? 20 : 18,
  width: isExpanded ? 30 : 26,
  height: isExpanded ? 30 : 26,
  borderRadius: "8px",
  backgroundColor: isactive ? "#E6F3FF" : "rgba(255,255,255,0.2)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
export default function RecordCard({ title, description ,isExpanded}) {
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const navigate = useNavigate();
  const isActive = hovered || pinned;

     const titleFontSize = isExpanded ? 14 : 12;
  const descFontSize = isExpanded ? 11 : 9;
  const iconSize = isExpanded ? 22 : 18;
  return (
    
         <Card
      onClick={() => navigate("/recording")}
      onMouseEnter={() => !pinned && setHovered(true)}
      onMouseLeave={() => !pinned && setHovered(false)}
      sx={{
        p: isExpanded ? 2 : 1.5,

        width: "48%",
        minWidth: isExpanded ? 220 : 160,
        maxWidth: "none",

        height: isExpanded ? 220 : 170,

        borderRadius: 3,
        boxShadow: isActive
          ? "0px 8px 20px rgba(47,139,204,0.25)"
          : "0px 2px 6px rgba(0,0,0,0.1)",

        transition: "all 0.3s ease",
        cursor: "pointer",
        flexGrow: 1
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" >
        <Box display="flex" gap={1} alignItems="center">
         <IconBox isactive={isActive ? 1 : 0} isExpanded={isExpanded ? 1 : 0}
          ><MainIconWrapper isactive={isActive ? 1 : 0} isExpanded={isExpanded ? 1 : 0}>
            <DescriptionOutlinedIcon
              sx={{ color: isActive ? "#2F8BCC" : "#ffffff" }}
            /></MainIconWrapper>
             <SmallIconWrapper isactive={isActive ? 1 : 0} isExpanded={isExpanded ? 1 : 0}>
                <RadioButtonCheckedIcon sx={{ fontSize:22,color: isActive ? "#2F8BCC" : "#ffffff" }}></RadioButtonCheckedIcon>
            </SmallIconWrapper>
          </IconBox>

          <Titletext active={isActive}titleFontSize={titleFontSize}>
            {title}
          </Titletext>
        </Box>

        {isActive && (
          <IconButton size="small" onClick={(e) =>{ e.stopPropagation();setPinned(!pinned)}} sx={{minWidth:0,left:0,color:'black'}}>
            {pinned ? <StarIcon sx={{fontSize:iconSize,color:'#2F8BCC'}} /> : <StarBorderIcon sx={{ fontSize:iconSize,color: 'text.primary' }}/>}
          </IconButton>
        )}
      </Box>

      <Typography sx={(theme)=>({  fontFamily:theme.typography.fontFamily,mt:1.5,fontSize:descFontSize, color: 'text.secondary' })}>
        {description}
      </Typography>
    </Card>
    
  );
}
