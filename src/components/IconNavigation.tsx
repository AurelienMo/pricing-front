import {IconButton, Typography} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";


export interface IconNavigationProps {
    icon: any,
    label: string,
    path: string,
    color: string
}

const IconNavigation = (props: IconNavigationProps) => {
    return (
        <Link to={props.path} style={{textDecoration: 'none'}}>
            <IconButton
                size="large"
                edge="start"
                sx={{mr: 1, ml: 1}}
            >
                <div style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
                    {props.icon}
                    <Typography style={{color: props.color}} variant="body2">{props.label}</Typography>
                </div>
            </IconButton>
        </Link>
    )
}

export default IconNavigation;
