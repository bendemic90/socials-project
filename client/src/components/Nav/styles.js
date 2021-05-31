import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    height: '60px',
    margin: '15px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    backgroundColor: '#202020',
  },
  heading: {
    color: '#DCDCDC',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    color: '#DCDCDC'
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  [theme.breakpoints.down('sm')]: {
    heading: {
      fontSize: 25,
      alignItems: 'left'
    },
    AppBar: {
      padding: '5px 5px',
      width: '100%'
    },
    profile: {
      width: '100%'
    },
    toolbar: {
      padding: '5px 5px',
    },
    purple: {
      display: 'none',
    },
    userName: {
      display: 'none',
    }
  }
}));