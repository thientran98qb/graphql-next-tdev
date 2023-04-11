import { List } from '@mui/material'
import React from 'react'
import AppMenuItem from './AppMenuItem'
import SourceIcon from '@mui/icons-material/Source'

type Props = {}

const AppMenu = (props: Props) => {
  return (
    <List>
      <AppMenuItem
        icon={<SourceIcon/>}
      >
        Products
      </AppMenuItem>
    </List>
  )
}

export default AppMenu
