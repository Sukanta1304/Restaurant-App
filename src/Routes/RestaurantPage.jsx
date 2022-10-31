import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";

function RestaurantPage() {
  const id= useParams();
  const [data, setData] = useState({});
  const [type, setType] = useState("")
  //console.log(data);
const [loading, setLoading] = useState(false)

function getData(){
  setLoading(true)
  fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id.id}`)
  .then((res)=>res.json())
  .then((res)=> {
    //console.log(res)
    setData(res.data);
    setType(res.data.type)
    setLoading(false)

  })
}

useEffect(()=>{
  getData()
},[id.id])



  const str= type.split("_");
  let getType= "";
  for(let i=0 ;i<str.length;i++){
    for(let j=0;j<str[i].length;j++){
      if(j==0){
        getType+=(str[i][j].toUpperCase());
      }else{
        getType+=(str[i][j])
      }
    }
    getType+= " "
  }


  console.log(getType);

  return (
    <div data-testid="restaurant-container">
      {loading && <Loader/>}
      <img src={data.image} data-testid="restaurant-image" width={"100%"} />
      <div>
        <h4 data-testid="restaurant-name">{data.name}</h4>
      </div>
      <div className="flex">
        <div>
          Type:
          <b data-testid="restaurant-type">{getType.trim()}</b>
        </div>
        <div>
          Rating:
          <b data-testid="restaurant-rating">{data.rating}</b>
        </div>
      </div>
      <div className="flex">
        <div>
          Votes:
          <b data-testid="restaurant-votes">{data.number_of_votes}</b>
        </div>
        <div>
          Starting Price:
          <b data-testid="restaurant-price">{data.price_starts_from}</b>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default RestaurantPage;
