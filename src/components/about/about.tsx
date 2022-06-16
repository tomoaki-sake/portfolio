import React from "react";
import { Avatar, Typography, Grid, Box, Stack } from "@mui/material";
import { styled } from '@mui/material/styles';
import ContactItem from "./contactItem";

const iconSize = 300;

const CunstomAvatar = styled(Avatar)({
    width: iconSize,
    height: iconSize, 
    border: "solid 1px #000000"
})

export type Contact = {
    serviceName: string
    accountName: string
    url: string
}

const Contscts: Contact[] = [
    {
        serviceName: "Github",
        accountName: "@tomoaki-sake",
        url: "https://github.com/tomoaki-sake"
    },
    {
        serviceName: "Twitter",
        accountName: "@maiko_sake",
        url: "https://twitter.com/maiko_sake"
    },
    {
        serviceName: "Instagram",
        accountName: "@maiko_sake",
        url: "https://instagram.com/maiko_sake"
    },
]

const About: React.FC = () => {

    return (
        <div>
            <h1 style={{textAlign: "center"}} id="About">About</h1>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={6}>
                    <Box display="flex" justifyContent="center" p={2}>
                        <CunstomAvatar
                        alt="Tomoaki Nakazawa Icon"
                        src="/sake.svg"
                        />
                    </Box>
                    <Box display="flex" justifyContent="center" p={1}>
                        <h2>Tomoaki Nakazawa</h2>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="body1">
                        滋賀県出身。大学院まで関西育ち。なぜか大分在住の中澤朋亮です。<br />
                        現在はtoGメインのエンジニアとして働いています。<br/>
                        個人的にGoとTypeScriptを勉強中です。<br/>
                        日本酒が好きすぎてアイコン作りました。京都の「蒼空」がモデルです。
                    </Typography>
                    <Stack style={{ marginTop: 10}}>
                        {Contscts.map(contact => (
                            <ContactItem serviceName={contact.serviceName} accountName={contact.accountName} url={contact.url} />
                        ))}
                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}

export default About;