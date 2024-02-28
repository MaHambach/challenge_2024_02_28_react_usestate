import './RickAndMortyCharacterCard.css';
import { RickAndMortyCharacter } from '../types/RickAndMortyCharacter';

type RickAndMortyCharacterCardProps = RickAndMortyCharacter;

export default function RickAndMortyCharacterCard(props: Readonly<RickAndMortyCharacterCardProps>): JSX.Element {
    return (
        <article className="RickAndMortyCharacterCard">
            <div className={"RickAndMortyCharacterCard_ImageContainer"}>
                <img className={"RickAndMortyCharacterCard_Image"} src={props.image} alt={props.name} />
            </div>
            <div className={"RickAndMortyCharacterCard_Content"}>
                <div className={"section"}>
                    <h2>{props.name}</h2>
                </div>
                <span className={"status"}>
                    {props.status} - {props.species}
                </span>
                <div className={"section"}>
                    <span className={"text-gray"}>Last known location:</span>
                    {
                        props.location ? <span>{props.location.name}</span> : <span>Unknown</span>
                    }
                </div>
                <div className={"section"}>
                    <span className={"text-gray"}>Origin:</span>
                    {
                        props.origin ? <span>{props.origin.name}</span> : <span>Unknown</span>
                    }
                </div>
            </div>
        </article>
    );
}

