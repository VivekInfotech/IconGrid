import React from 'react'
import { Box } from '@mui/material'
import house from './house.png'
import Grid from '@mui/material/Grid';

function Topprops(props) {
    function opens() {
        document.getElementsByClassName('hide')[0].style.display = 'block'
        // document.getElementsByClassName('hide')[0].style.position = 'fixed'
        // document.getElementsByClassName('hide')[0].style.filter = 'blur(0px)'
        // document.getElementsByCl assName('h-screen')[0].style.filter = 'blur(1px)'
    }
    return (
        <Box className='iconss' >
            <Box onClick={opens}>
                <Box sx={{ display: 'flex', justifyContent: 'center', padding: '30px' }}>
                    <Grid sx={{ display: 'flex', width: '100px', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={props.image} alt="" />
                        <Box sx={{ paddingTop: '20px' }}>
                            {props.tag}
                        </Box>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default Topprops