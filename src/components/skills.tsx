import styled from '@emotion/styled'
import { Card, CardContent, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { SkillList } from '../data/skills'

const CustomCard = styled(Card)({
  width: 600,
  maxWidth: '100%',
})

const Skills: React.FC = () => {
  return (
    <div style={{ marginTop: 50 }}>
      <Typography variant='h5' className='title'>
        Skills
      </Typography>
      <Box mt={3}>
        {SkillList.map((skill) => (
          <Box display='flex' justifyContent='center' m={1}>
            <CustomCard>
              <CardContent>
                <Typography variant='h6'>{skill.key}</Typography>
                <Typography color='textSecondary'>{skill.value}</Typography>
              </CardContent>
            </CustomCard>
          </Box>
        ))}
      </Box>
    </div>
  )
}

export default Skills
