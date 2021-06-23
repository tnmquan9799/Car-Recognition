import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import InfoIcon from '@material-ui/icons/Info';
import SearchEngine from './SearchEngine';
import Category from './Category'
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import M8 from '../../assets/video/m8.mp4';
import axios from 'axios';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

// axios.defaults.xsrfCookieName = 'csrftoken'
// axios.defaults.xsrfHeaderName = 'X-CSRFToken'
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		marginTop: '-70px!important',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9) + 1,
		},
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

export default function Home(props) {
	const classes = useStyles();
	const theme = useTheme();

	// Nav Drawer
	const [open, setOpen] = React.useState(false);
	const handleDrawerOpen = () => { setOpen(true); };
	const handleDrawerClose = () => { setOpen(false); };
	// List Drawer
	const [listOpen, setListOpen] = React.useState(false);
	const handleClick = () => {
		setListOpen(!listOpen);
	};
	// Fetching Segment
	// const [dataSegment, setDataSegment] = React.useState(null);
	// async function fetchSegment() {
	// 	const response = await fetch("api/segment");
	// 	setDataSegment(await response.json());
	// }
	// useEffect(() => {
	// 	fetchSegment(props.id);
	// }, [props.id]);
	// if (!dataSegment) {
	// 	return (
	// 		<Grid container
	// 			spacing={0}
	// 			direction="column"
	// 			alignItems="center"
	// 			justify="center"
	// 			style={{ minHeight: '100vh' }}>
	// 			<CircularProgress />
	// 		</Grid>
	// 	);
	// }

	return (
		<Router>
			<div className={classes.root}>
				<CssBaseline />
				<AppBar
					style={{ backgroundColor: "#333" }}
					position="fixed"
					className={clsx(classes.appBar, {
						[classes.appBarShift]: open,
					})}
				>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={handleDrawerOpen}
							edge="start"
							className={clsx(classes.menuButton, {
								[classes.hide]: open,
							})}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" noWrap>
							Car Recognition System
						</Typography>
					</Toolbar>
				</AppBar>
				<Drawer
					variant="permanent"
					className={clsx(classes.drawer, {
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open,
					})}
					classes={{
						paper: clsx({
							[classes.drawerOpen]: open,
							[classes.drawerClose]: !open,
						}),
					}}
				>
					<div className={classes.toolbar}>
						<b>Author: Tuan & Quan</b>
						<IconButton onClick={handleDrawerClose}>
							{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
						</IconButton>
					</div>
					<Divider />
					<List >
						<ListItem button component={Link} to="/">
							<ListItemIcon>
								<HomeIcon />
							</ListItemIcon>
							<ListItemText primary="Home" />
						</ListItem>
						<ListItem button component={Link} to="/Category">
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary="Category" />
						</ListItem>
						{/* <ListItem button onClick={handleClick}>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary="Category" />
							{listOpen ? <ExpandLess /> : <ExpandMore />}
						</ListItem>
						<Collapse in={listOpen} timeout="auto" unmountOnExit>
							<List component="div" disablePadding>
								{dataSegment.map(person => (
									
									<ListItem button className={classes.nested}>
										<ListItemIcon>
											{person.name.substring(0,1)}
										</ListItemIcon>
										<ListItemText primary={person.name.substring(0,9)} />

									</ListItem>
								))}
							</List>
						</Collapse> */}
						<ListItem button>
							<ListItemIcon>
								<InfoIcon to="/Info" />
							</ListItemIcon>
							<ListItemText primary="Info" />
						</ListItem>
					</List>
					<Divider />
					<List>
						{['All mail', 'Trash', 'Spam'].map((text, index) => (
							<ListItem button key={text}>
								<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						))}
					</List>
				</Drawer>
				<main style={{ padding: "0", margin: "0", }} className={classes.content}>
					<div className={classes.toolbar} />
					<Switch>
						<Route exact path="/">
							<Grid id="video-container" >
								<video width={screen.width} id="video" src={M8} style={{ position: "absolute", zIndex: "-1", width: "100%", left: "50%", top: "50%", objectFit: "cover", transform: "translate(-50%, -50%)" }} >
								</video>
								<SearchEngine />
							</Grid>

						</Route>
						<Route path="/Category" component={Category} >
							<Category />
						</Route>
						<Route path="/Info" component="">
							Tuan
						</Route>
					</Switch>
				</main>
			</div>
		</Router>
	);
}
