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
            .finally(() => alert( `Successfully completed` ) );
    }

    // Funcion asincrona que retorna una promesa
    async function generatePromiseNumber(){
        return Promise.resolve( 2 );
    }
    function obtainPromiseNumber(){
        generatePromiseNumber()
            .then( ( response ) => alert( `Response: ${ response }`) )
            .catch( ( error ) => alert( `Something went wrong: ${ error }` ) )
            .finally(() => alert( `Successfully completed` ) );
    }



    return (
        <div>
            <h1>Promises <span>(Ejemplos)</span></h1>
            <div className="buttons">
                <div>
                    <p>Resolver funcion Asincrona que retorna un valor</p>
                    <button
                        onClick={ obtainNumber }
                    >Obtener valor</button>
                </div>
                <div>
                    <p>Resolver funcion Asincrona que retorna una promesa</p>
                    <button
                        onClick={ obtainPromiseNumber }
                    >Obtener valor de una promesa</button>
                </div>
            </div>
        </div>
    );
};


export default PromisesComponent;
