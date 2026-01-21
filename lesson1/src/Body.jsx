import Cards from "./Cards";

function Body(){
    let cardArr = [
        {
            title:"Title1",
            desc:"I am title 1"
        },
        {
            title:"Title2",
            desc:"I am title 2"
        },
        {
            title:"Title3",
            desc:"I am title 3"
        },
        {
            title:"Title4",
            desc:"I am title 4"
        },
        {
            title:"Title5",
            desc:"I am title 5"
        },
        
    ]
  return (
    <>
    <h1>welcome to ReactJs Course in Kannada</h1>
    {
        cardArr.map((element,index)=>(
            <Cards title={element.title} desc={element.desc}/>
        ))
    }
    </>
  )
}

export default Body;