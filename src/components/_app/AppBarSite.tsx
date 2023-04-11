import { AppBar, AppBarProps, IconButton, ListItemIcon, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { WIDTHDRAWER } from '@/constants/LayoutAppConstant';

type Props = {
  open: boolean,
  handleDrawerOpen: () => void
}
interface AppBarNewProps extends AppBarProps {
  open?: boolean
}
const AppBarStyle = styled(AppBar, {shouldForwardProp: (prop) => prop !== 'open'})<AppBarNewProps>(
  ({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
      width: `calc(100% - ${WIDTHDRAWER}px)`,
      marginLeft: WIDTHDRAWER,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
    })
  })
)
const AppBarSite = ({open, handleDrawerOpen}: Props) => {
  return (
    <AppBarStyle
      position="fixed"
      variant="elevation"
      open={open}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && {display: "none"})
          }}
        >
          <MenuIcon/>
        </IconButton>
        <Typography>TDev Dashboard</Typography>
      </Toolbar>
    </AppBarStyle>
  )
}

export default AppBarSite
