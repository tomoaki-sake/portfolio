import styled from "@emotion/styled";
import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CustonCard = styled(Card)({
    width: 600,
    maxWidth: "100%"
})

type Skill = {
    key: string
    value: string
}

const SkillList: Skill[] = [
    {
        key: "言語",
        value: "JavaScript / TypeScript / C# / Python / Go / Dart"
    },
    {
        key: "フレームワーク",
        value: "React / WPF / Django / Flutter"
    },
    {
        key: "DB - データベース",
        value: "PostgreSQL / PostGIS / SQL Server / Firestore"
    },
    {
        key: "その他",
        value: "Docker / Hyper-V / Elasticsearch / ArcGIS / QGIS / GraphQL / Tooljet(low code) / Figma / VSCode / Visual Studio / Github "
    },
]

const Skills: React.FC = () => {
    return (
        <div style={{ marginTop: 50}}>
            <Typography variant="h5" style={{ textAlign: "center", textDecoration: "underline", textUnderlineOffset: "0.3rem", textDecorationThickness: "4px"}}>
                Skills
            </Typography>
            <Box mt={3}>
                {SkillList.map(skill => (
                <Box display="flex" justifyContent="center" m={1}>
                    <CustonCard>
                        <CardContent>
                            <Typography variant="h6">
                                {skill.key}
                            </Typography>
                            <Typography color="textSecondary">
                                {skill.value}
                            </Typography>
                        </CardContent>
                    </CustonCard>
                </Box>
                ))}
            </Box>
        </div>
    )
}

export default Skills;