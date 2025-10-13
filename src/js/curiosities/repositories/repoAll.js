import { characters } from "./repoCharacters.js";
import { games } from "./repoGames.js";
import { consoles } from "./repoConsoles.js";

export const options = {
    'characters': characters,
    'games': games,
    'consoles': consoles
};

export const selections = [
    {
        'id': 'characters',
        'name': 'Personagens'
    },
    {
        'id': 'games',
        'name': 'Jogos'
    },
    {
        'id': 'consoles',
        'name': 'Consoles'
    }
];