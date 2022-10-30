import React from 'react'
import { Avatar, Typography, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Contacts } from '../data/profile'

const iconSize = 300

const CunstomAvatar = styled(Avatar)({
  width: iconSize,
  height: iconSize,
  border: 'solid 1px #000000',
})

const snsIconSize = 35

const Profile: React.FC = () => {
  const redirectTo = (url: string) => {
    window.location.href = url
  }

  return (
    <div style={{ marginTop: 50 }}>
      <Typography variant='h5' className='title'>
        Hi
      </Typography>
      <Box display='flex' justifyContent='center' p={2} mt={3}>
        <CunstomAvatar alt='Tomoaki Nakazawa Icon' src='assets/sake.svg' />
      </Box>
      <Box display='flex' justifyContent='center'>
        <h2>Tomoaki Nakazawa</h2>
      </Box>
      <Box display='flex' justifyContent='center' mt={-2}>
        <List style={{ textAlign: 'center' }}>
          {Contacts.map((contact) => (
            <ListItem disablePadding>
              <ListItemButton onClick={() => redirectTo(contact.url)}>
                <ListItemIcon>
                  <img src={contact.icon} width={snsIconSize} height={snsIconSize} />
                </ListItemIcon>
                <ListItemText primary={contact.accountName} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  )
}

export default Profile
