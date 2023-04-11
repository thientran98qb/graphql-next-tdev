import { Divider, Drawer, IconButton, Theme, styled } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import React, { useState } from 'react'
import { Box, CSSObject } from '@mui/system'
import AppMenu from './AppMenu'
import { WIDTHDRAWER } from '@/constants/LayoutAppConstant'

type Props = {
  open: boolean,
  handleDrawerClose: () => void,
}
const DrawerHeader = styled('div')(({theme}) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0,1),
  ...theme.mixins.toolbar
}))

const openMixins = (theme: Theme): CSSObject => ({
  width: WIDTHDRAWER,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
})

const closeMixins = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)})`
})
const AppDrawerStyle = styled(Drawer, {shouldForwardProp: (prop) => prop !== 'open'})(({theme, open}) => ({
  width: WIDTHDRAWER,
  flexShrink: 0,
  boxSizing: "border-box",
  ...(
    open && {
      ...openMixins(theme),
      "& .MuiDrawer-paper": openMixins(theme)
    }
  ),
  ...(
    !open && {
      ...closeMixins(theme),
      "& .MuiDrawer-paper": closeMixins(theme)
    }
  ),
}))


const AppDrawer = ({open, handleDrawerClose}: Props) => {
  return (
    <AppDrawerStyle
      variant="permanent"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon/>
        </IconButton>
      </DrawerHeader>
      <Divider/>
      <Box>
        <AppMenu/>
      </Box>
    </AppDrawerStyle>
  )
}

export default AppDrawer
