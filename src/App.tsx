
import { RickAndMortyCharacter } from "./types/RickAndMortyCharacter.ts";
import { Characters } from "./assets/RickAndMortyCharacters.ts";
import { useState } from 'react';
import RickAndMortyCharacterGallery from "./components/RickAndMortyCharacterGallery.tsx";


export default function App() {
    const [rickAndMortyCharacters] = useState<RickAndMortyCharacter[]>(Characters);

    return (
        <div>
            <h1>Rick and Morty Character Gallerie</h1>
            <section>
                <RickAndMortyCharacterGallery characters={rickAndMortyCharacters}/>
            </section>
        </div>
    );
}