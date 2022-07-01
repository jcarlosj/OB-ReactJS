import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';


const Joke = () => {

    const
        { joke, error, loading, counter, getData } = useFetch( '/random' ),
        [ state, setState ] = useState({
            likes: 0,
            unlikes: 0
        }),
        { likes, unlikes } = state;
        
    console.log( joke, loading );

    useEffect( () => {
        console.log( loading );

        setState( prevState => ({
            ...prevState,
            joke: '',
            count: prevState.count + 1
        }));
    }, [ loading ] );

    return (
        <div>
            <h1>Joke</h1>  
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Chuck say:
                    </Typography>
                    <Typography variant="h5" component="div">
                        { joke }
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Joke # { counter }
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">
                        <span>{ likes }</span>
                        <ThumbUpIcon />
                    </Button>
                    <Button size="small">
                        <span>{ unlikes }</span>
                        <ThumbDownIcon />
                    </Button>
                    <Button
                        size="small"
                        onClick={ () => getData() }
                    >New Joke!</Button>
                </CardActions>
            </Card>    
        </div>
    );
};


export default Joke;