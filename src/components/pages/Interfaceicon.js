import React from 'react'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { FaAccusoft,FaAmbulance } from "react-icons/fa";
import backgroundImg from './app-preview-dark.jpg'
import { Link } from 'react-router-dom';

import camera from './brands/camerainterface.png'
function Interfaceicon() {
  return (
    <Box>
      <Grid container paddingTop={'46px'}>
        <Grid xs={12} className="backgroundInterface">
          <Box sx={{flexWrap:{xs:'wrap',md:'nowrap'}, backgroundColor: '#00000021', alignItems: 'center', display: 'flex' }}>
            <Grid md={12}  sx={{ display: 'flex', alignItems: 'center' }}>

              <img src={camera} width={'100%'} alt="" srcset="" />

            </Grid>
            <Grid  md={12}  sx={{ padding: '20px' }}>

              <Box sx={{ fontSize:{xs:'14px',sm:'20px',md:'32px'}, fontWeight: '700', padding:{ md:'50px 0px 0px 20px'}, color: '#fff' }}>
                Utilize icon fonts in projects of any scale, providing a versatile solution for both large and small endeavors.
              </Box>
              <Box sx={{ fontSize:{xs:'8px',sm:'14px',md:'18px'}, padding: {md:'10px 0px 0px 20px'}, color: '#fff' }}>
                Access a vast collection of over 24,000 SVG and web font-optimized vector-based icons designed for web, iOS, and Android applications.
              </Box>
              <Box sx={{ padding: {xs:'9px 0px 50px 0px',md:'30px 0px 50px 20px'} }}>
                <Box sx={{ fontSize:{xs:'10px',md:'16px'},border: '1px solid #FFBC06', backgroundColor: '#FFBC06', borderRadius: '10px', padding: '10px 15px', display: 'inline-block' }}>
                  See Trending Icon
                </Box>
              </Box>

            </Grid>

          </Box>
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Container maxWidth="lg">
          <Box sx={{ padding: '50px 20px 50px 20px' }}>
            <Box sx={{fontSize:{xs:'23px',sm:'50px',md:'72px'}, textTransform: 'uppercase', fontWeight: '800', color: 'rgb(255 188 6 / 47%)', textAlign: 'center' }}>
            latest in-demand 
            </Box>
            <Box sx={{fontSize:{xs:'22px',sm:'50px',md:'72px'}, marginTop:{ xs:'-23px',sm:'-48px',md:'-65px'}, textTransform: 'uppercase', fontWeight: '600', color: '#272727', textAlign: 'center' }}>
            icons
            </Box>
          </Box>
          <Grid xs={12} container >
            
            <Grid xs={6} sm={4} md={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle" >
                  <FaAccusoft fontSize={'60px'}/>
                </div>

              </div>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">
                <FaAmbulance fontSize={'60px'} />
                </div>

              </div>
            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={12}>
            <Box className="center" sx={{fontSize:"18px" ,padding:'10px'}}>
              <Box sx={{border:'1px solid #FFBC06' , padding:'7px 20px' ,borderRadius:'5px',backgroundColor:'#FFBC06'}}>
                <Link to="/most-downloads">See All Icon</Link>
              </Box>
            </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </Box>
  )
}

export default Interfaceicon