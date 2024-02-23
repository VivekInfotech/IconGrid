import React from 'react'
import { Box } from '@mui/material'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { FaAccusoft,FaAmbulance } from "react-icons/fa";
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
              <Link to="/most-downloads">
              <Box class="card3 wallet">
                <Box class="overlay"></Box>
                <Box class="circle" >
                  <FaAccusoft fontSize={'60px'}/>
                </Box>
              </Box></Link>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <Box class="card3 wallet">
                <Box class="overlay"></Box>
                <Box class="circle">
                <FaAmbulance fontSize={'60px'} />
                </Box>

              </Box>
            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <Box class="card3 wallet">
                <Box class="overlay"></Box>
                <Box class="circle">

                </Box>

              </Box>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <Box class="card3 wallet">
                <Box class="overlay"></Box>
                <Box class="circle">

                </Box>

              </Box>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <Box class="card3 wallet">
                <Box class="overlay"></Box>
                <Box class="circle">

                </Box>

              </Box>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <Box class="card3 wallet">
                <Box class="overlay"></Box>
                <Box class="circle">

                </Box>

              </Box>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <Box class="card3 wallet">
                <Box class="overlay"></Box>
                <Box class="circle">

                </Box>

              </Box>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <Box class="card3 wallet">
                <Box class="overlay"></Box>
                <Box class="circle">

                </Box>

              </Box>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <Box class="card3 wallet">
                <Box class="overlay"></Box>
                <Box class="circle">

                </Box>

              </Box>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <Box class="card3 wallet">
                <Box class="overlay"></Box>
                <Box class="circle">

                </Box>

              </Box>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <Box class="card3 wallet">
                <Box class="overlay"></Box>
                <Box class="circle">

                </Box>

              </Box>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <Box class="card3 wallet">
                <Box class="overlay"></Box>
                <Box class="circle">

                </Box>

              </Box>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <Box class="card3 wallet">
                <Box class="overlay"></Box>
                <Box class="circle">

                </Box>

              </Box>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <Box class="card3 wallet">
                <Box class="overlay"></Box>
                <Box class="circle">

                </Box>

              </Box>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <Box class="card3 wallet">
                <Box class="overlay"></Box>
                <Box class="circle">

                </Box>

              </Box>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <Box class="card3 wallet">
                <Box class="overlay"></Box>
                <Box class="circle">

                </Box>

              </Box>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <Box class="card3 wallet">
                <Box class="overlay"></Box>
                <Box class="circle">

                </Box>

              </Box>

            </Grid>
            <Grid xs={6} sm={4} md={2}>
              <Box class="card3 wallet">
                <Box class="overlay"></Box>
                <Box class="circle">

                </Box>

              </Box>

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

      <Box sx={{ padding: '0px 20px 50px 20px' }}>
        <Box sx={{ fontSize:{xs:'22px',sm:'50px',md:'72px'}, textTransform: 'uppercase', fontWeight: '800', color: 'rgb(255 188 6 / 47%)', textAlign: 'center' }}>
          Top Icon
        </Box>
        <Box sx={{fontSize:{xs:'22px',sm:'50px',md:'72px'}, marginTop:{ xs:'-23px',sm:'-48px',md:'-65px'}, textTransform: 'uppercase', fontWeight: '600', color: '#272727', textAlign: 'center' }}>
          Search
        </Box>
      </Box>

      <Box>
        <Container maxWidth="lg">
          <Grid container>
            <Grid className='center'padding={'20px 10px'} lg={2} md={4} xs={6}>
              Education
            </Grid>
            <Grid className='center'padding={'20px 10px'} lg={2} md={4} xs={6}>
              User
            </Grid>
            <Grid className='center'padding={'20px 10px'} lg={2} md={4} xs={6}>
              Technology
            </Grid>
            <Grid className='center'padding={'20px 10px'} lg={2} md={4} xs={6}>
              People
            </Grid>
            <Grid className='center'padding={'20px 10px'} lg={2} md={4} xs={6}>
              Business
            </Grid>
            <Grid className='center'padding={'20px 10px'} lg={2} md={4} xs={6}>
              Food
            </Grid>
          
          
            <Grid className='center'padding={'20px 10px'} lg={2} md={4} xs={6}>
              Security
            </Grid>
            <Grid className='center'padding={'20px 10px'} lg={2} md={4} xs={6}>
              Security
            </Grid>
            <Grid className='center'padding={'20px 10px'} lg={2} md={4} xs={6}>
              Money
            </Grid>
            <Grid className='center'padding={'20px 10px'} lg={2} md={4} xs={6}>
              Computer
            </Grid>
            <Grid className='center'padding={'20px 10px'} lg={2} md={4} xs={6}>
              Marketing
            </Grid>
            <Grid className='center'padding={'20px 10px'} lg={2} md={4} xs={6}>
              Document
            </Grid>

          
          
            <Grid className='center'padding={'20px 10px'} lg={2} md={4} xs={6}>
              Man
            </Grid>
            <Grid className='center'padding={'20px 10px'} lg={2} md={4} xs={6}>
              Travel
            </Grid>
            <Grid className='center'padding={'20px 10px'} lg={2} md={4} xs={6}>
              Heart
            </Grid>
            <Grid className='center'padding={'20px 10px'} lg={2} md={4} xs={6}>
              Message
            </Grid>
            <Grid className='center'padding={'20px 10px'} lg={2} md={4} xs={6}>
              Building
            </Grid>
            <Grid className='center'padding={'20px 10px'} lg={2} md={4} xs={6}>
              Time
            </Grid>
          
          
            <Grid className='center'padding={'20px 10px'} lg={2} md={4} xs={6}>
              Arrow
            </Grid>
            <Grid className='center'padding={'20px 10px'} lg={2} md={4} xs={6}>
              Arrow
            </Grid>
            <Grid className='center'padding={'20px 10px'} lg={2} md={4} xs={6}>
              Calendar
            </Grid>
            <Grid className='center'padding={'20px 10px'} lg={2} md={4} xs={6}>
              Hand
            </Grid>
            <Grid className='center'padding={'20px 10px'} lg={2} md={4} xs={6}>
              Finance
            </Grid>
            <Grid className='center'padding={'20px 10px'} lg={2} md={4} xs={6}>
              Home
            </Grid>

         
          
            <Grid className='center'padding={'20px 10px'} lg={2} md={4} xs={6}>
              House
            </Grid>
            <Grid className='center'padding={'20px 10px'} lg={2} md={4} xs={6}>
              Music
            </Grid>
            <Grid className='center'padding={'20px 10px'} lg={2} md={4} xs={6}>
              Chat
            </Grid>
            <Grid className='center'padding={'20px 10px'} lg={2} md={4} xs={6}>
              Location
            </Grid>
            <Grid className='center'padding={'20px 10px'} lg={2} md={4} xs={6}>
              Data
            </Grid>
            <Grid className='center'padding={'20px 10px'} lg={2} md={4} xs={6}>
              Cloud
            </Grid>
          </Grid>
        </Container>
      </Box>

    </Box>
  )
}

export default Interfaceicon