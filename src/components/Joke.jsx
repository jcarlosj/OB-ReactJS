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
import HelpOutlineSharpIcon from '@mui/icons-material/HelpOutlineSharp';


const Joke = () => {

    const
        { joke, error, loading, counter, getData } = useFetch( '/random' ),
        [ stateComponent, setStateComponent ] = useState({
            current: {
                like: 0,
                unlike: 0,
            },
            total_votes: {
                likes: 0,
                unlikes: 0,
            },
            total_not_voted: 0,
            voted: false
        }),

        { current: { like, unlike }, total_votes: { likes, unlikes }, total_not_voted, voted } = stateComponent;
        
    console.log( joke, loading, error );

    const handleLike = () => {

        if( ! voted ) {
            setStateComponent( prevState => ({
                ...prevState,
                current: {
                    ...prevState.current,
                    like: prevState.current.like + 1
                },
                total_votes: {
                    ...prevState.total_votes,
                    likes: prevState.total_votes.likes + 1
                },
                voted: true
            }));

            return;
        }

        if( like === 0 ) {
            setStateComponent( prevState => ({
                ...prevState,
                current: {
                    like: prevState.current.like + 1,
                    unlike: prevState.current.unlike - 1
                },
                total_votes: {
                    likes: prevState.total_votes.likes + 1,
                    unlikes: prevState.total_votes.unlikes - 1
                }
            }));
        }

    }

    const handleUnlike = () => {

        if( ! voted ) {
            setStateComponent( prevState => ({
                ...prevState,
                current: {
                    ...prevState.current,
                    unlike: prevState.current.unlike + 1
                },
                total_votes: {
                    ...prevState.total_votes,
                    unlikes: prevState.total_votes.unlikes + 1
                },
                voted: true
            }));

            return;
        }

        if( unlike === 0 ) {
            setStateComponent( prevState => ({
                ...prevState,
                current: {
                    like: prevState.current.like - 1,
                    unlike: prevState.current.unlike + 1
                },
                total_votes: {
                    likes: prevState.total_votes.likes - 1,
                    unlikes: prevState.total_votes.unlikes + 1
                }
            }));
        }

    }

    const handleNewJoke = () => {
        setStateComponent( prevState => ({
            ...prevState,
            current: {
                like: 0,
                unlike: 0
            },
            total_not_voted: ( prevState.current.like === 0 && prevState.current.unlike === 0 ) ? prevState.total_not_voted + 1 : prevState.total_not_voted,
            voted: false
        }));

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
                        <span>{ like }</span>
                        <ThumbUpIcon />
                    </Button>
                    <Button
                        size="small"
                        onClick={ handleUnlike }
                    >
                        <span>{ unlike }</span>
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
                        <div className="icon icon-question">
                            <span>{ total_not_voted }</span>
                            <HelpOutlineSharpIcon />
                        </div>
                    </div>
                </CardContent>
                <Alert severity="info">Las votaciones simuladas. Solo se puede votar una ves por chiste. Se cambia el voto haciendo click en la opción contraria. Se muestra la cantidad de chistes que se han visualizado y el total de votos: los que gustan, los que no gustan, la cantidad de chistes sin voto.</Alert>  
            </Card>
        </div>
    );
};


export default Joke;