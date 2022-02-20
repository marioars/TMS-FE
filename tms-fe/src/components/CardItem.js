import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
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

export default function CardItem() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreHorizIcon />
          </IconButton>
        }
        // title="Personnel ID"
        subheader="September 14, 2016"
      />
      <Divider />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body1" color="primary" style={{ fontWeight: 'bold' }}>
          Name
        </Typography>
        <Typography variant="body1" color="primary" style={{ marginBottom: '1rem' }}>
          FirstName LastName
        </Typography>
        <Typography variant="body1" color="primary" style={{ fontWeight: 'bold' }}>
          Telephone
        </Typography>
        <Typography variant="body1" color="primary" style={{ marginBottom: '1rem' }}>
          Phone Number
        </Typography>
        <Typography variant="body1" color="primary" style={{ fontWeight: 'bold' }}>
          Birthday
        </Typography>
        <Typography variant="body1" color="primary" style={{ marginBottom: '1rem' }}>
          DD-MM
        </Typography>
        <Typography variant="body1" color="primary" style={{ fontWeight: 'bold' }}>
          Email
        </Typography>
        <Typography variant="body1" color="primary" style={{ marginBottom: '1rem' }}>
          Email Address
        </Typography>
      </CardContent>
    </Card>
  );
}
