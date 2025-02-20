import React,  { useEffect } from 'react'
import { LuShirt } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";
import { LuBadgeDollarSign } from "react-icons/lu";
import { Box, Typography, TextField, Button, List, ListItem, Link } from '@mui/material';
import AOS from 'aos';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';






function Footer() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);

  return (
    <>
       <footer>
  <div className="container">
    <div className="topInfo row text-center text-md-left">
 
      <div className="boder col-12 col-md-3 d-flex align-items-center justify-content-center justify-content-md-start mb-3 mb-md-0">
        <span className="icon mr-2" style={{ fontSize: '24px' }}>
          <LuShirt />
        </span>
        <span>Everyday fresh products</span>
      </div>

      <div className="boder col-12 col-md-3 d-flex align-items-center justify-content-center justify-content-md-start mb-3 mb-md-0">
        <span className="icon mr-2" style={{ fontSize: '24px' }}>
          <TbTruckDelivery />
        </span>
        <span>Free delivery for order over $70</span>
      </div>

 
      <div className="boder col-12 col-md-3 d-flex align-items-center justify-content-center justify-content-md-start mb-3 mb-md-0">
        <span className="icon mr-2" style={{ fontSize: '24px' }}>
          <RiDiscountPercentLine />
        </span>
        <span>Daily Mega Discounts</span>
      </div>


      <div className="pb-4 col-12 col-md-3 d-flex align-items-center justify-content-center justify-content-md-start mb-3 mb-md-0">
        <span className="icon mr-2" style={{ fontSize: '24px'}}>
          <LuBadgeDollarSign />
        </span>
        <span>Best price on the market</span>
      </div>
    </div>
  </div>
</footer>

        <Box
      sx={{
        backgroundColor: 'black',
        color: '#6a6a6a',
        py: 4,
        px: { xs: 3, sm: 6, md: 10 },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 4,
        }}
      >
        {/* About Us */}
        <Box sx={{ maxWidth: '300px' }}>
          <Typography
            sx={{ color: '#6a6a6a', fontSize: '13px', textAlign: 'left' }}
            data-aos="fade-up"
          >
            Our collection celebrates the artistry of India's most skilled craftsmen, bringing to you a curated range of handmade clothing that combines the rich heritage of traditional techniques with contemporary design sensibilities.
          </Typography>
          <Box sx={{ display: 'flex', mt: 2 }}>
            <TextField
              data-aos="fade-up"
              variant="outlined"
              placeholder="Enter your email address"
              sx={{
                backgroundColor: '#333',
                input: { color: '#6a6a6a' },
                mr: 1,
                width: '200px',
                border: '1px solid white',
              }}
            />
            <Button
              variant="contained"
              data-aos="fade-up"
              sx={{
                backgroundColor: '#333',
                color: '#6a6a6a',
                border: '1px solid white',
                '&:hover': {
                  backgroundColor: '#555',
                  borderColor: 'white',
                },
              }}
            >
              JOIN
            </Button>
          </Box>
        </Box>

        {/* Main Menu */}
        <Box>
          <Typography sx={{ fontSize: '14px', mb: 1, fontWeight: 'bold' }} data-aos="fade-up">
            MAIN MENU
          </Typography>
          <List sx={{ p: 0 }}>
            {['New Arrivals', 'Women', 'Men', 'Kids', 'Gifting', 'Trending'].map((item, index) => (
              <ListItem
                key={item}
                sx={{ p: 0, mb: 1 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Link
                  href="#"
                  underline="hover"
                  sx={{ color: '#6a6a6a', fontSize: '13px', '&:hover': { color: 'white' } }}
                >
                  {item}
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Contact Section */}
        <Box>
          <Typography sx={{ fontSize: '14px', mb: 1, fontWeight: 'bold' }} data-aos="fade-up">
            REACH US
          </Typography>
          <Typography sx={{ fontSize: '13px', mb: 1 }} data-aos="fade-up">
            Contact Us
          </Typography>
          <Typography sx={{ fontSize: '13px', mb: 1 }} data-aos="fade-up">
            support@example.com
          </Typography>
          <Typography sx={{ fontSize: '13px', mb: 1 }} data-aos="fade-up">
            +91 9876543210
          </Typography>
          <Typography sx={{ fontSize: '13px', mb: 1 }} data-aos="fade-up">
            (10 am to 6 pm | Mon - Fri)
          </Typography>
          <Box sx={{ display: 'flex', mt: 1 }}>
            <Box
              sx={{
                p: 1,
                borderRadius: '100%',
                mr: 1,
                cursor: 'pointer',
                '&:hover': { backgroundColor: '#555' },
              }}
              data-aos="fade-up"
            >
              <FacebookRoundedIcon />
            </Box>
            <Box
              sx={{
                p: 1,
                borderRadius: '100%',
                cursor: 'pointer',
                '&:hover': { backgroundColor: '#555' },
              }}
              data-aos="fade-up"
            >
              <InstagramIcon />
            </Box>
          </Box>
        </Box>

        {/* Additional Links */}
        {['SHOPWHIZ', 'POLICIES'].map((title, idx) => (
          <Box key={title}>
            <Typography sx={{ fontSize: '14px', mb: 1, fontWeight: 'bold' }} data-aos="fade-up">
              {title}
            </Typography>
            <List sx={{ p: 0 }}>
              {(title === 'SHOPWHIZ'
                ? ['SHOPWHIZ Diaries', 'Testimonials', 'Store Locator', 'Gifts', 'Order Tracking']
                : ['Terms & Conditions', 'Returns & Exchange', 'Shipping Policy', 'Privacy Policy']
              ).map((item, index) => (
                <ListItem
                  key={item}
                  sx={{ p: 0, mb: 1 }}
                  data-aos="fade-up"
                  data-aos-delay={(idx + 1) * 100 + index * 100}
                >
                  <Link
                    href="#"
                    underline="hover"
                    sx={{ color: '#6a6a6a', fontSize: '13px', '&:hover': { color: 'white' } }}
                  >
                    {item}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Box>

      {/* Bottom Section */}
      <Typography sx={{ textAlign: 'center', mt: 4, color: '#6a6a6a', fontSize: '12px' }}>
        © SHOPWHIZ
      </Typography>
    </Box>
    </>
  )
}

export default Footer