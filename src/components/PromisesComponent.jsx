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

    return (
        <div>
            <h1>Promises <span>(Ejemplos)</span></h1>
            <div className="buttons">
                <div>
                    <p>Resolver funcion Asincrona</p>
                    <button
                        onClick={ obtainNumber }
                    >Obtener numero</button>
                </div>
            </div>
        </div>
    );
};


export default PromisesComponent;
