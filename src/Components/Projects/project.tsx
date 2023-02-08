import React from 'react';
import axios from 'axios';
import {styled} from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {Chip, Grid, Card, CardContent, Button} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import {PROJECT_DETAILS} from '../../Constants/data';
import {Alert} from '@mui/material';
import './project.css'

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={3} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(4),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const link = process.env.REACT_APP_LINK


export default function Projects() {

  const [projectLikes, setProjectLikes] = React.useState<string[]>([]);
  const [message, setMessage] = React.useState("");
  const [likedTitle, setLikedTitle] = React.useState("")

  const getAllLikes = async () => {
    await axios.get(`${link}/likes`)
      .then(res => {
        let updatedLikes = [...projectLikes]
        res.data.map((project:any) => (
          updatedLikes[project.id] = project.likes
        ))
        setProjectLikes(updatedLikes);
      })
      .catch(error => console.error(error));
  }

  const handleLike = async (id: number, title: string) => {
    await axios.post(`${link}/like`, {
      id: id,
      title: title,
      likes: projectLikes[id] ? projectLikes[id] : 0
    })
      .then(res => {
        setMessage(res.data.message);
        setLikedTitle(res.data.title);
        getAllLikes();
      });
  }

  React.useEffect(() => {
    getAllLikes();
  }, [])

  return (
    <Card className='project-container'>
      <CardContent>
        {
          PROJECT_DETAILS?.map(project => {
            return (
              <Card key={project.title}>
                <Accordion>
                  <AccordionSummary>
                    <Grid container justifyContent='space-between'>
                      {
                        message && likedTitle === project.title ?
                          <Alert severity='success'>{message}</Alert> : <Chip label={project.title} variant='outlined' color='info' />
                      }
                      <Chip label={project.Tag} variant='filled' color='primary' />
                    </Grid>
                    <Button onClick={() => {handleLike(project.id, project.title) }} color="error">
                      <FavoriteIcon />
                      <div>{projectLikes[project.id]}</div>
                    </Button>

                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography paragraph textAlign='left'>{project.brief}</Typography>
                    <Typography paragraph textAlign='left'>{project.features}</Typography>
                    <Typography paragraph textAlign='left'>{project.technical_details}</Typography>
                    {
                      project.tech_stack.map(techStack => {
                        return (
                          <Chip label={techStack} variant="outlined" color='success' />
                        )
                      })
                    }
                  </AccordionDetails>
                </Accordion>
              </Card>
            )
          })
        }
      </CardContent>
    </Card>
  );
}
