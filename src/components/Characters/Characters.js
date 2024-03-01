import './Characters.css'
import { Filter } from '../Filter/Filter'
import { useEffect, useState } from 'react'
import api from '../../utils/Api'
import { CharactersList } from '../CharactersList/CharactersList'
import showMore from '../../images/SWshowmore.svg'

export function Characters() {
    const [charactersList, setCharactersList] = useState({})
    const [page, setPage] = useState(1)

    useEffect(() => {
        api
        .getCards(page)
        .then((chars) => {
            setCharactersList(chars)
            setPage(page)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [page])

    function handleClickShowMore() {
        if(page+1 <= Math.ceil((charactersList.count / 10)) && charactersList.next) {   
            setPage(page+1)
        }
    }

    function handleClickShowLess() {
        if(page-1 > 0 && charactersList.previous) {
            setPage(page-1)
        }
    }

    return (
        <main className="characters">
            <p className="characters__language">language: en</p>
            <h1 className="characters__header"><strong>{charactersList.count} Peoples</strong> for you to choose your favorite</h1>
            <Filter />
            <CharactersList receivedCharactersList={charactersList.results}/>
            <div className="characters__pagination">
                <button className="characters__show-more-button" onClick={handleClickShowLess}>
                    <img src={showMore} alt="Show more" title="Previous page"/>
                </button>
                <p className="characters__page-number">{page}</p>
                <button className="characters__show-more-button" onClick={handleClickShowMore}>
                    <img src={showMore} alt="Show more" title="Next page"/>
                </button>
            </div>
        </main>
    )
}