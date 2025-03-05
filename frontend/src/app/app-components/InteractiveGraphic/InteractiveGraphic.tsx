'use client'

import { AppContext } from '@/app/AppContext'
import { 
  Fade, 
  IconButton, 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Button, 
  CircularProgress 
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ZoomInIcon from '@mui/icons-material/ZoomIn'
import ZoomOutIcon from '@mui/icons-material/ZoomOut'
import RefreshIcon from '@mui/icons-material/Refresh'
import LayersIcon from '@mui/icons-material/Layers'
import Image from 'next/image'
import { useContext, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import DisasterMap
const DisasterMap = dynamic(() => import('./DisasterMap'), { ssr: false });

interface InteractiveGraphicProps {
  title: string
  buttonUrl: string
}

const InteractiveGraphic = ({ buttonUrl, title }: InteractiveGraphicProps) => {
  const [showImage, setShowImage] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [showControls, setShowControls] = useState(false)
  const context = useContext(AppContext)

  if (!context) {
    throw new Error('AppContext not found')
  }

  const { hasGraphic, setUserType, setHasGraphic } = context
  
  const handleBack = () => {
    setUserType("");
  };
  
  useEffect(() => {
    setHasGraphic(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowControls(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [setHasGraphic]);
  
  return (
    <Card elevation={3} sx={{ height: '100%', borderRadius: 2, overflow: 'hidden' }}>
      <Box sx={{ position: 'relative', height: '100%', width: '100%', overflow: 'hidden' }}>
        {isLoading && (
          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.7)',
            zIndex: 1000
          }}>
            <Box sx={{ textAlign: 'center' }}>
              <CircularProgress color="primary" size={60} thickness={4} />
              <Typography variant="body1" sx={{ mt: 2, color: 'white' }}>
                Loading disaster response map...
              </Typography>
            </Box>
          </Box>
        )}
        
        <Fade in={hasGraphic && !isLoading} timeout={1000}>
          <Box sx={{ height: '100%', width: '100%' }}>
            <DisasterMap height="100%" width="100%" />
          </Box>
        </Fade>
        
        <Box sx={{
          position: 'absolute',
          top: 10,
          left: 10,
          zIndex: 500,
          display: 'flex',
          alignItems: 'center',
          bgcolor: 'rgba(0,0,0,0.8)',
          borderRadius: 2,
          p: 0.5,
          pl: 1,
          pr: 2,
          boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
          cursor: 'pointer',
          '&:hover': {
            bgcolor: 'rgba(0,0,0,0.9)',
          }
        }}
        onClick={handleBack}
        >
          <IconButton
            size="small"
            sx={{ color: 'primary.main', mr: 1 }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="body2" sx={{ color: 'white', fontWeight: 'medium' }}>
            Back to Home
          </Typography>
        </Box>
      </Box>
    </Card>
  )
}

export default InteractiveGraphic
