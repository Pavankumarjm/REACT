import "./card.css"

function Cards(props){
    return (
        <>
            <div className="cardBox">
                <div className="title">
                    <h2>{props.title}</h2>
                </div>
                <div className="desc">
                    <p>
                        {props.desc}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Cards;