//components
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import TableList from '../../components/tableList/TableList'


import './home.scss'
import DataTable from '../../components/dataTable/DataTable'

const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="listContainer">          
            <DataTable />
          </div>
        </div>       
    </div>
  )
}

export default Home;