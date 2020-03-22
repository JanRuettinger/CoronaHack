import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { AppBar, Toolbar } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: 'none',
    background: '#C8CACC'
  }
}))

function TopBar({ className, ...rest }) {
  const classes = useStyles()

  return (
    <AppBar {...rest} className={clsx(classes.root, className)} color="grey">
      <Toolbar>
        <RouterLink to="/">
          <img alt="Logo" src="/images/logos/logo--match4healthcare.svg" />
        </RouterLink>
      </Toolbar>
    </AppBar>
  )
}

TopBar.propTypes = {
  className: PropTypes.string
}

export default TopBar
