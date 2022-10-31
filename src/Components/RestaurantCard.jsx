import { Link } from "react-router-dom";

export default function RestaurantCard({props}) {
  const {name,rating,type,price_starts_from,id}= props ;
  const str= props.type.split("_");
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
  return (
    <tr data-testid="item">
      <td>
        <Link data-testid="name" to={`/restaurants/${id}`}>{name}</Link>
      </td>
      <td data-testid="rating">{rating}</td>
      <td data-testid="type">{getType.trim()}</td>
      <td data-testid="price">{price_starts_from}</td>
    </tr>
  );
}
