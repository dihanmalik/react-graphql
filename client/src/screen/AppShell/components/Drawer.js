import { Link as BaseLink, withRouter } from 'react-router-dom'
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'

import Button from '@atom/Button'
import HomeIcon from '@material-ui/icons/Home'
import ListIcon from '@material-ui/icons/Storage'
import React from 'react'
import View from '@atom/View'
import styled from '@styler'

const Container = styled.nav(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  minHeight: '100vh',
  boxSizing: 'border-box',
  width: 250,
  zIndex: theme.zIndex.drawer,
  boxShadow: theme.shadows[1],
  paddingTop: 54,
}))

const Link = styled(BaseLink)({
  '&:link': {
    color: 'inherit',
    textDecoration: 'none',
  },
})

const Drawer = ({ location }) => {
  const { pathname } = location
  return (
    <Container>
      <View>
        <Divider />
        <List>
          <Link to={'/'}>
            <ListItem button selected={pathname === '/home'}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItem>
          </Link>

          <Link to={'/list'}>
            <ListItem button selected={pathname === '/list'} color={'primary'}>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary={'List'} />
            </ListItem>
          </Link>
        </List>
      </View>
    </Container>
  )
}

export default withRouter(Drawer)
