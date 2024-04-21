import axios from "axios";

export interface HttpAdapter{

    get<T>(url: string) : Promise<T>;
}


export class PokeApiFetchAdapter implements HttpAdapter {

    async get<T>():Promise<T> {
        // peticion get
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon/4');
        const data: T = await resp.json();
        console.log('Con fetch' )
        return data;
    }

}

export class PokeApiAdapter {
    private readonly axios = axios;

    async get<T>( url: string ): Promise<T> {
        // peticion get
        const { data } = await this.axios.get<T>(url);
        console.log('Con axios');
        return data;

    }

    async post( url: string, data: any ){

    }

    async patch( url: string, data: any ){
        
    }

    async delete( url: string ){
        
    }

}