import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
}));

const bodFormatted = (input) => {
  const result = input.split('T')[0]
  return result
}

export default function CardItem(props) {
  const { user } = props
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreHorizIcon />
          </IconButton>
        }
        title="Personnel ID"
        subheader={`${user.id.value}`}
      />
      <Divider />
      {/* <Avatar alt="avatar" src={user.picture.large} /> */}
      <CardMedia
        className={classes.media}
        image={`${user.picture.large}`}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body1" color="primary" style={{ fontWeight: 'bold' }}>
          Name
        </Typography>
        <Typography variant="body1" color="primary" style={{ marginBottom: '1rem' }}>
          {user.name.first} {user.name.last}
        </Typography>
        <Typography variant="body1" color="primary" style={{ fontWeight: 'bold' }}>
          Telephone
        </Typography>
        <Typography variant="body1" color="primary" style={{ marginBottom: '1rem' }}>
          {user.phone}
        </Typography>
        <Typography variant="body1" color="primary" style={{ fontWeight: 'bold' }}>
          Birthday
        </Typography>
        <Typography variant="body1" color="primary" style={{ marginBottom: '1rem' }}>
          {bodFormatted(user.dob.date)}
        </Typography>
        <Typography variant="body1" color="primary" style={{ fontWeight: 'bold' }}>
          Email
        </Typography>
        <Typography variant="body1" color="primary" style={{ marginBottom: '1rem' }}>
          {user.email}
        </Typography>
      </CardContent>
    </Card>
  );
}
