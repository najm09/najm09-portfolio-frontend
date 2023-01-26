import * as React from 'react';
import './academics.css'
import { ACADEMIC_DETAILS } from '../../Constants/data'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid, Table, TableCell, TableRow } from '@mui/material';
import { Chip } from '@mui/material'
import Modal from '../Modal/modal'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Academics() {
  const [expanded, setExpanded] = React.useState(false);
  

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className = "academics-container">
      <Grid container >
        <Grid item xs={6}>
          <CardMedia
            style={{ height: 300, width: 300, borderRadius: 150, justifyContent: "center" }}
            component="img"
            height="400"
            image={ACADEMIC_DETAILS.image}
            alt="FET JMI"
          />
        </Grid>
        <Grid item xs={6}>
          <CardContent>
            <Typography variant="h6" color="text.primary">
              {ACADEMIC_DETAILS.institution}
            </Typography>
            <Typography  variant="h6" color="text.primary">
              {ACADEMIC_DETAILS.faculty}
            </Typography>
            <Typography variant="h6" color="text.primary">
              {ACADEMIC_DETAILS.department}
            </Typography>
            <Grid item xs = {6}>
              <Table>
              <Chip label={ACADEMIC_DETAILS.Batch} variant="filled" color='success' />
                <TableRow>
                  <TableCell>
                    <Typography>Year</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{ACADEMIC_DETAILS.current_year}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Semester</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{ACADEMIC_DETAILS.current_semester}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>SPI</TableCell>
                  <TableCell>{ACADEMIC_DETAILS.CPI}</TableCell>
                </TableRow>
              </Table>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
      <CardActions >
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Table>
            <Chip label="Course Work" variant = 'filled' color = "success"/>
            <TableRow>
              {
                ACADEMIC_DETAILS.course_works.map(course => {
                  return(
                    <Chip label={course} variant='outlined' color = 'secondary'/>
                  )
                })
              }
            </TableRow>
          </Table>
        </CardContent>
        
        <CardContent>
          <Chip label="Academic History" variant='filled' color='info' />
          <Modal/>
          <Grid container>
            <Grid item >
              <Table>
                <TableRow>
                  <TableCell>Extracurricular Activities</TableCell>
                  <TableCell>{ACADEMIC_DETAILS.extra_curricullar_activities.position}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Organization</TableCell>
                  <TableCell>{ACADEMIC_DETAILS.extra_curricullar_activities.organization}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Accomplishment</TableCell>
                  <TableCell>{ACADEMIC_DETAILS.extra_curricullar_activities.summary}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tech Stacks</TableCell>
                  <TableCell>
                    {
                      ACADEMIC_DETAILS.extra_curricullar_activities.Tech_stacks.map(ts => {
                        return (
                          <Chip label={ts} variant='outlined' color='warning'/>
                        )
                      })
                    }
                  </TableCell>
                </TableRow>
              </Table>
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}