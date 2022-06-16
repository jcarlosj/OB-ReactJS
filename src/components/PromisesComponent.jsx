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

    // Funcion asincrona que retorna una promesa resuelta exitosamente
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

    // Funcion que crea la instancia de una promesa que se resuelve usando Async/Await
    async function obtainMessage(){

        let promise = new Promise( ( resolve, reject ) => {
            setTimeout(() => resolve( 'Hello World' ), 2000 );
        });

        let message = await promise;

        await alert( `Message received: ${ message }` );

    }

    // Funcion asincrona que retorna una promesa NO resuelta
    const returnError = async() => {
        await Promise.reject( new Error( 'Oooops!' ) );
    }

    const consumeError = () => {
        returnError()
            .then( ( response ) => alert( `Everything is OK: ${ response }` ) )
            .catch ( ( error ) => alert( `Something went wrong: ${ error } ` ) )
            .finally( () => alert( 'Finally executed' ) );
    }

    // Funcion asincrona que hace una peticion a una URL errada o inexistente
    const urlNotFound = async () => {
        try {
            let response = await fetch( 'https://invalidURL.com' );
            alert( `Response: ${ JSON.stringify( response ) }` );
        }
        catch ( error ) {
            alert( `Something went wrong with your URL: ${ error } (check your console)` );
        }
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
                    <p>Resolver funcion Asincrona que retorna una promesa resuelta exitosamente</p>
                    <button
                        onClick={ obtainPromiseNumber }
                    >Obtener valor de una promesa</button>
                </div>
                <div className="example">
                    <p>Resolver funcion Asincrona que retorna en una promesa un valor obtenido del sessionStorage</p>
                    <button
                        onClick={ showStorage }
                    >Obtener valor del sessionStorage</button>
                </div>
                <div className="example">
                    <p>Funcion que crea la instancia de una promesa que se resuelve usando Async/Await</p>
                    <button
                        onClick={ obtainMessage }
                    >Recibe mensaje en 2 segundos</button>
                </div>
                <div className="example">
                    <p>Resolver funcion Asincrona que retorna una promesa NO resuelta</p>
                    <button
                        onClick={ consumeError }
                    >Error</button>
                </div>
                <div className="example">
                    <p>Resolver funcion asincrona que hace una peticion a una URL errada o inexistente</p>
                    <button
                        onClick={ urlNotFound }
                    >URL errada o inexistente</button>
                </div>
            </div>
        </div>
    );
};


export default PromisesComponent;
