import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { WrapText } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Divider } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RsvpIcon from '@mui/icons-material/Rsvp';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import PaymentsIcon from '@mui/icons-material/Payments';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
function Home(){
 return(
    <>

<div style={{height:"15rem" , width:"100%" ,backgroundColor:"#14AE5CB2"}}>
            <Grid container>
                <Grid item xs={7} sm={7} md={7} lg={7} xl={7}>
                <IconButton edge="start" aria-label="menu" >
                            <RsvpIcon sx={{ ml:"5rem", color:"white" ,height:"4rem" , width:"4rem" }} ></RsvpIcon>
                </IconButton>
              <Typography variant='h4' sx={{ml:"5rem",mt:"2rem", fontWeight:"bold"}} >Compare Loans, Find Best Rates</Typography>
                  
                </Grid>
                <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                      <Box sx={{ flexGrow: 1  }}>
                      <AppBar position="static" sx={{backgroundColor:"transparent", boxShadow:"none" ,mt:"1rem"}}>
                        <Toolbar variant="dense">
                        <IconButton edge="start" aria-label="menu" sx={{ mr: 2 , color:"black" }}>
                            <SearchIcon />
                        </IconButton>
                        <Typography variant="subtitle1" color="inherit" component="div" sx={{mr:"1.5rem" , color:"black"}}>
                            Financial Products
                          </Typography>
                          <Typography variant="subtitle1" color="inherit" component="div" sx={{color:"black"}}> 
                            Blogs
                          </Typography>
                          <IconButton edge="start" aria-label="menu" sx={{ mr: 2 , color:"white" , ml:"1.5rem"}}>
                            <MenuIcon />
                          </IconButton>
                          
                          
                        </Toolbar>
                      </AppBar>
                    </Box>
                </Grid>    
              </Grid>
                
        </div>    

         {/* Part-2 */}
        <Container sx={{ml:"7rem" , mt:"2rem"}}>
            <Grid container >
                <Grid item xs={2} md={2} lg={2}>
                <PersonIcon color="success"></PersonIcon>
                <Typography variant="caption" display="block" >
                 Low Interest 
                </Typography>
                </Grid>
                <Grid item xs={2} md={2} lg={2}>
                <DomainAddIcon sx={{ color: "#646262"}}></DomainAddIcon>
                <Typography variant="caption" display="block" >
                 MSE Loans
                </Typography>
                </Grid>
                <Grid item xs={2} md={2} lg={2}>
                <MapsHomeWorkIcon sx={{ color: "#646262"}}></MapsHomeWorkIcon>
                <Typography variant="caption" display="block" >
                 Home Loan
                </Typography>   
                </Grid>
                <Grid item xs={6} md={6} lg={2} xl={2}>
                <Typography variant="caption" display="block" sx={{mt:"1.5rem"}}>
                + more products coming soons
                </Typography>   
                </Grid>
            </Grid>       
        </Container>    
            {/* part-3 */}
            <Grid container spacing={0}>
                <Grid  item xs={1} md={1} lg={1} xl={1} sx={{backgroundColor:"14AE5CB2"}}>

                 {/* <img src='https://us.123rf.com/450wm/olgagi/olgagi1904/olgagi190400278/121197443-abstract-green-light-and-yellow-colorful-summer-bokeh-background-.jpg?ver=6'
                 style={{width:"5rem" , height:"15rem"}}
                 /> */}
                 
                </Grid>
                
                <Grid item xs={7} md={7} lg={7} xl={7} sx={{backgroundColor:"#D9D9D933" ,p:"1.5rem"}}>
                <Typography sx={{fontWeight:"bold" , mb:"1rem"}}>Borrow wisely with the right loan</Typography>
                <Typography   align="left">
                Find the best credit rates using our comparator. When you need a personal loan, 
                it's smart to shop around. Our loan comparisons, objective reviews, 
                and payment calculators make it easier to choose one with confidence.
                </Typography>
                <Button sx={{mt:"1rem",mb:"2rem" }} variant="contained" color="success">Compare Estimates</Button>
                <Typography>By continuing you accept our Terms and Conditions</Typography>
                </Grid>
                <Grid item xs={4} md={4} lg={4} xl={4} sx={{backgroundColor:"#D9D9D933"}}>
                <img 
                                id='stockPhoto'
                                src="https://media.istockphoto.com/id/1288081906/vector/happy-female-entrepreneur-surrounded-money.webp?s=612x612&w=is&k=20&c=8N2WvkS1y1FLrXUPxKoDPHyAkPVvXJiknXWde6wCfOk="/>
                </Grid>
               
            </Grid>
                
        {/* 4th portion */}
            
                                                
        {/* 5th portion */}
        <Container sx={{mt:"3rem"}}>
            <Typography sx={{fontWeight:"Bold"}}>How does Oban Market work?</Typography>
            <Grid container>
              <Grid item xs={7} md={7} lg={7} xl={7}>
                {/* 3 market work rule */}
                {/* rule-1 */}
              <PersonIcon sx={{ color: "#646262" , mt:"1.5rem"}}></PersonIcon>
              <Typography display="inline" sx={{ml:"0.5rem"}}>Quote what you need
              </Typography>
              <Typography sx={{ml:"2rem",mb:"1.5rem"}}>
                Use our free tool to quote the 
                insurance options and financial products available on the market.
                </Typography>
                 {/* rule-2 */}
              <PersonIcon sx={{ color: "#646262" , mt:"1.5rem"}}></PersonIcon>
              <Typography display="inline" sx={{ml:"0.5rem"}}>Quote what you need
              </Typography>
              <Typography sx={{ml:"2rem",mb:"1.5rem"}}>
                Use our free tool to quote the 
                insurance options and financial products available on the market.
                </Typography>
                 {/* rule-3 */}
                <PersonIcon sx={{ color: "#646262" , mt:"1.5rem"}}></PersonIcon>
              <Typography display="inline" sx={{ml:"0.5rem"}}>Quote what you need
              </Typography>
              <Typography sx={{ml:"2rem",mb:"1.5rem"}}>
                Use our free tool to quote the 
                insurance options and financial products available on the market.
                </Typography> 
              </Grid>  
              <Grid item xs={5} md={5} lg={5} xl={5}>
              <img 
                                id='stockPhoto'
                                src="https://media.istockphoto.com/id/1288081906/vector/happy-female-entrepreneur-surrounded-money.webp?s=612x612&w=is&k=20&c=8N2WvkS1y1FLrXUPxKoDPHyAkPVvXJiknXWde6wCfOk="/>
              </Grid> 
            
            </Grid>
        </Container>
             
        <Button  id="start" sx={{mt:"1rem",mb:"2.5rem" , justifySelf:"center",borderRadius:"4rem" }} variant="contained" color="success" >Get Started</Button> 
            {/* portion 5 */}
    <Container sx={{backgroundColor:"#CFC3F34D" , ml:"2rem" ,  border:"0.1rem solid black"}}>
            <Typography align="center" pt={"1rem"} >
              We’ve done the homework
             </Typography>
             <Typography sx={{fontWeight:"bold"}}>
             See our recommendations and review for the best loans in every category.
             </Typography>
              
            <Grid container spacing={2} sx={{ml:"2rem"}}>     
                <Grid item xs={3} md={3} lg={3}>
                <PaymentsIcon sx={{mb:"-0.4rem"}}></PaymentsIcon>
                <Typography display="inline" sx={{ml:"0.2rem"}}>Low Interest</Typography>
                <Divider   sx={{ height:"2rem" , mt:"-2rem" ,color:"#031CFF"}} orientation="vertical" variant="middle" flexItem />
                </Grid>
                <Grid item xs={3} md={3} lg={3}>
                <WrapText sx={{mb:"-0.4rem"}}></WrapText><Typography display="inline">Low Interest</Typography>
                <Divider   sx={{ height:"2rem" , mt:"-2rem" ,color:"#031CFF"}} orientation="vertical" variant="middle" flexItem />
                
                </Grid>
                <Grid item xs={3} md={3} lg={3}>
                <AccountBalanceIcon sx={{mb:"-0.4rem"}}></AccountBalanceIcon><Typography display="inline">Low Interest</Typography>
                <Divider   sx={{ height:"2rem" , mt:"-2rem" ,color:"#031CFF"}} orientation="vertical" variant="middle" flexItem />
                </Grid>
                <Grid item xs={3} md={3} lg={3}>
                <LocalFloristIcon sx={{mb:"-0.4rem"}}></LocalFloristIcon><Typography display="inline">Low Interest</Typography>
                
                </Grid> 
            </Grid> 
    </Container>           
         
    <Typography align='center'sx={{fontWeight:"bold" , mb:"2rem" ,mt:"1rem"}}>FAQ</Typography>

        {/* part-6        */}
    <Container sx={{mb:"2rem"}}>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What is Oban Market?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          ComparaOnline is a digital platform that offers a price comparison service and 
          features of the largest institutions in the insurance and financial products market.
           The main products on the marketplace are: Personal Loans, MSEs, and Mortgages.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider variant="middle" />
      {/* accodian-2 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How does Oban Market work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           The free tool allows you to compare the 
           options available in the market. After comparing prices and features of products 
           and services, you can freely choose the best option for your profile. You will be redirected to
            the official page of the company that is offering the product.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider variant="middle" />
      {/* accordian-3 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Do I need to enter details into Oban Market?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We only ask basic filter questions to be able to give you a quote 
          on the best rates and all data is protected. See terms and conditions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider variant="middle" />
      {/* accordian-4 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Is Oban Market Secure?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Oban Market is a Nigerian company with headquarters in America. 
          We comply with USA data security standards.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* accordian 5 */}
      <Divider variant="middle" />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Where is Oban Market Located</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          FairMoney office is located in Lagos, Nigeria. We are currently serving all Nigerians
           and looking to expand financial access across the African continent.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* accordian-6 */}
      <Divider variant="middle" />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>I have a complaint or feedback; how do I contact you?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Check out oban.market/contact.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider variant="middle" />
    </Container>
      {/* Footer */}
         <Container sx={{
                p:"2rem",
                backgroundColor:"#00C14080",

              }}>
                <Grid container spacing={2}>
                        <Grid item xs={4} md={4} lg={4}>
                          <image src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo-whatsapp-128.png"/>
                        </Grid>
                        <Grid item xs={3} md={3} lg={3} 
                        sx={{p:"2rem"}}
                        >
                        <Typography>About</Typography>
                        <Divider orientation="horizontal" sx={{
                            width:'30px',
                            
                        }}/>
                        <Typography>About Us</Typography>
                        <Typography>Blog</Typography>
                        <Typography>Careers</Typography>

                        </Grid>
                        <Grid item xs={3} md={3} lg={3}
                        sx={{p:"2rem"}}>
                        <Typography>Help</Typography>
                        <Divider orientation="horizontal" sx={{
                            width:'30px',
                            
                        }}/>
                        <Typography>Contact</Typography>
                        </Grid>
                        <Grid item xs={2} md={2} lg={2}
                        sx={{p:"2rem"}}>
                         <Typography>Legal</Typography>
                        <Divider orientation="horizontal" sx={{
                            width:'30px',
                            
                        }}/>
                        <Typography>Terms of use</Typography>
                        <Typography>Privacy</Typography>
                        <Typography>Policy</Typography>
                        </Grid>

                    </Grid>
                    <Grid container>
                        <Grid item xs={6} md={6} lg={6}>
                        
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <img src="https://www.logo.wine/a/logo/Instagram/Instagram-Logo.wine.svg" style={{
                                width: "4.2rem",
                                height: "4.2rem",
                                mr:"1rem"
                                }}/>

                            <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" style={{
                                    width: "3.5rem",
                                    height: "3.5rem",
                                    mr:"1rem",
                                    mb:"-o.3rem",
                                    display:"inline"
                                    }}/>
                                    <Typography display="inline" sx={{ml:"1rem" ,mb:"10rem"}} >© 2022 Oban Inc.
                                    </Typography>
                                    <Typography sx={{ml:"9rem"}}>All Rights Reserved
                                    </Typography>
                        </Grid>

                        

                    </Grid>
             </Container>     







    </>
    );
}
export default Home;