import './single.scss'

//components
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import List from '../../components/tableList/TableList'


const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Informations</h1>
            <div className="item">
              <img 
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" 
              alt="" 
              className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jeremy Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">jeremy@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone</span>
                  <span className="itemValue">(702) 238-5266</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Adress:</span>
                  <span className="itemValue">112 Main St.Ludlow, Vermont(VT)</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>           
            </div>
          </div>
            
            </div>
        <div className="bottom">
          <h1 className="title">Last transactions</h1>
          <List />
        </div>   
      </div>
    </div>
  )
}

export default Single