import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  Grid } from '@mui/material';
import { PROFILE_DETAILS } from '../../Constants/data'
import SocialProfile from '../SocialProfiles/socialProofile';
import Comments from '../Comments/comments';
import CommentForm from '../Comments/commentForm';
import './profile.css'

export default function Profile() {
  return (
    <Card className="profile-conatiner">
      <Grid container spacing={1} >
        <Grid item xs={6}>
            <CardMedia
              style={{ height: 200, width: 200, borderRadius: 120, justifyContent: "center", padding:'0.5em' }}
              component="img"
              height="140"
              image={PROFILE_DETAILS.image}
              alt="profile image"
            />
            <CommentForm/>
        </Grid>
        <Grid item xs={6}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {PROFILE_DETAILS.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {PROFILE_DETAILS.about}
            </Typography>
              <SocialProfile />
              <Comments/>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}