import './Characters.css'
import { Filter } from '../Filter/Filter'
import { useEffect, useState } from 'react'
import api from '../../utils/Api'
import { CharactersList } from '../CharactersList/CharactersList'
import showMore from '../../images/SWshowmore.svg'
import Preloader from '../Preloader/Preloader'

export function Characters({onCardClick}) {
    const [charactersList, setCharactersList] = useState({})
    const [charsArray, setCharsArray] = useState([])
    const [eyeColor, setEyeColor] = useState()
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        api
        .getCards(page)
        .then((chars) => {
            handleAnableLoader()
            setCharactersList(chars)
            setCharsArray(chars.results)
            setPage(page)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [page])

    useEffect(() => {
        if(eyeColor === 'all' || eyeColor === undefined) {
            setCharsArray(charactersList.results)
        } else {
            setCharsArray(charactersList.results?.filter(function (el) {
            return el.eye_color === eyeColor
            }
        ))}
    }, [eyeColor, charactersList.results])

    function handleAnableLoader() {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }

    function handleClickShowMore() {
        if(page+1 <= Math.ceil((charactersList.count / 10)) && charactersList.next) {   
            setPage(page+1)
            handleAnableLoader()
        }
    }

    function handleClickShowLess() {
        if(page-1 > 0 && charactersList.previous) {
            setPage(page-1)
            handleAnableLoader()
        }
    }

    function handleChoseEyeColor(color) {
        setEyeColor(color)
    }

    return (
        <main className="characters">
            <p className="characters__language">language: en</p>
            <h1 className="characters__header"><strong>{charactersList.count} Peoples</strong> for you to choose your favorite</h1>
            <Filter receivedCallback={handleChoseEyeColor} />
            {isLoading ? <Preloader isOn={isLoading}/> : (<><CharactersList receivedCharactersList={charsArray} onCardClick={onCardClick}/>
            <div className="characters__pagination">
                <button className="characters__show-more-button" onClick={handleClickShowLess}>
                    <img src={showMore} alt="Show more" title="Previous page"/>
                </button>
                <p className="characters__page-number">{page}</p>
                <button className="characters__show-more-button" onClick={handleClickShowMore}>
                    <img src={showMore} alt="Show more" title="Next page"/>
                </button>
            </div>
            </>)}
        </main>
    )
}