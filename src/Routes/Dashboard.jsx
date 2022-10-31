import { useContext, useEffect, useState } from "react";
import Loader from "../Components/Loader";
import { AppContext } from "../Context/AppContext";
import {Navigate} from 'react-router-dom';
import RestaurantTable from "../Components/RestaurantTable";
import Pagination from "../Components/Pagination";
function Dashboard() {
  const {token,isAuth,setToken,setIsAuth} = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [total, setTotal] = useState(0);
  

  useEffect(()=>{
    setLoading(true);
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=10&filter=${filter}`)
    .then((res)=>res.json())
    .then((res)=> {
      setTotal(res.totalPages);
      setData(res.data);
      setLoading(false)
      //console.log(res);
    })
  },[page,filter])


  const handleLogout=()=>{
    setIsAuth(false);
    setToken(null);
    <Navigate to="/login"/>
  }
  
//console.log(data,total);


  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={handleLogout}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <br />
      <div>
        <select data-testid="filter-box" onChange={(e)=>setFilter(e.target.value)}>
          <option value="">All</option>
          <option value="fine_dining">Fine Dining</option>
          <option value="ethnic">Ethnic</option>
          <option value="fast_food">Fast Food</option>
          <option value="cafe">Cafe</option>
          <option value="casual_dining">Casual Dining</option>
          {/* fine_dining, ethnic, fast_food, cafe, casual_dining	 */}
        </select>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {loading && <Loader />}
        <RestaurantTable data= {data}/>
        
        {/* Restaurant Table, remember to show loading indicator when API is loading */}
      </div>
      <br />
      <div data-testid="pagination-container">
        {/* Pagination */}
        <Pagination totalPages={total} currentPage={page} handlePageChange={setPage}/>
        </div>
    </div>
  );
}

export default Dashboard;
