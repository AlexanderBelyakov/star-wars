import './CharactersList.css';
import { CharacterCard } from '../CharacterCard/CharacterCard';

export function CharactersList({receivedCharactersList}) {
    return (
        <ul className="characters-list">
            {
                receivedCharactersList?.map((obj, index) => (
                    <CharacterCard
                    key={index}
                    receivedCharacter={obj}
                    />
                ))
            }
        </ul>
    )
}