import React from "react";
import { Avatar, Typography, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { styled } from '@mui/material/styles';

const iconSize = 300;

const CunstomAvatar = styled(Avatar)({
    width: iconSize,
    height: iconSize, 
    border: "solid 1px #000000"
})

export type Contact = {
    serviceName: string
    accountName: string
    icon: string
    url: string
}

const snsIconSize = 35;

const Contacts: Contact[] = [
    {
        serviceName: "Github",
        accountName: "@tomoaki-sake",
        icon: "/Github.png",
        url: "https://github.com/tomoaki-sake"
    },
    {
        serviceName: "Twitter",
        accountName: "@maiko_sake",
        icon: "/Twitter.png",
        url: "https://twitter.com/maiko_sake"
    },
    {
        serviceName: "Instagram",
        accountName: "@maiko_sake",
        icon: "/instagram.png",
        url: "https://instagram.com/maiko_sake"
    },
]

const Profile: React.FC = () => {

    const redirectTo = (url: string) => {
        window.location.href = url;
    };

    return (
        <div style={{ marginTop: 50}}>
            <Typography variant="h5" style={{ textAlign: "center", textDecoration: "underline", textUnderlineOffset: "0.3rem", textDecorationThickness: "4px"}}>
                Hi
            </Typography>
            <Box display="flex" justifyContent="center" p={2} mt={3}>
                <CunstomAvatar
                alt="Tomoaki Nakazawa Icon"
                src="/sake.svg"
                />
            </Box>
            <Box display="flex" justifyContent="center">
                <h2>Tomoaki Nakazawa</h2>
            </Box>
            <Box display="flex" justifyContent="center" mt={-2}>
                <List style={{ textAlign: "center"}}>
                    {Contacts.map(contact => (
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => redirectTo(contact.url)}>
                                <ListItemIcon>
                                    <img src={contact.icon} width={snsIconSize} height={snsIconSize} />
                                </ListItemIcon>
                                <ListItemText primary={contact.accountName} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </div>
    )
}

export default Profile;
