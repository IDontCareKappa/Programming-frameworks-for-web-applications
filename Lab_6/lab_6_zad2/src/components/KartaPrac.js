function KartaPrac(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Opis zadania</th>
                    <th>Nazwa</th>
                    <th>Data</th>
                    <th>Priorytet</th>
                </tr>
            </thead>
            {props.dziennik.map((v, i) => {
                var prior = (v[3] === 0) ? 'NIE' :'TAK';
                return <tr>
                    <th>{v[0]}</th>
                    <th>{v[1]}</th>
                    <th>{v[2]}</th>
                    <th>{prior}</th>
                </tr>
            })}
        </table>
    )
}
export default KartaPrac