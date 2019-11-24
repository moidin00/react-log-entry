import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard({entries, loaded}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/down.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Link to="/log_entries/details">
        <Button size="small"  color="primary">
          Learn More
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}


// import React from 'react'


// function renderNone(loaded) {
//     return <tr>
//         <td colSpan={2}>
//             {
//                  loaded   
//                  ? "there are no log entries to display"
//                 : "loading..."
//             }
            
//         </td>
//     </tr>
    
// }
// console.log(renderNone)
// function renderEntries(entries){
//     return entries.map(entry => <tr cellSpacing={0} key={entry.id}>
//     <td>{entry.no}</td>
//     <td>{entry.type}</td>
//     </tr>)
// }
// export default function LogEntryTable({entries, loaded}) {
//     return <table width="100%">
//         <thead>
//             <tr>
//                 <th>N.o</th>
//                 <th>Type</th>
//             </tr>
//         </thead>
//         <tbody>
           
//                 {
//                     entries.length > 0 ? renderEntries(entries) : renderNone(loaded)
//                 }
            
//         </tbody> 
//     </table>
// }
//create/install a redux setup and configure redux middlware in src/config/store