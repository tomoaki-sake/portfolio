import React from 'react'
import { AppBar, Button, Toolbar } from '@mui/material'

type Navigator = {
  name: string
  url?: string
}

const Navigators: Navigator[] = [
  {
    name: 'Hi',
    url: './Hi',
  },
  {
    name: 'About',
    url: './About',
  },
  {
    name: 'Skills',
  },
  {
    name: 'Hobby Works',
  },
  {
    name: 'Contact',
  },
]

const Header: React.FC = () => {
  return (
    <div>
      <AppBar color='default' position='static' style={{ alignItems: 'center' }}>
        <Toolbar>
          {Navigators.map((nav) => (
            <Button style={{ padding: 10 }}>{nav.name}</Button>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
