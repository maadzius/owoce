import './Warzywo.css';

function Warzywo(props){
    return(
        <div className="productBox">
            <div className="photo">
                <img src={props.warzywo.zdjecie} alt={props.warzywo.nazwa}/>
            </div>
            <div className="nazwa">
                <h2>{props.warzywo.nazwa}</h2>
            </div>
            <div className="description">
                <p>opis: {props.warzywo.opis}</p>
                <p>na stanie: {props.warzywo.ilosc}</p>
                <h2>{props.warzywo.cena} zł</h2>
            </div>
        </div>
    )
}
export default Warzywo;