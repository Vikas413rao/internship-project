import CodeIcon from '@mui/icons-material/Code';
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Box, Card, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const IconBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isactive",
})(({ theme, isactive }) => ({
  width: 120,
  height: 70,
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
  shouldForwardProp: (prop) => prop !== "isactive",
})(({ isactive }) => ({
  position: "absolute",
  left: 22,
  width: 34,
  height: 34,
  borderRadius: "10px",
  backgroundColor: isactive ? "#E6F3FF" : "rgba(255,255,255,0.2)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const SmallIconWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isactive",
})(({ isactive }) => ({
  position: "absolute",
  bottom: 12,
  right: 10,
  width: 26,
  height: 26,
  borderRadius: "8px",
  backgroundColor: isactive ? "#E6F3FF" : "rgba(255,255,255,0.2)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
export default function ScriptCard({ title, description }) {
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const navigate=useNavigate();
  const isActive = hovered || pinned;

  return (
    <Card
    onClick={()=> navigate('/futurescript')}
      onMouseEnter={() => !pinned && setHovered(true)}
      onMouseLeave={() => !pinned && setHovered(false)}
      sx={{
        p:2,
        width:230,
        height:170,
        borderRadius: 3,
        boxShadow: isActive
          ? "0px 8px 20px rgba(47,139,204,0.25)"
          : "0px 2px 6px rgba(0,0,0,0.1)",
        transition: "0.25s",
        cursor: "pointer"
      }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" >
        <Box display="flex" gap={1} alignItems="center">
         <IconBox isactive={isActive ? 1 : 0}
          ><MainIconWrapper isactive={isActive ? 1 : 0}>
            <DescriptionOutlinedIcon
              sx={{ color: isActive ? "#2F8BCC" : "#ffffff" }}
            /></MainIconWrapper>

            <SmallIconWrapper isactive={isActive ? 1 : 0}>
                <CodeIcon sx={{ fontSize:20,color: isActive ? "#2F8BCC" : "#ffffff" }}></CodeIcon>
            </SmallIconWrapper>
          </IconBox>

          <Typography
           
            sx={(theme)=>({
              fontFamily:theme.typography.fontFamily,
              fontWeight: 600,
              color: "#2F8BCC",
              textDecoration: isActive ? "underline" : "none",
              textUnderlineOffset: "4px",
              fontSize:14
            })}
          >
            {title}
            
          </Typography>
        </Box>

        {isActive && (
          <IconButton size="small" onClick={(e) =>{e.stopPropagation(); setPinned(!pinned)}} sx={{color:'black'}}>
            {pinned ? <StarIcon sx={{color:'#2F8BCC'}}/> : <StarBorderIcon sx={{ color: 'text.primary' }} />}
          </IconButton>
        )}
      </Box>

      <Typography sx={(theme)=>({  fontFamily:theme.typography.fontFamily,mt:1.5,fontSize:11, color: 'text.secondary' })}>
        {description}
      </Typography>
    </Card>
    
  );
}
 