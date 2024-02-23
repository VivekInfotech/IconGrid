import { Box } from '@mui/material'
import { Link } from 'react-router-dom';
import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import backgroundImg from './app-preview-dark.jpg'
import purple from './purple-big-ball.png'
import banner from './coronavirus-5.png'
import Cardicon from './Cardicon';
function Icons() {

  return (
    <Box sx={{ paddingBottom: '150px' }}>
      <Grid container paddingTop={'18px'}>
        <Grid xs={12} >
          <Box className="background" sx={{flexDirection:{xs:'column' ,md:'row'},backgroundColor: '#00000021',position:'relative', alignItems: 'center', display: 'flex' }}>
            <Grid md={6} xs={12} sx={{ padding: '20px' ,maxWidth:'100%'}}>

              <Box sx={{ fontSize: {xs:'15px',sm:'28px',md:'27px',lg:'32px'}, fontWeight: '700', padding: {xs:'50px 0px 0px 0px',sm:'50px 0px 0px 20px'}, color: '#272727' }}>
                Explore a diverse collection of over 14.2 million PNG icons available for free access.
              </Box>
              <Box sx={{ fontSize: {xs:'10px',sm:'18px',md:'19px',lg:'21px'},padding: {xs:'10px 0px 0px 0px',sm:'10px 0px 0px 20px' }}}>
                Discover the extensive repository of vector icons for download, encompassing SVG, EPS, PSD, and BASE 64 formats, making it the most comprehensive database available.
              </Box>
              <Box sx={{ padding: {xs :'10px 0px 0px 0px',sm:'10px 0px 0px 20px',lg:'30px 0px 50px 20px'} }}>
                <Box sx={{ fontSize: {xs:'12px',sm:'18px',md:'13px',lg:'21px'}, border: '1px solid #FFBC06', backgroundColor: '#FFBC06', borderRadius: '10px', padding: '10px 15px', display: 'inline-block' }}>
                  See Trending Icon
                </Box>
              </Box>
              <Box sx={{ display:{xs:'none',md:'flex'}, position: 'absolute', bottom: -8 }} >
                <img src={purple} alt="" srcset="" />
              </Box>
            </Grid>
            <Grid md={6} xs={12}  sx={{ display: 'flex', alignItems: 'center' }}>

              <img src={backgroundImg} width={'100%'} alt="" srcset="" />

            </Grid>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ padding: '50px 20px 0px 20px' }}>
        <Box sx={{fontSize:{xs:'23px',sm:'50px',md:'72px'}, textTransform: 'uppercase', fontWeight: '800', color: 'rgb(255 188 6 / 47%)', textAlign: 'center' }}>
          Premium
        </Box>
        <Box sx={{fontSize:{xs:'22px',sm:'50px',md:'72px'}, marginTop:{ xs:'-23px',sm:'-48px',md:'-65px'}, textTransform: 'uppercase', fontWeight: '600', color: '#272727', textAlign: 'center' }}>
          Icon Packs
        </Box>
        <Grid container sx={{ paddingTop: '50px' }}>
          <Grid md={3} sm={6} className='setcontant'>
            <Link to="/pack">
              <Cardicon name="boxshadowyellow" bannerimg={banner} heading={'Business'} description="Business icon set more than 200+"/>
            </Link>
          </Grid>
          <Grid md={3} sm={6} className='setcontant'>
            <Link to="/pack">
              <Cardicon name="boxshadowblue" bannerimg={banner} heading={'Business'} description="Business icon set more than 200+"/>
            </Link>
          </Grid>
          <Grid md={3} sm={6} className='setcontant'>
            <Link to="/pack">
              <Cardicon name="boxshadowyellow" bannerimg={banner} heading={'Business'} description="Business icon set more than 200+"/>
            </Link>
          </Grid>
          <Grid md={3} sm={6} className='setcontant'>
            <Link to="/pack">
              <Cardicon name="boxshadowblue" bannerimg={banner} heading={'Business'} description="Business icon set more than 200+"/>
            </Link>
          </Grid>
          <Grid md={3} sm={6} className='setcontant'>
            <Link to="/pack">
              <Cardicon name="boxshadowyellow" bannerimg={banner} heading={'Business'} description="Business icon set more than 200+"/>
            </Link>
          </Grid>
          <Grid md={3} sm={6} className='setcontant'>
            <Link to="/pack">
              <Cardicon name="boxshadowblue" bannerimg={banner} heading={'Business'} description="Business icon set more than 200+"/>
            </Link>
          </Grid>
          <Grid md={3} sm={6} className='setcontant'>
            <Link to="/pack">
              <Cardicon name="boxshadowyellow" bannerimg={banner} heading={'Business'} description="Business icon set more than 200+"/>
            </Link>
          </Grid>
          <Grid md={3} sm={6} className='setcontant'>
            <Link to="/pack">
              <Cardicon name="boxshadowblue" bannerimg={banner} heading={'Business'} description="Business icon set more than 200+"/>
            </Link>
          </Grid>
          <Grid md={3} sm={6} className='setcontant'>
            <Link to="/pack">
              <Cardicon name="boxshadowyellow" bannerimg={banner} heading={'Business'} description="Business icon set more than 200+"/>
            </Link>
          </Grid>
          <Grid md={3} sm={6} className='setcontant'>
            <Link to="/pack">
              <Cardicon name="boxshadowblue" bannerimg={banner} heading={'Business'} description="Business icon set more than 200+"/>
            </Link>
          </Grid>
          <Grid md={3} sm={6} className='setcontant'>
            <Link to="/pack">
              <Cardicon name="boxshadowyellow" bannerimg={banner} heading={'Business'} description="Business icon set more than 200+"/>
            </Link>
          </Grid>
          <Grid md={3} sm={6} className='setcontant'>
            <Link to="/pack">
              <Cardicon name="boxshadowblue" bannerimg={banner} heading={'Business'} description="Business icon set more than 200+"/>
            </Link>
          </Grid>
          <Grid md={3} sm={6} className='setcontant'>
            <Link to="/pack">
              <Cardicon name="boxshadowyellow" bannerimg={banner} heading={'Business'} description="Business icon set more than 200+"/>
            </Link>
          </Grid>
          <Grid md={3} sm={6} className='setcontant'>
            <Link to="/pack">
              <Cardicon name="boxshadowblue" bannerimg={banner} heading={'Business'} description="Business icon set more than 200+"/>
            </Link>
          </Grid>
          <Grid md={3} sm={6} className='setcontant'>
            <Link to="/pack">
              <Cardicon name="boxshadowyellow" bannerimg={banner} heading={'Business'} description="Business icon set more than 200+"/>
            </Link>
          </Grid>

          
        </Grid>
      </Box>

      <Box sx={{ padding: '50px 20px 50px 20px' }}>
        <Box sx={{ fontSize:{xs:'22px',sm:'50px',md:'72px'}, textTransform: 'uppercase', fontWeight: '800', color: 'rgb(255 188 6 / 47%)', textAlign: 'center' }}>
          Poular
        </Box>
        <Box sx={{ fontSize:{xs:'22px',sm:'50px',md:'72px'}, marginTop:{ xs:'-23px',sm:'-48px',md:'-65px'}, textTransform: 'uppercase', fontWeight: '600', color: '#272727', textAlign: 'center' }}>
          Icon Styles
        </Box>
      </Box>
      <Box sx={{ backgroundColor: '#272727', padding: '0px 30px' }}>
        <Grid container sx={{ padding: '70px 0px', justifyContent:'center' }}>
          <Grid className='center' sm={4} lg={2} padding={'10px 0px'}>
            <Box class="card">
              <Box class="card-img"></Box>
              <Box class="card-info">
                <p class="text-title">Indian Brands </p>
                <p class="text-body">Iconic Indian brands cover diverse sectors across various industries</p>
              </Box>
            </Box>
          </Grid>
          <Grid className='center' sm={4} lg={2} padding={'10px 0px'}>
            <Box class="card">
              <Box class="card-img"></Box>
              <Box class="card-info">
                <p class="text-title">Color Fill </p>
                <p class="text-body">The "color fill" icon applies solid colors in graphic design software.</p>
              </Box>
            </Box>
          </Grid>
          <Grid className='center' sm={4} lg={2} padding={'10px 0px'}>
            <Box class="card">
              <Box class="card-img"></Box>
              <Box class="card-info">
                <p class="text-title">Out Line</p>
                <p class="text-body">Outline emphasizes visual design edges.</p>
              </Box>
            </Box>
          </Grid>
          <Grid className='center' sm={4} lg={2} padding={'10px 0px'}>
            <Box class="card">
              <Box class="card-img"></Box>
              <Box class="card-info">
                <p class="text-title">Black Fill </p>
                <p class="text-body">
                  Black fill enriches design, adding depth and visual contrast.</p>
              </Box>
            </Box>
          </Grid>
          <Grid className='center' sm={4} lg={2} padding={'10px 0px'}>
            <Box class="card">
              <Box class="card-img"></Box>
              <Box class="card-info">
                <p class="text-title">Character </p>
                <p class="text-body">Icon symbolizes identity, individuality, personality.</p>
              </Box>
            </Box>
          </Grid>
          <Grid className='center' sm={4} lg={2}  padding={'10px 0px'}>
            <Box class="card">
              <Box class="card-img"></Box>
              <Box class="card-info">
                <p class="text-title">Show</p>
                <p class="text-body">Product description and details</p>
              </Box>
            </Box>
          </Grid>
        </Grid>
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

export default Icons