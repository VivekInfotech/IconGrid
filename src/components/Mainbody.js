import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import CountUp from 'react-countup';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Block } from '@mui/icons-material';
import { FaSearch, FaRegSmile } from "react-icons/fa";
// import { Link } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import iconlogo from './img/Vector.png'
import interfaceicon from './img/interfaceicon.png'
import animatedicon from './img/animated.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),

    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));


const card1 = (
    <React.Fragment>

        <img src={iconlogo} className='block' alt="" />

    </React.Fragment>
);
const card2 = (
    <React.Fragment>

        <img src={interfaceicon} className='block' alt="" />

    </React.Fragment>
);
const card3 = (
    <React.Fragment>
        <img src={animatedicon} className='block' alt="" />
    </React.Fragment>
);




function Item({ children }) {
    return (
        <Paper>
            {children}
        </Paper>
    );
}

function Mainbody() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    // background: rgb(34,122,20);


    const mobileMenuId = 'primary-search-account-menu-mobile';

    return (
        <>
            <Box sx={{ width: '100%' ,paddingTop:'55px' }}>
                <Box className="home-hero" sx={{ backgroundColor: "#ffffff", paddingTop: '55px', height: '650px', width: '100%', zIndex: 9 }}>

                    <Container maxWidth="xl">

                        <Box sx={{ position: 'relative'/*display: { xs: 'none', md: 'flex' }*/ }}>
                            <Grid container xs={12} sx={{ justifyContent: 'center' }}>
                                <Stack spacing={0} direction="row" alignItems="center" sx={{ width: "100%" }}>
                                    <Grid item xs={12} sx={{
                                        display: 'flex', width: '70%', flexDirection: 'column', color: '#272727', justifyContent: 'center', paddingTop: '120px', textAlign: 'center', lineHeight: '1',
                                        fontWeight: "700", zIndex: 9, fontSize: { xs: '22px', sm: '32px', md: '45px' }
                                    }}>
                                        <Box>Take the hassle out of <font color="#ffbc06">icons</font>  </Box>
                                        <Box>in your website.</Box>
                                    </Grid>

                                </Stack>
                                <Stack spacing={1} direction="row" alignItems="center" sx={{ width: "48%" }}>
                                    <Grid item xs={12} sx={{
                                        color: '#272727', textAlign: 'center', paddingTop: '33px',
                                        alignItems: 'end', zIndex: 9, fontSize: { xs: '12px', sm: '12px', md: '14px' }
                                    }}>
                                        "At <b> <font fontSize="16px">IconGrid,</font></b> we believe in the power of connection to transform lives and shape futures. Join our global community to share ideas, collaborate on projects, and build meaningful relationships. Together, let's turn dreams into reality."
                                    </Grid>
                                </Stack>
                            </Grid>
                        </Box>
                    </Container>
                    <Box sx={{ flexGrow: 1 }}>
                        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }} >
                            <Grid sx={{ width: '50%', paddingTop: '33px' }}>
                                <Search sx={{ backgroundColor: "#fff0", border: '1px solid #272727', margin: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                                    <Box className="icon-serch" sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Box sx={{ paddingLeft: '10px', paddingTop: '5px' }}>
                                            <FaSearch fontSize={'20px'} />
                                        </Box>

                                        <StyledInputBase
                                            placeholder="Search…"
                                            inputProps={{ 'aria-label': 'search' }}
                                        />
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '7px' }}>
                                        <Box sx={{ border: '1px solid #FFBC06', backgroundColor: '#FFBC06', borderRadius: '5px', padding: '0px 10px' }}>Go</Box>
                                    </Box>
                                </Search>
                            </Grid>
                        </Toolbar>
                    </Box>
                </Box>
                <Box sx={{ marginTop: '0px', backgroundColor: '#272727' }}>
                    <Grid container padding={'24px'} sx={{ justifyContent: 'space-around' }}>
                        <Grid item md={3} sm={6} xs={12} sx={{}}  >
                            <Link to="/icons" >
                                <Box sx={{ display: 'flex', justifyContent: 'center', padding: '10px 0px 20px 0px' }}>
                                    {card1}
                                </Box>
                                <Box fontWeight={600} fontSize={'30px'} className='center c-white'>
                                    <CountUp delay={2} end={200} />+
                                </Box>
                                <CardActions className='c-white' sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '5px' }}>
                                    <Button className='center c-white' size="large">Icons</Button>
                                </CardActions>
                                <Typography textAlign={'center'} className='c-white' fontSize={'15px'}>
                                    A comprehensive repository of freely available icons suitable for various projects.
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <Link to="/interface-icons">
                                <Box sx={{ display: 'flex', justifyContent: 'center', padding: '10px 0px 20px 0px' }}>
                                    {card2}
                                </Box>
                                <Box fontWeight={600} fontSize={'30px'} className='center c-white'>
                                    <CountUp delay={2} end={200} />+

                                </Box>
                                <CardActions className='c-white' sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '5px' }}>
                                    <Button className='center c-white' size="large">Interface Icons</Button>
                                </CardActions>
                                <Typography className='center c-white' textAlign={'center'} color={'#777'} fontSize={'15px'}>
                                    Icons crafted specifically for your user interfaces.
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <Link to="/animated-icons">
                                <Box sx={{ display: 'flex', justifyContent: 'center', padding: '10px 0px 20px 0px' }}>
                                    {card3}
                                </Box>
                                <Box fontWeight={600} fontSize={'30px'} className='center c-white'>
                                    <CountUp delay={2} end={200} />+

                                </Box>
                                <CardActions className='c-white' sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '5px' }}>
                                    <Button className='center c-white' size="large">Animated Icons</Button>
                                </CardActions>
                                <Typography className='c-white center' textAlign={'center'} color={'#777'} fontSize={'15px'}>
                                    Animated icons to enhance the visual appeal of your projects.
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ marginTop: '70px' }}>
                    <Container maxWidth="xl">
                        <Grid xs={12}>
                            <Typography sx={{ fontSize: '30px', fontFamily: 'Degular,Inter,Helvetica Neue,Helvetica,Arial,sans-serif', color: '#424242;', fontWeight: 600 }}>
                                GICONS, The highly sought-after collection of free SVG user interface icons
                            </Typography>
                            <Typography sx={{ color: '#777' }}>
                                Explore a collection of over 24,300 free UI icons, presented in 9 distinct styles, fully editable and customizable to uniquely suit your needs.
                            </Typography>
                        </Grid>

                    </Container>

                    <Container maxWidth="xl" sx={{ marginTop: '35px' }}>
                        <Grid container xs={12} className='center'>
                            <Box padding={'0px 20px'}>
                                <Grid sx={{ borderRadius: '20px', overflow: 'hidden', width: '269px', border: '1px solid #272727' }}>
                                    <Link to="/most-downloads">
                                        <Box sx={{ height: '86px', backgroundColor: '#FFE08A' }}>
                                        </Box>
                                        <Box className='center'>
                                            <Box className='center' sx={{ marginTop: '-37px', height: '73px', width: '73px', backgroundColor: '#FFC62D', alignItems: 'center', borderRadius: '50%' }}>
                                                <FaRegSmile fontSize={'35px'} />
                                            </Box>

                                        </Box>
                                        <Box className='center' fontSize={'18px'} padding={'20px'}>
                                            Regular
                                        </Box>
                                        <Box className='center' padding={'0px 28px'} textAlign={"center"}>
                                            "Explore our free regular icons for versatile design solutions. From simple outlines to detailed illustrations, find the perfect icon to enhance your projects effortlessly."
                                        </Box>
                                        <Box className='center' sx={{ padding: '20px 28px', textAlign: 'center' }} >
                                            <Box sx={{ border: '1px solid #ffbc06', padding: '5px 60px', borderRadius: '7px', backgroundColor: '#FFE08A' }}>Explore</Box>
                                        </Box>
                                    </Link>
                                </Grid>
                            </Box >
                            <Box padding={'0px 20px'}>
                                <Grid sx={{ borderRadius: '20px', overflow: 'hidden', width: '269px', border: '1px solid #272727' }}>
                                    <Link to="/most-downloads">
                                        <Box sx={{ height: '86px', backgroundColor: '#AEDBFF' }}>
                                        </Box>
                                        <Box className='center'>
                                            <Box className='center' sx={{ marginTop: '-37px', height: '73px', width: '73px', backgroundColor: '#74C0FC', alignItems: 'center', borderRadius: '50%' }}>
                                                <FaRegSmile fontSize={'35px'} />
                                            </Box>

                                        </Box>
                                        <Box className='center' fontSize={'18px'} padding={'20px'}>
                                            Solid
                                        </Box>
                                        <Box className='center' padding={'0px 28px'} textAlign={"center"}>
                                            "Explore our free solid icons for versatile design solutions. From simple outlines to detailed illustrations, find the perfect icon to enhance your projects effortlessly."                                    </Box>
                                        <Box className='center' sx={{ padding: '20px 28px', textAlign: 'center' }} >
                                            <Box sx={{ border: '1px solid #AEDBFF', padding: '5px 60px', borderRadius: '7px', backgroundColor: '#AEDBFF' }}>Explore</Box>
                                        </Box>

                                    </Link>
                                </Grid>
                            </Box>
                            <Box padding={'0px 20px'}>
                                <Grid sx={{ borderRadius: '20px', overflow: 'hidden', width: '269px', border: '1px solid #272727' }}>
                                    <Link to="/most-downloads">
                                        <Box sx={{ height: '86px', backgroundColor: '#CDBBFF' }}>
                                        </Box>
                                        <Box className='center'>
                                            <Box className='center' sx={{ marginTop: '-37px', height: '73px', width: '73px', backgroundColor: '#B197FC', alignItems: 'center', borderRadius: '50%' }}>
                                                <FaRegSmile fontSize={'35px'} />
                                            </Box>

                                        </Box>
                                        <Box className='center' fontSize={'18px'} padding={'20px'}>
                                            Thin
                                        </Box>
                                        <Box className='center' padding={'0px 28px'} textAlign={"center"}>
                                            "Explore our free regular icons for versatile design solutions. From simple outlines to detailed illustrations, find the perfect icon to enhance your projects effortlessly."
                                        </Box>
                                        <Box className='center' sx={{ padding: '20px 28px', textAlign: 'center' }} >
                                            <Box sx={{ border: '1px solid #CDBBFF', padding: '5px 60px', borderRadius: '7px', backgroundColor: '#CDBBFF' }}>Explore</Box>
                                        </Box>
                                    </Link>
                                </Grid>
                            </Box>
                            <Box padding={'0px 20px'}>
                                <Grid sx={{ borderRadius: '20px', overflow: 'hidden', width: '269px', border: '1px solid #272727' }}>
                                    <Link to="/most-downloads">
                                        <Box sx={{ height: '86px', backgroundColor: '#94FFDE' }}>
                                        </Box>
                                        <Box className='center'>
                                            <Box className='center' sx={{ marginTop: '-37px', height: '73px', width: '73px', backgroundColor: '#63E6BE', alignItems: 'center', borderRadius: '50%' }}>
                                                <FaRegSmile fontSize={'35px'} />
                                            </Box>

                                        </Box>
                                        <Box className='center' fontSize={'18px'} padding={'20px'}>
                                            Stroke
                                        </Box>
                                        <Box className='center' padding={'0px 28px'} textAlign={"center"}>
                                            "Explore our free regular icons for versatile design solutions. From simple outlines to detailed illustrations, find the perfect icon to enhance your projects effortlessly."
                                        </Box>
                                        <Box className='center' sx={{ padding: '20px 28px', textAlign: 'center' }} >
                                            <Box sx={{ border: '1px solid #94FFDE', padding: '5px 60px', borderRadius: '7px', backgroundColor: '#94FFDE' }}>Explore</Box>
                                        </Box>
                                    </Link>
                                </Grid>
                            </Box>
                        </Grid>

                    </Container>
                </Box>


            </Box >

        </>
    )
}

export default Mainbody