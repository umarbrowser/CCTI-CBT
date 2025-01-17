import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 1,
    textAlign: 'center',
    margin: '60px 50px',
    [theme.breakpoints.only('xs')]: {
      margin: 10,
    },
    [theme.breakpoints.between('xs, sm')]: {
      margin: 10,
    },
  },
})

class Landing extends React.Component {
  componentWillMount() {
    this.checkAndInitializeCandidatesRecord()
  }

  checkAndInitializeCandidatesRecord() {
    const getCandidateRecord = JSON.parse(
      localStorage.getItem('candidatesRecord')
    )

    if (getCandidateRecord === null) {
      localStorage.setItem('candidatesRecord', JSON.stringify([]))
    }
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <Paper className={classes.root} elevation={0}>
          <Typography variant='headline' component='h3'>
            Welcome To Nigerian Police Computer Based Test{new Date().getFullYear()}
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant='body2' component='p'>
            1. Input Your Registration Number 
            <br />
2. Select CBT as your Exam Type
            <br />
3. Click Next to Start the Exam
<br />
4. Answer All Questions
          </Typography>
        </Paper>
      </div>
    )
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Landing)
