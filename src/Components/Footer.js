import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import ReactTooltip from 'react-tooltip'

const styles = {
  root: {
    clear: 'both',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
  },
  span: {
    textDecoration: 'underline',
  },
}

function Footer(props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Typography gutterBottom>
        Copyright &copy;{new Date().getFullYear()} - Police <br />
        Designed and developed by{' '}
        <span
          className={classes.span}
          data-tip='Contact Phone: +2347066399174, Email: umarbrowser20@gmail.com'
        >
          {' '}
          Dopals Technologies{' '}
        </span>
      </Typography>
      <ReactTooltip place='right' type='dark' effect='float' />
    </div>
  )
}

export default withStyles(styles)(Footer)
