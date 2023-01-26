import { PROJECT_DETAILS } from '../../Constants/data';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {AccordionSummaryProps,} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Chip, Grid, Card, CardContent } from '@mui/material'
import ThumbUpOffAltRoundedIcon from '@mui/icons-material/ThumbUpOffAltRounded';
import axios from 'axios';
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

  const handleCount = (name:string) => {
    const body = {  name : name}
    axios.get(`${link}/project`, {data:body})
    .then(res => console.log(res));
    axios.post(`${link}/like`, {
      name : name,
    })  
  }
  return (
    <Card className='project-container'>
      <CardContent>
        {
          PROJECT_DETAILS?.map(project => {
            return (
              <Card>
                <Accordion>
                  <AccordionSummary>
                    <Grid container justifyContent='space-between'>
                      <Chip label={project.title} variant='outlined' color='info' />
                      <Chip label={project.Tag} variant='filled' color='primary' />
                    </Grid>
                    &nbsp;
                    <button onClick = {() => handleCount(project.brief)}><ThumbUpOffAltRoundedIcon color="secondary" /></button>
                    
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
