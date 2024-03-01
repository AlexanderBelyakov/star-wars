import './Filter.css'

export function Filter() {
    return (
        <div className="filter">
            <label className="filter__label">color eye</label>
            <select className="filter__select">
                <option className="filter__option">All</option>
                <option className="filter__option">brown</option>
                <option className="filter__option">red</option>
                <option className="filter__option">blue</option>
                <option className="filter__option">white</option>
            </select>
        </div>
    )
}