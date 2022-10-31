import RestaurantCard from "./RestaurantCard";

function RestaurantTable({data}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rating</th>
          <th>Type</th>
          <th>Price Starts From</th>
        </tr>
      </thead>
      <tbody>
        {data.map((el)=><RestaurantCard props={el} key={el.id} />)}
      </tbody>
    </table>
  );
}

export default RestaurantTable;
