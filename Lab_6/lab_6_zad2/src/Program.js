import { useState } from 'react'
import KartaPrac from './components/KartaPrac'
import Formularz from './components/Formularz'
function Program() {
    const [dziennikZadan, ustawDziennikZadan] = useState([])
    const dodajPrace = (zadanie) => {
        let zadania = [...dziennikZadan, zadanie]
        console.log("dodajPrace program.js")
        ustawDziennikZadan(zadania)
    }
    return (
        <section>
            <Formularz dodajPrace={dodajPrace} />
            <KartaPrac dziennik={dziennikZadan} />
        </section>
    )
}
export default Program