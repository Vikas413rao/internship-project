import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Box, Card, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Titletext = styled(Typography,{shouldForwardProp: (prop) => prop !== "active"})(({theme,active})=>({
  fontWeight:600,
  color:theme.palette.primary.main,
  fontSize:14,
  position:'relative',
  display:'inline-block',

  "&::after":{
    content:'""',
    position:'absolute',
    left:0,
    bottom:-3,
    width: active ? "100%" : "0%",
    height:'2px',
    backgroundColor: theme.palette.primary.main,
    transition:'width 0.2s ease'
 }
}))
export default function RecordCard({ title, description }) {
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const navigate = useNavigate();
  const isActive = hovered || pinned;

  return (
    
    <Card
     onClick={() => navigate("/recording")}
      onMouseEnter={() => !pinned && setHovered(true)}
      onMouseLeave={() => !pinned && setHovered(false)}
      sx={{
        p:2,
        width:220,
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
          <Box
            sx={{
              width: 80,height: 70,borderBottomRightRadius:'50px',bgcolor: isActive ? "#E6F3FF" : "#2F8BCC",display: "flex",alignItems: "center",justifyContent: "center",position:'relative'
            }}
          >
            <DescriptionOutlinedIcon
              sx={{ color: isActive ? "#2F8BCC" : "#ffffff" }}
            />
            <Box sx={{position:'absolute',bottom:16,right:22,width:22,height:22,borderRadius:"50px",display:'flex',alignItems:'center',justifyContent:'center'}}>
                <RadioButtonCheckedIcon sx={{ fontSize:22,color: isActive ? "#2F8BCC" : "#ffffff" }}></RadioButtonCheckedIcon>
            </Box>
          </Box>

          <Titletext active={isActive}>
            {title}
          </Titletext>
        </Box>

        {isActive && (
          <IconButton size="small" onClick={(e) =>{ e.stopPropagation();setPinned(!pinned)}} sx={{minWidth:0,left:10}}>
            {pinned ? <StarIcon sx={{color:'#2F8BCC'}} /> : <StarBorderIcon />}
          </IconButton>
        )}
      </Box>

      <Typography sx={{  mt:1.5,fontSize:10, color: "#555" }}>
        {description}
      </Typography>
    </Card>
    
  );
}
