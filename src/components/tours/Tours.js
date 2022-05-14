function Tours(props){
return(
    <>
     <p>{props.id}</p> 
     <p>{props.name}</p>
     <p>{props.info}</p>
     <p>{props.price}</p>
     <img src={props.image} alt={props.alt} />  


     <p> ==============</p>


    </>
)

}
export default Tours;