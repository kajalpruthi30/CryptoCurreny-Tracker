import React, { useEffect, useState } from 'react'
import TabsComponent from "../components/Dashboard/Tabs"
import {get100Coins} from "../functions/get100Coins"
import Search  from '../components/Dashboard/Search'
import Pagination from "../components/Dashboard/Pagination"
import Loader from '../components/Common/Loader'
import BackToTop from '../components/Common/BackToTop'
function DashboardPage() {


  const[loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  const[page, setPage] = useState(1);
  const[paginatedCoins, setPaginatedCoins] = useState([])

  const onSearchChange = (e) =>{
    setSearch(e.target.value)
  }

  // Either on the basis of name or symbol
  let filteredCoins = coins.filter((coin) => (
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  ));

  const handlePageChange = (event, value) => {
    console.log("Check: ", value, typeof(value))
    setPage(parseInt(value));
    let index = (parseInt(value) - 1) * 10;
    setPaginatedCoins(coins.slice(index, index + 10))
  }

  useEffect(() => {
   fetchData();
  }, [])

  const fetchData = async() => {
    setLoading(true)
    const data = await get100Coins();
    if(data){
      setCoins(data);
      setPaginatedCoins(data.slice(0, 10));
    }
    setLoading(false);
  }
  
  return (
    <div>
      {loading ? <Loader/> : (
      <>
        <Search search={search} onSearchChange={onSearchChange}/>
        <TabsComponent coins={search ? filteredCoins : paginatedCoins}/>
        {!search && <Pagination page={page} handlePageChange={handlePageChange}/>}
        <BackToTop/>
      </>
      )
    }
    </div>
  )
}

export default DashboardPage
