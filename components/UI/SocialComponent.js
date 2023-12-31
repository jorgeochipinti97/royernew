import React from 'react'
import NextLink from 'next/link';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import { Box, Button, Divider, Link, TextField, Typography } from '@mui/material';


export const SocialComponent = ({ sizeFont }) => {
    return (
        <Box display='flex' justifyContent='center'>
            <NextLink href='https://www.instagram.com/royerstore.ar/' passHref>

                    <Button>  <InstagramIcon sx={{ fontSize: sizeFont }} /></Button>

            </NextLink>
            <NextLink href='https://walink.co/40c03f' passHref>

                    <Button> <WhatsAppIcon sx={{ fontSize: sizeFont }} /></Button>

            </NextLink>
            <NextLink href="mailto:info@royer.store" passHref>

                    <Button> <MailIcon sx={{ fontSize: sizeFont }} /></Button>

            </NextLink>

        </Box>
    )
}

