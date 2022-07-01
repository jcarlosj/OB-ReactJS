import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Alert from '@mui/material/Alert';
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';


const Joke = () => {

    const
        { joke, error, loading, counter, getData } = useFetch( '/random' ),
        [ state, setState ] = useState({
            likes: 0,
            unlikes: 0,
            voted: false
        }),
        { likes, unlikes, voted } = state;
        
    console.log( joke, loading, error );

    useEffect( () => {
        console.log( loading );

        setState( prevState => ({
            ...prevState,
            joke: '',
            count: prevState.count + 1
        }));
    }, [ loading ] );

    const handleLike = () => {

        if( ! voted ) {
            setState({
                ...state,
                likes: state.likes + 1,
                voted: true
            });

            return;
        }

        if( likes === 0 ) {
            setState({
                ...state,
                likes: state.likes + 1,
                unlikes: state.unlikes - 1
            });
        }

    }

    const handleUnlike = () => {

        if( ! voted ) {
            setState({
                ...state,
                unlikes: state.unlikes + 1,
                voted: true
            });

            return;
        }

        if( unlikes === 0 ) {
            setState({
                ...state,
                unlikes: state.unlikes + 1,
                likes: state.likes - 1
            });
        }

    }

    const handleNewJoke = () => {
        setState({
            likes: 0,
            unlikes: 0,
            voted: false
        });
        getData();
    }

    return (
        <div>
            <h1 className="title">Chuck Norris jokes</h1>  
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Chuck say:
                    </Typography>
                    <Typography variant="h5" component="div">
                        {   ! error 
                                ?   loading 
                                    ?   <>Loading...</> 
                                    :   <>{ joke }</>
                                :   <>{ error }</>
                        }
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Joke # { counter }
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        onClick={ handleLike }
                    >
                        <span>{ likes }</span>
                        <ThumbUpIcon />
                    </Button>
                    <Button
                        size="small"
                        onClick={ handleUnlike }
                    >
                        <span>{ unlikes }</span>
                        <ThumbDownIcon />
                    </Button>
                    <Button
                        size="small"
                        onClick={ handleNewJoke }
                    >New Joke!</Button>
                </CardActions>
                <CardContent>
                    <div className="icons">
                        <div className="icon icon-satisfied">
                            <span>{ likes }</span>
                            <SentimentVerySatisfiedOutlinedIcon />
                        </div>
                        <div className="icon icon-dissatisfied">
                            <span>{ unlikes }</span>
                            <SentimentVeryDissatisfiedIcon />
                        </div>
                    </div>
                </CardContent>
                <Alert severity="info">Las votaciones son simuladas. Solo se puede votar una ves por chiste, se puede cambiar el voto haciendo click en el botón contrario.</Alert>  
            </Card>
        </div>
    );
};


export default Joke;