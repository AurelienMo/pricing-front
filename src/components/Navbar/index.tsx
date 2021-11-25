import {AppBar, Avatar, Box, IconButton, Menu, MenuItem, Toolbar, Tooltip} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {makeSelectMe} from "../../store/selectors/userSelectors";
import React, {useEffect, useState} from "react";
import {onLogout} from "../../store/actions/globalActions";
import Home from '@mui/icons-material/Home';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {useLocation} from "react-router-dom";
import {APPOINTMENTS, DASHBOARD_PATH} from "../../navigations/routes/protectedRoutes";
import IconNavigation, {IconNavigationProps} from "../IconNavigation";
import {COLORS} from "../../assets/styles/theme";

const Navbar = () => {
    const me = useSelector(makeSelectMe());
    const [accountSettingEl, setAccountSettingEl] = useState<null|HTMLElement>(null)
    const [currentPath, setCurrentPath] = useState<null|string>(null);
    const open = Boolean(accountSettingEl);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location])

    const listIconNav = (): IconNavigationProps[] => {
        return [
            {
                icon: <Home fontSize="large" style={{color: getColorLink(DASHBOARD_PATH)}} />,
                label: 'Accueil',
                path: DASHBOARD_PATH,
                color: getColorLink(DASHBOARD_PATH)
            },
            {
                icon: <EventNoteIcon fontSize="large" style={{color: getColorLink(APPOINTMENTS)}} />,
                label: 'Rendez-vous',
                path: APPOINTMENTS,
                color: getColorLink(APPOINTMENTS)
            },
        ]
    }

    const toggleAccountSettings = (event: React.MouseEvent<HTMLElement>) => {
        setAccountSettingEl(event.currentTarget);
    }

    const handleCloseSettingMenu = () => {
        setAccountSettingEl(null);
    }

    const handleLogout = () => {
        dispatch(onLogout())
    }

    const getColorLink = (path: string): string => {
        return currentPath === path ? COLORS.secondary.main : COLORS.primary.contrastText;
    }

    return(
        <AppBar position="static" color={"primary"} sx={{display: 'flex'}}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box>
                    {listIconNav().map((item, index) => {
                        return <IconNavigation key={index} icon={item.icon} label={item.label} path={item.path} color={item.color}/>
                    })}
                </Box>
                <IconButton
                    size="large"
                    edge="start"
                    sx={{mr: 1, ml: 1}}
                >
                    <AddCircleIcon sx={{fontSize: 60, color: COLORS.secondary.main}} />
                </IconButton>
                <Tooltip title="">
                    <IconButton onClick={toggleAccountSettings} size="small" sx={{ ml: 2 }}>
                        <Avatar sx={{ width: 30, height: 30, bgcolor: 'secondary.main', fontSize: 12 }}>{`${me?.firstname.charAt(0).toUpperCase()}${me?.lastname.charAt(0).toUpperCase()}`}</Avatar>
                    </IconButton>
                </Tooltip>
                <Menu
                    id="setting-menu"
                    anchorEl={accountSettingEl}
                    open={open}
                    onClose={handleCloseSettingMenu}
                >
                    <MenuItem onClick={handleLogout}>Déconnection</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
