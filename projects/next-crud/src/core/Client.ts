export default class Client {
    //# - indica que o atributo é private
    #id: string
    #name: string
    #age: number

    constructor(name: string, age: number, id: string = null){
        this.#name = name
        this.#age = age
        this.#id = id
    }

    static empty(){
        return new Client('', 0)
    }

    get id(){
        return this.#id
    }

    get name(){
        return this.#name
    }

    get age(){
        return this.#age
    } 
}

export const ClientConverter = {
    toFirestore: (client: Client) => {
        return {
            name: client.name,
            age: client.age,
        };
    },
  
    fromFirestore: (snapshot: any, options: any) => {
        const data = snapshot.data(options);
        return new Client(data.name, data.age, snapshot.id);
    }
  }