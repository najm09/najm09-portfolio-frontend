import * as React from 'react';
import axios from 'axios';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar'
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Chip, Table, TableBody, TableContainer, TableRow } from '@mui/material';

interface CommentsProps {
  _id?: string;
  comment?: string;
  name?: string;
}

function BasicPopover(props: any) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const { comment } = props
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} onClick={handleClick}>
        <Chip label="See All Comments" variant='outlined' color='info' />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {
          comment ? comment.map((_comment: any) => {
            return (
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, height: '50% '}} key={_comment._id}>
                  <TableBody>
                    <TableRow>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar src="/broken-image.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                          primary={_comment.comment}
                        />
                        <Chip label={_comment.name ? _comment.name : "Anonymous"} variant="outlined" />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            )
          }) : "Loading..."
        }
      </Popover>
    </div>
  );
}


const link = process.env.REACT_APP_LINK;

export default function Comments() {

  const [comments, setComments] = React.useState([])
  const [recentComments, setRecentComments] = React.useState([])
  const [message, setMessage] = React.useState('')

  React.useEffect(() => {
    const getComments = async () => {
      await axios.get(`${link}/comments`, { withCredentials: false })
        .then(res => {
          setComments(res.data);
          setRecentComments(res.data.reverse().slice(0, 3));
        })
        .catch(error => {
          setMessage(error.message)
        })
    }
    getComments();
  }, [comments, recentComments])


  return (
    <List>
      <Chip label="Comments" variant="outlined" color='warning' />&nbsp;
      {
        recentComments ? recentComments?.map((comment: CommentsProps) => {
          return (
            <div key={comment._id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar src="/broken-image.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={comment.comment}
                />
                <Chip label={comment.name ? comment.name : "Anonymous"} variant="outlined" />
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          )
        }) : `${message}`
      }
      <BasicPopover comment={comments} />
    </List>
  )
}