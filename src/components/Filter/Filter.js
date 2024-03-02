import './Filter.css'

export function Filter({receivedCallback}) {
    function choseColor(evt) {
        receivedCallback(evt.target.value)
    }
    return (
        <div className="filter">
            <label className="filter__label">color eye</label>
            <select className="filter__select" onChange={choseColor}>
                <option className="filter__option" value={'all'}>All</option>
                <option className="filter__option" value={'brown'}>brown</option>
                <option className="filter__option" value={'red'}>red</option>
                <option className="filter__option" value={'blue'}>blue</option>
                <option className="filter__option" value={'white'}>white</option>
            </select>
        </div>
    )
}