import { Observable } from 'rxjs';

export const getNumbers = new Observable( subscriber => {
    /** Emitir valores al subscriptor del observable */
    subscriber.next( 1 );       // Emite un valor
    subscriber.next( 2 );       // Emite otro valor
    subscriber.next( 3 );       // Emite otro valor

    setTimeout(() => {
        subscriber.next( 4 );   // Emite otro valor 1 segundo despues
        subscriber.complete();  // Completa la tarea el observable y finaliza
    }, 1000 );
});