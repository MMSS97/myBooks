import { Book } from "./book";

export class Respuesta {
    constructor(public error: boolean,
                public codigo: number,
                public mensaje: Book,
                public data: Book[]){}
}
