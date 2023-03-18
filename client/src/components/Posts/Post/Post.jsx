import React from 'react'
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import {ThumbUpAlt, DeleteForever} from '@material-ui/icons'
import moment from 'moment'
const Post = ({post}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.title}</Typography>
        <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>

      </div>
    </Card>
  )
}

export default Post