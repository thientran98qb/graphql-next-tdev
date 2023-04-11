import { ListItemButton, ListItemIcon, Typography } from '@mui/material'
import React, { ReactNode } from 'react'

type Props = {
  icon: ReactNode,
  children: string
}

const AppMenuItem = ({icon, children}: Props) => {
  return (
    <ListItemButton>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <Typography variant="button">
        {children}
      </Typography>
    </ListItemButton>
  )
}

export default AppMenuItem
