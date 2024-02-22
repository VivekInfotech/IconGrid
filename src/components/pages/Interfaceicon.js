import React from 'react'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { FaAccusoft,FaAmbulance } from "react-icons/fa";
import backgroundImg from './app-preview-dark.jpg'
import camera from './brands/camerainterface.png'
function Interfaceicon() {
  return (
    <Box>
      <Grid container paddingTop={'46px'}>
        <Grid xs={12} className="backgroundInterface">
          <Box sx={{ backgroundColor: '#00000021', alignItems: 'center', display: 'flex' }}>
            <Grid xs={6} sx={{ display: 'flex', alignItems: 'c' }}>

              <img src={camera} width={'100%'} alt="" srcset="" />

            </Grid>
            <Grid xs={6} sx={{ padding: '20px' }}>

              <Box sx={{ fontSize: '32px', fontWeight: '700', padding: '50px 0px 0px 20px', color: '#fff' }}>
                Utilize icon fonts in projects of any scale, providing a versatile solution for both large and small endeavors.
              </Box>
              <Box sx={{ padding: '10px 0px 0px 20px', color: '#fff' }}>
                Access a vast collection of over 24,000 SVG and web font-optimized vector-based icons designed for web, iOS, and Android applications.
              </Box>
              <Box sx={{ padding: '30px 0px 50px 20px' }}>
                <Box sx={{ border: '1px solid #FFBC06', backgroundColor: '#FFBC06', borderRadius: '10px', padding: '10px 15px', display: 'inline-block' }}>
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
            <Box sx={{ fontSize: '72px', textTransform: 'uppercase', fontWeight: '800', color: 'rgb(255 188 6 / 47%)', textAlign: 'center' }}>
            latest in-demand 
            </Box>
            <Box sx={{ fontSize: '48px', textTransform: 'uppercase', fontWeight: '600', marginTop: '-60px', color: '#272727', textAlign: 'center' }}>
            icons
            </Box>
          </Box>
          <Grid xs={12} container >
            
            <Grid xs={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle" >
                  <FaAccusoft fontSize={'60px'}/>
                </div>

              </div>

            </Grid>
            <Grid xs={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">
                <FaAmbulance fontSize={'60px'} />
                </div>

              </div>

            </Grid>
            <Grid xs={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={2}>
              <div class="card3 wallet">
                <div class="overlay"></div>
                <div class="circle">

                </div>

              </div>

            </Grid>
            <Grid xs={12}>
            <Box className="center" sx={{fontSize:"18px" ,padding:'10px'}}>
              <Box sx={{border:'1px solid #FFBC06' , padding:'7px 20px' ,borderRadius:'5px',backgroundColor:'#FFBC06'}}>See All Icon</Box>
            </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </Box>
  )
}

export default Interfaceicon