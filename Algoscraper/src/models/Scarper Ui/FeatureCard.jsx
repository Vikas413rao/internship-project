import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import { Box, Card, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function FeatureCard({ title, description}) {
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const navigate = useNavigate();
  const isActive = hovered || pinned;
  
  return (
   
    <Card
    onClick={() => navigate("/scraperui")}
      onMouseEnter={() => !pinned && setHovered(true)}
      onMouseLeave={() => !pinned && setHovered(false)}
      
      sx={{
        p:2,
        width:220,
        height:170,
        textDecoration:'none',
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
              width: 80,overflow:'overlay',height: 70,borderBottomRightRadius:'50px',bgcolor: isActive ? "#E6F3FF" : "#2F8BCC",display: "flex",alignItems: "center",justifyContent: "center",position:'relative'
            }}
          >
            <DescriptionOutlinedIcon
              sx={{ left:30,color: isActive ? "#2F8BCC" : "#ffffff" }}
            />
            <Box sx={{position:'absolute',bottom:16,right:25,width:16,height:16,borderRadius:"50px",display:'flex',alignItems:'center',justifyContent:'center'}}>
                <SyncAltIcon sx={{ fontSize:22,color: isActive ? "#2F8BCC" : "#ffffff" }}></SyncAltIcon>
            </Box>
            
          </Box>
            
          <Typography
           
            sx={{
              fontWeight: 600,
              color: "#2F8BCC",
              textDecoration: isActive ? "underline" : "none",
              textUnderlineOffset: "4px"
            }}
          >
            {title}
            
          </Typography>
          
        </Box>

        {isActive && (
          <IconButton size="small" onClick={(e) => {e.stopPropagation(); setPinned(!pinned)}}>
            {pinned ? <StarIcon sx={{color:'#2F8BCC'}}/> : <StarBorderIcon />}
          </IconButton>
        )}
      </Box>

      <Typography sx={{  mt:1.5,fontSize:10, color: "#555" }}>
        
        {description}
       
      </Typography>
    </Card>
 
  );
}
