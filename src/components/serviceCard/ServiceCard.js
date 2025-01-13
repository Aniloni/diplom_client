// import './ServiceCard.scss'

// const ServiceCard = function(cardText){
//     return (
//         <div className="x ServiceCard" >
//             <p id="ServiceCardid" className="ServiceCardText">{cardText.cardText}</p>
//         </div> 
//     )
// }

// export default ServiceCard;
import './ServiceCard.scss'

const ServiceCard = function({ cardText, onClick }) {
    return (
        <div className="x ServiceCard" onClick={() => onClick(cardText)}>
            <p id="ServiceCardid" className="ServiceCardText">{cardText}</p>
        </div> 
    );
}

export default ServiceCard;
