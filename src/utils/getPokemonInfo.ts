import { pokeApi } from "../../api";
import { PokemonResponse } from "../../interfaces";

export const getPokemonInfo = async (nameOrId: string) => {
    try {
        const { data } = await pokeApi.get<PokemonResponse>(`/pokemon/${ nameOrId }`);

        return {
            id: data.id,
            name: data.name,
            sprites: data.sprites
        }
    } catch (error) {
        return null;
    }
}