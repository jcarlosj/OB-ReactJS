import { login } from '../services/axios.services.js';


const AxiosCRUD = () => {

    const authUser = () => {
        login( 'eve.holt@reqres.in', 'cityslicka' )
            .then( response => {

                if( response.data.token ) {
                    console.log( response.data );
                    alert( JSON.stringify( response.data, false, 4 ) );

                    sessionStorage.setItem( 'token', response.data.token );
                }
                else {
                    sessionStorage.removeItem( 'token' );
                    throw new Error( 'Login failed, please check your credentials' );
                }

            })
            .catch( err => {
                sessionStorage.removeItem( 'token' );
                console.log( `Something went wrong: ${ err }` );
            })
            .finally( () => console.log( `Finally Done!` ) );
    }

    return (
        <div>
            <h1>AxiosCRUD <span>(Ejemplos)</span></h1>
            <p>Se recomienda ver siempre la consola</p>

            <button
                onClick={ authUser }
            >Login</button>
        </div>
    );
};


export default AxiosCRUD;
