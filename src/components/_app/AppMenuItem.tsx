import { ListItemButton, ListItemIcon, Typography } from '@mui/material'
import NextLink from 'next/link'
import React, { ReactNode } from 'react'

type Props = {
  icon: ReactNode,
  children: string,
  path: string
}

const AppMenuItem = ({icon, children, path}: Props) => {
  return (
    <ListItemButton component={NextLink} href={path} selected={window.location.pathname === path}>
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
