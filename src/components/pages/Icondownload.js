import React from 'react'
import { Box } from '@mui/material'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { FaHandPaper } from "react-icons/fa";

import build from './building.png'
function Icondownload() {

  function close() {
    document.getElementsByClassName('hide')[0].style.display = 'none'
    document.getElementsByClassName('slider')[0].style.position = 'fixed'
    document.getElementsByClassName('h-screen')[0].style.filter = 'blur(0px)'

  }

  return (
    <>
      <Box sx={{ display: 'none', position: 'absolute' }} className="hide">
        <Box className="contant" sx={{ paddingTop: "80px" }}>
          <Container maxWidth="xl">
            <Grid Container>
              <Grid xs={12} sx={{ backgroundColor: '#ededed', display: 'flex' }}>
                <Grid xs={6} sx={{}}>
                  <Box sx={{ justifyContent: 'end', fontWeight: '600', display: 'flex',padding:'10px' }}>
                    <Box  sx={{border: '1px solid black',borderRadius:'10px',padding:' 7px 15px'}}>Edit Icon</Box>
                  </Box>
                  <Box sx={{ padding: '90px' }}>
                    <img width={'256px'} height={'256px'} src={build} alt="" srcset="" />
                  </Box>
                </Grid>
                <Grid xs={6} sx={{width:'100%',textAlign:'end',padding:'10px'}}>
                  <><FaHandPaper onClick={close} fontSize={'20px'} cursor={'pointer'} /></>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default Icondownload