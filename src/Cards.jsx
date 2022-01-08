import react from "react";
 

function Card(props){
    return(
      <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="myPic" className="card__img"/>
          <div className="card__info">
            <spam className="card_category">{props.title}</spam>
            <h3 className="card__title">{props.sname}</h3>
            <a href={props.link} target="blank">
              <button> Watch Now</button>
              
            </a>
          </div>
        </div>
      </div>
      </>
    );
  }

  export default Card;