import React from "react";
import { Typography } from "@mui/material";

const About: React.FC = () => {

    return (
        <div style={{ marginTop: 50}}>
            <Typography variant="h5" style={{ textAlign: "center", textDecoration: "underline", textUnderlineOffset: "0.3rem", textDecorationThickness: "4px"}}>
                About
            </Typography>
            <Typography variant="body1" style={{textAlign: "center"}} mt={3}>
                滋賀県出身。大学院まで関西育ち。なぜか大分在住の中澤朋亮です。<br />
                現在はtoGメインのエンジニアとして働いています。<br/>
                個人的にGoとTypeScriptを勉強中です。<br/>
                日本酒が好きすぎてアイコン作りました。京都の「蒼空」がモデルです。
            </Typography>
        </div>
    )
}

export default About;