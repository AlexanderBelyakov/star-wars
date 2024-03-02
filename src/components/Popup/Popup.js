import './Popup.css'
import hermaphrodite from '../../images/SWhermaphrodite.svg'
import male from '../../images/SWmale.svg'
import female from '../../images/SWfemale.svg'

export function Popup({close, card}) {
    function renderSwitch(param) {
        switch(param){
            case 'male': return 'character-card__gender_male';
            case 'female': return 'character-card__gender_female';
            case 'hermaphrodite': return 'character-card__gender_hermaphrodite';
            default: return 'character-card__gender_na';
        }
    }

    function imageSwitch(param) {
        switch(param){
            case 'male': return male;
            case 'female': return female;
            default: return hermaphrodite;
        }
    }

    return (
        <div className={`popup  ${card ? "popup_opened" : ""}`}>
            <div className="popup__overlay" onClick={close}></div>
            <button className="popup__close" onClick={close}></button>
            <div className="popup__card">
                <div className="popup__first-section">
                    <img className="popup-card__image" src={imageSwitch(card?.gender)} alt='gender'/>
                    <div className="popup-card__info">
                        <p className={`character-card__gender ${renderSwitch(card?.gender)}`}>{card?.gender}</p>
                        <p className="character-card__birthday">{card?.birth_year}</p>
                    </div>
                </div>
                <div className="popup__second-section">
                    <p className="popup__name">{card?.name}</p>
                    <div className="popup__color-info">
                        <p className="popup__color">hair color: {card?.hair_color}</p>
                        <p className="popup__color">skin color: {card?.skin_color}</p>
                        <p className="popup__color">eye color: {card?.eye_color}</p>
                    </div>
                    <div className="popup__dimensions">
                        <div className="popup__dimension">
                            <p className="popup__dimension-number">{card?.height}</p>
                            <p className="popup__dimension-caption">height</p>
                        </div>
                        <div className="popup__dimension">
                            <p className="popup__dimension-number">{card?.mass}</p>
                            <p className="popup__dimension-caption">mass</p> 
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}