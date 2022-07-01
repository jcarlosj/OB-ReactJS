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
        [ stateComponent, setStateComponent ] = useState({
            current: {
                like: 0,
                unlike: 0,
            },
            total: {
                likes: 0,
                unlikes: 0,
            },
            voted: false
        }),

        { current: { like, unlike }, total: { likes, unlikes }, voted } = stateComponent;
        
    console.log( joke, loading, error );

    const handleLike = () => {

        if( ! voted ) {
            setStateComponent( prevState => ({
                ...prevState,
                current: {
                    ...prevState.current,
                    like: prevState.current.like + 1
                },
                total: {
                    ...prevState.total,
                    likes: prevState.total.likes + 1
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
                total: {
                    likes: prevState.total.likes + 1,
                    unlikes: prevState.total.unlikes - 1
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
                total: {
                    ...prevState.total,
                    unlikes: prevState.total.unlikes + 1
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
                total: {
                    likes: prevState.total.likes - 1,
                    unlikes: prevState.total.unlikes + 1
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
                    </div>
                </CardContent>
                <Alert severity="info">Las votaciones son simuladas. Solo se puede votar una ves por chiste, se puede cambiar el voto haciendo click en el botón contrario.</Alert>  
            </Card>
        </div>
    );
};


export default Joke;