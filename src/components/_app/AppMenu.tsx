import { List } from '@mui/material'
import React from 'react'
import AppMenuItem from './AppMenuItem'
import SourceIcon from '@mui/icons-material/Source'

type Props = {}

const AppMenu = (props: Props) => {
  return (
    <List
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }}
    >
       <AppMenuItem
        icon={<SourceIcon/>}
        path="/"
      >
        Dashboard
      </AppMenuItem>
      <AppMenuItem
        icon={<SourceIcon/>}
        path="/products"
      >
        Products
      </AppMenuItem>
    </List>
  )
}

export default AppMenu
