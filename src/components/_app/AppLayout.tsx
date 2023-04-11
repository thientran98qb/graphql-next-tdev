import { Box, Container } from '@mui/material'
import { ReactNode, useState } from 'react'
import AppBarSite from './AppBarSite'
import AppDrawer from './AppDrawer'

type Props = {
  children: ReactNode
}

const AppLayout = ({children}: Props) => {
  const [open, setOpen] = useState(true)
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  return (
    <Box
      sx={{
        display: "flex"
      }}
    >
      <AppBarSite
        open={open}
        handleDrawerOpen={handleDrawerOpen}
      />
      <AppDrawer
        open={open}
        handleDrawerClose={handleDrawerClose}
      />
      <Container
        component="main"
        maxWidth="xl"
        sx={{
          mt: 10,
          height: `calc(100vh - 64px)`
        }}
      >
        {children}
      </Container>
    </Box>
  )
}

export default AppLayout
