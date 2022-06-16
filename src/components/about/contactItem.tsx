import { Grid, Link, Typography } from "@mui/material";
import React from "react";
import { Contact } from "./about";

// type Props = {
//     serviceName: string
//     accountName: string
//     url: string
// }

const ContactItem: React.FC<Contact> = (props: Contact) => {

    const { serviceName, accountName, url } = props;

    return (
        <Grid container spacing={5} alignItems="center" justifyContent="space-around" flexWrap="nowrap" style={{ padding: 5}}>
            <Grid item xs={6}>
                <Typography variant="h5" textAlign="left">
                    {serviceName}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Link href={url} underline="none" >
                    {accountName}
                </Link>
            </Grid>
        </Grid>
    )
}

export default ContactItem;