import { useState } from 'react'
function Formularz({ dodajZadanie }) {
    const [opis, ustawOpis] = useState()
    const [nazwa, ustawNazwe] = useState()
    const [data, ustawDate] = useState()
    const [priorytet, ustawPriorytet] = useState(0)
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!e.target.opis.value){
            alert("Nie podano opisu!")
        } else if (!e.target.nazwa.value){
            alert("Nie podano nazwy!")
        } else if (!e.target.data.value){
            alert("Nie podano daty")
        } 
        
        dodajZadanie([opis, nazwa, data, priorytet])
        
    }
    return (
        <form onSubmit={e => { handleSubmit(e) }}>
            <label>Opis pracy:</label> <br />
            <input name='opis' type='text' value={opis}
                onChange={e => ustawOpis(e.target.value)} /> <br />
            <label>Nazwa:</label> <br />
            <input name='nazwa' type='text' value={nazwa}
                onChange={e => ustawNazwe(e.target.value)} /> <br />
            <label>Date:</label> <br />
            <input name='data' type='date' value={data}
                onChange={e => ustawDate(e.target.value)} /> <br />
            <label>Priorytet:</label> 
            <input name='priorytet' type='checkbox' value={priorytet} 
                onChange={e => ustawPriorytet(e.target.priorytet)} /> <br />
            <input type='submit' value='Dodaj zadanie' />
        </form>
    )
}
export default Formularz