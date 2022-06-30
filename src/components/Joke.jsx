import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
  );

const Joke = () => {
    return (
        <div>
            <h1>Joke</h1>  
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Chuck say:
                    </Typography>
                    <Typography variant="h5" component="div">
                        Joke
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Joke # 1
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">
                        <ThumbUpIcon />
                    </Button>
                    <Button size="small">
                        <ThumbDownIcon />
                    </Button>
                    <Button size="small">New Joke!</Button>
                </CardActions>
            </Card>    
        </div>
    );
};


export default Joke;