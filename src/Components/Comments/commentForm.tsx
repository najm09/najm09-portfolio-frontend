import React from "react"
import axios from "axios";
import { Input, Button, Grid, Alert } from "@mui/material"

const link = process.env.REACT_APP_LINK

const CommentForm = () => {
  const [comment, setComment] = React.useState('');
  const [name, setName] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [result, setResult] = React.useState(0)

  const handleCommentSubmit = async () => {
    if (comment === '') {
      setResult(400)
      setMessage('Comment Field is required !');
      return;
    }
    await axios.post(`${link}/post_comment`, { comment: comment, name: name ? name : '' })
      .then((response) => {
        setMessage(response.data.message)
        if(response.status === 200) setResult(200)
        else setResult(400);
      })
      .catch(error => console.log(error))
  }
  return (
    <Grid container spacing={2} pt={2} m={2}>
      {
        message ? 
        result === 200 ? 
        <Alert severity="success">{message}</Alert> : <Alert severity="warning">{message}</Alert> 
         : ""
      }
      <Grid item xs={12}>
        <Input onChange={(e: any) => setName(e.target.value)} placeholder="Name" /><br />
        <Input multiline placeholder='Write comment Here ' onChange={(e) => setComment(e.target.value)} required /><br />
        <Button variant='contained' onClick={handleCommentSubmit}>Comment</Button>
      </Grid>
    </Grid>
  )
}

export default CommentForm