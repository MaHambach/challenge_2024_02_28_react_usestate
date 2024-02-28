import { RickAndMortyCharacter} from "../types/RickAndMortyCharacter.ts";
import RickAndMortyCharacterCard from "./RickAndMortyCharacterCard.tsx";
import { useState } from 'react';
import SearchComponent from "./SearchComponent.tsx";

type RickAndMortyCharacterGalleryProps = {
    characters: RickAndMortyCharacter[];
}
export default function RickAndMortyCharacterGallery(props: Readonly<RickAndMortyCharacterGalleryProps>): JSX.Element {
    const [filteredCharacters, setFilteredCharacters] = useState<RickAndMortyCharacter[]>(props.characters);

    function filterCharacters(searchString: string):void {
        setFilteredCharacters(props.characters.filter((character: RickAndMortyCharacter) => {
            return character.name.toLowerCase().includes(searchString.toLowerCase());
        }));
    }

    const characters: JSX.Element[] = filteredCharacters.map((character: RickAndMortyCharacter) => {
        return <RickAndMortyCharacterCard key={character.id} {...character}/>;
    });

    return (
        <div className="RickAndMortyCharacterGallery">
            <SearchComponent handleSearchText={filterCharacters} />
            {characters.length ? characters : <p>Keine Charaktere gefunden</p>}
        </div>
    );
}

