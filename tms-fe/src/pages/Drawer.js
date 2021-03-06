import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import EventIcon from '@material-ui/icons/Event';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Box, Grid, Paper } from '@material-ui/core';
import CardItem from '../components/CardItem';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../store/actions';
import Button from '@material-ui/core/Button';
import ReactPaginate from 'react-paginate';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  
  const [offset, setOffset] = useState(0)
  const [data, setData] = useState([])
  const [perPage] = useState(4)
  const [pageCount, setPageCount] = useState(0)
  const [loading, setLoading] = useState(true)

  const dataUser = () => {
    const slice = users.slice(offset, offset + perPage)
    const postData = slice
    setData(postData)
    setPageCount(Math.ceil(users.length / perPage))
  }
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  useEffect(() => {
    if(data.length === 0) {
      dispatch(fetchUsers())
      dataUser()
    }
    setLoading(false)
  },[users])

  useEffect(() => {
    dataUser()
  },[offset])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon color='primary'/>
          </ListItemIcon>
          <ListItemText primary="Beranda" style={{ color: '#0d47a1' }}/>
        </ListItem>
        <ListItem button>
          <ListItemIcon color='primary'>
            <PeopleIcon color='secondary'/>
          </ListItemIcon>
          <ListItemText primary="Personnel List" style={{ color: '#f50057' }}/>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EventIcon color='primary'/>
          </ListItemIcon>
          <ListItemText primary="Daily Attendance" style={{ color: '#0d47a1' }}/>
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} color="transparent">
        <Toolbar>
          <Box display='flex' flexGrow={1}>
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color='secondary'>
              Trans Media Sosial
            </Typography>
          </Box>
          <IconButton>
            <AccountCircle color='primary'/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Paper p={2} style={{ padding: '2rem'}}>
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography color='secondary' style={{ fontWeight: 'bold', fontSize: '1.5rem'}} >
                Personnel List
              </Typography>
            </Box>
            <Box>
              <Button variant="contained" color="secondary">
                add personnel
              </Button>
            </Box>
          </Box>
        </Paper>
        <Grid container spacing={2} style={{marginTop: '1rem'}}>
          {
            loading ? (
              <span>loading...</span>
            ) : (
              data.map((element, i) => {
                return (
                  <Grid item xs={12} sm={3} key={i}>
                  <CardItem element={element}/>
                </Grid>
                ) 
              })
            )
          }
        </Grid>
        <Box display="flex" justifyContent="center" m={3}>
          <ReactPaginate 
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={4}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
            style={{}}
          />
        </Box>
      </main>
    </div>
  );
}

export default ResponsiveDrawer;
