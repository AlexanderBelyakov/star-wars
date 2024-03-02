import './CharacterCard.css'

export function CharacterCard({receivedCharacter, onCardClick}) {

    function renderSwitch(param) {
        switch(param){
            case 'male': return 'character-card__gender_male';
            case 'female': return 'character-card__gender_female';
            case 'hermaphrodite': return 'character-card__gender_hermaphrodite';
            default: return 'character-card__gender_na';
        }
    }

    function handleClick() {
        onCardClick(receivedCharacter)
    }

    return (
        <div className="character-card" onClick={handleClick}>
            <p className="character-card__name">{receivedCharacter.name}</p>
            <div className="character-card__info">
                <p className="character-card__number">{receivedCharacter.height !== `unknown` ? receivedCharacter.height : ''}</p>
                <p className="character-card__number">{receivedCharacter.mass  !== `unknown` ? receivedCharacter.mass : ''}</p>
            </div>
            <div className="character-card__info">
                <p className="character-card__caption">height</p>
                <p className="character-card__caption">mass</p>
            </div>
            <div className="character-card__info">
                <p className={`character-card__gender ${renderSwitch(receivedCharacter.gender)}`}>{receivedCharacter.gender}</p>
                <p className="character-card__birthday">{receivedCharacter.birth_year !== `unknown` ? receivedCharacter.birth_year : ''}</p>
            </div>
        </div>
    )
}