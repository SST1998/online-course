import React from 'react'
import { Box, Button, Container } from '@mui/material'
import Logo from '../../assets/images/logo.png'


type Props = {}
const pages = ['Products', 'Pricing', 'Blog'];

const Footer = (props: Props) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box sx={{ bgcolor:'#000', marginTop: 'auto', p: 2 }}>
        <Container sx={{ display: 'flex' }}>
          <Box sx={{  mr: 1  }} >
            <img src={Logo} alt="logo" style={{ width: '10em' }} />
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ m: 1, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Footer