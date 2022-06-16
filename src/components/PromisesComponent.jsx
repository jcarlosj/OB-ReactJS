const PromisesComponent = () => {

    // Funcion asincrona que simula la generacion de un numero
    async function generateNumber() {
        return 1; 
    }
    function obtainNumber() {
        // Toda funcion asincrona se puede resolver como si fuera una promesa usando then/catch
        generateNumber()
            .then( response => alert( `Response: ${ response }` ) )
            .catch( error => alert( `Something went wrong: ${ error } ` ) )
            .finally( () => alert( `Successfully completed` ) );
    }

    // Funcion asincrona que retorna una promesa
    async function generatePromiseNumber(){
        return Promise.resolve( 2 );
    }
    function obtainPromiseNumber(){
        generatePromiseNumber()
            .then( ( response ) => alert( `Response: ${ response }`) )
            .catch( ( error ) => alert( `Something went wrong: ${ error }` ) )
            .finally( () => alert( `Successfully completed` ) );
    }

    // Funcion asincrona que retorna una promesa resuelta de establecer y obtener un valor del sessionStorage
    async function saveSessionStorage( key, value ) {
        sessionStorage.setItem( key, value );

        return Promise.resolve( sessionStorage.getItem( key ) );
    }
    function showStorage(){
        saveSessionStorage( 'name', 'Milo' )
            .then( ( response ) => {
                let value = response;
                alert( `Saved Name: ${ value }` );
            })
            .catch( ( error ) => {
                alert( `Something went wrong: ${ error }` );
            })
            .finally( () => {
                alert( 'SUCCESS: Name saved and retreived' );
            });
    }




    return (
        <div>
            <h1>Promises <span>(Ejemplos)</span></h1>
            <div className="buttons">
                <div className="example">
                    <p>Resolver funcion Asincrona que retorna un valor</p>
                    <button
                        onClick={ obtainNumber }
                    >Obtener valor</button>
                </div>
                <div className="example">
                    <p>Resolver funcion Asincrona que retorna una promesa</p>
                    <button
                        onClick={ obtainPromiseNumber }
                    >Obtener valor de una promesa</button>
                </div>
                <div className="example">
                    <p>Resolver funcion Asincrona que retorna en una promesa un valor obtenido del sessionStorage</p>
                    <button
                        onClick={ showStorage }
                    >Obtener valor del sessionStorage de una promesa</button>
                </div>
            </div>
        </div>
    );
};


export default PromisesComponent;
