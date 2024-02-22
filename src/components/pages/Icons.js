import { Box } from '@mui/material'
import { Link } from 'react-router-dom';

import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import backgroundImg from './app-preview-dark.jpg'
import purple from './purple-big-ball.png'
import banner from './coronavirus-5.png'
import insta from './brands/instagram.png'
import facebook from './brands/facebook.png'
import google from './brands/google.png'
import linkdin from './brands/linkedin.png'
import meta from './brands/meta.png'
import whatsapp from './brands/whatsapp.png'
import youtube from './brands/youtube.png'
import twitter from './brands/twitter.png'
import style from './style.webp'
import Cardicon from './Cardicon';
function Icons() {

  return (
    <Box sx={{ paddingBottom: '150px' }}>
      <Grid container paddingTop={'18px'}>
        <Grid xs={12} >
          <Box className="background" sx={{ backgroundColor: '#00000021', position: 'relative', alignItems: 'center', display: 'flex' }}>
            <Grid xs={6} sx={{ padding: '20px' }}>

              <Box sx={{ fontSize: '32px', fontWeight: '700', padding: '50px 0px 0px 20px', color: '#272727' }}>
                Explore a diverse collection of over 14.2 million PNG icons available for free access.
              </Box>
              <Box sx={{ padding: '10px 0px 0px 20px' }}>
                Discover the extensive repository of vector icons for download, encompassing SVG, EPS, PSD, and BASE 64 formats, making it the most comprehensive database available.
              </Box>
              <Box sx={{ padding: '30px 0px 50px 20px' }}>
                <Box sx={{ border: '1px solid #FFBC06', backgroundColor: '#FFBC06', borderRadius: '10px', padding: '10px 15px', display: 'inline-block' }}>
                  See Trending Icon
                </Box>
              </Box>
              <Box sx={{ position: 'absolute', bottom: -8 }} >
                <img src={purple} alt="" srcset="" />
              </Box>
            </Grid>
            <Grid xs={6} sx={{ display: 'flex', alignItems: 'c' }}>

              <img src={backgroundImg} width={'100%'} alt="" srcset="" />

            </Grid>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ padding: '50px 20px 0px 20px' }}>
        <Box sx={{ fontSize: '72px', textTransform: 'uppercase', fontWeight: '800', color: 'rgb(255 188 6 / 47%)', textAlign: 'center' }}>
          Premium
        </Box>
        <Box sx={{ fontSize: '48px', textTransform: 'uppercase', fontWeight: '600', marginTop: '-60px', color: '#272727', textAlign: 'center' }}>
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
        <Box sx={{ fontSize: '72px', textTransform: 'uppercase', fontWeight: '800', color: 'rgb(255 188 6 / 47%)', textAlign: 'center' }}>
          Poular
        </Box>
        <Box sx={{ fontSize: '48px', textTransform: 'uppercase', fontWeight: '600', marginTop: '-60px', color: '#272727', textAlign: 'center' }}>
          Icon Styles
        </Box>
      </Box>
      <Box sx={{ backgroundColor: '#272727', padding: '0px 30px' }}>
        <Grid container sx={{ padding: '70px 0px' }}>
          <Grid sm={4} md={2}>
            <Box class="card">
              <Box class="card-img"></Box>
              <Box class="card-info">
                <p class="text-title">Indian Brands </p>
                <p class="text-body">Iconic Indian brands cover diverse sectors across various industries</p>
              </Box>
            </Box>
          </Grid>
          <Grid sm={4} md={2}>
            <Box class="card">
              <Box class="card-img"></Box>
              <Box class="card-info">
                <p class="text-title">Color Fill </p>
                <p class="text-body">The "color fill" icon applies solid colors in graphic design software.</p>
              </Box>
            </Box>
          </Grid>
          <Grid sm={4} md={2}>
            <Box class="card">
              <Box class="card-img"></Box>
              <Box class="card-info">
                <p class="text-title">Out Line</p>
                <p class="text-body">Outline emphasizes visual design edges.</p>
              </Box>
            </Box>
          </Grid>
          <Grid sm={4} md={2}>
            <Box class="card">
              <Box class="card-img"></Box>
              <Box class="card-info">
                <p class="text-title">Black Fill </p>
                <p class="text-body">
                  Black fill enriches design, adding depth and visual contrast.</p>
              </Box>
            </Box>
          </Grid>
          <Grid sm={4} md={2}>
            <Box class="card">
              <Box class="card-img"></Box>
              <Box class="card-info">
                <p class="text-title">Character </p>
                <p class="text-body">Icon symbolizes identity, individuality, personality.</p>
              </Box>
            </Box>
          </Grid>
          <Grid sm={4} md={2}>
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

      <Box sx={{ padding: '70px 30px' }}>
        <div class="container">
          <div class="card1"><img src={insta} alt="" srcset="" />Instagram</div>
          <div class="card1"><img src={google} alt="" srcset="" />Google</div>
          <div class="card1"><img src={facebook} alt="" srcset="" />Facebook</div>
          <div class="card1"><img src={youtube} alt="" srcset="" />Youtube</div>
          <div class="card1"><img src={whatsapp} alt="" srcset="" />WhatsApp</div>
          <div class="card1"><img src={linkdin} alt="" srcset="" />Linkdin</div>
        </div>
      </Box>

      <Box sx={{ padding: '0px 20px 50px 20px' }}>
        <Box sx={{ fontSize: '72px', textTransform: 'uppercase', fontWeight: '800', color: 'rgb(255 188 6 / 47%)', textAlign: 'center' }}>
          Top Icon
        </Box>
        <Box sx={{ fontSize: '48px', textTransform: 'uppercase', fontWeight: '600', marginTop: '-60px', color: '#272727', textAlign: 'center' }}>
          Search
        </Box>
      </Box>

      <Box>
        <Container maxWidth="lg">
          <Grid container>
            <Grid className='center' xs={2}>
              Education
            </Grid>
            <Grid className='center' xs={2}>
              User
            </Grid>
            <Grid className='center' xs={2}>
              Technology
            </Grid>
            <Grid className='center' xs={2}>
              People
            </Grid>
            <Grid className='center' xs={2}>
              Business
            </Grid>
            <Grid className='center' xs={2}>
              Food
            </Grid>
          </Grid>
          <Grid container justifyContent={'center'} paddingTop={'30px'}>
            <Grid className='center' xs={2}>
              Security
            </Grid>
            <Grid className='center' xs={2}>
              Money
            </Grid>
            <Grid className='center' xs={2}>
              Computer
            </Grid>
            <Grid className='center' xs={2}>
              Marketing
            </Grid>
            <Grid className='center' xs={2}>
              Document
            </Grid>

          </Grid>
          <Grid container paddingTop={'30px'}>
            <Grid className='center' xs={2}>
              Man
            </Grid>
            <Grid className='center' xs={2}>
              Travel
            </Grid>
            <Grid className='center' xs={2}>
              Heart
            </Grid>
            <Grid className='center' xs={2}>
              Message
            </Grid>
            <Grid className='center' xs={2}>
              Building
            </Grid>
            <Grid className='center' xs={2}>
              Time
            </Grid>
          </Grid>
          <Grid container justifyContent={'center'} paddingTop={'30px'}>
            <Grid className='center' xs={2}>
              Arrow
            </Grid>
            <Grid className='center' xs={2}>
              Calendar
            </Grid>
            <Grid className='center' xs={2}>
              Hand
            </Grid>
            <Grid className='center' xs={2}>
              Finance
            </Grid>
            <Grid className='center' xs={2}>
              Home
            </Grid>

          </Grid>
          <Grid container paddingTop={'30px'}>
            <Grid className='center' xs={2}>
              House
            </Grid>
            <Grid className='center' xs={2}>
              Music
            </Grid>
            <Grid className='center' xs={2}>
              Chat
            </Grid>
            <Grid className='center' xs={2}>
              Location
            </Grid>
            <Grid className='center' xs={2}>
              Data
            </Grid>
            <Grid className='center' xs={2}>
              Cloud
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>

  )
}

export default Icons