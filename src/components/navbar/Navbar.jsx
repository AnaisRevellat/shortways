//mui library
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

//context
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';


import './navbar.scss'

const Navbar = () => {

  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='navbar'>
      <div className="wrapper">

        <div className="search">
          <input type="text" placeholder='"Search..."' />
          <SavedSearchIcon className='icon' />
        </div>

        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className='icon' />
            English
          </div>
          <div className="item">
            <DarkModeSharpIcon className='icon' onClick={()=> dispatch({type:'TOGGLE'})} />          
          </div>       
          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon' />
            <div className="counter">1</div>         
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon' />
            <div className="counter">2</div>          
          </div>
          <div className="item">
            <ListOutlinedIcon className='icon' />          
          </div>
          <div className="item">
            <img  
            src="https://firebasestorage.googleapis.com/v0/b/shortways-template.appspot.com/o/christian-buehner-DItYlc26zVI-unsplash.jpg?alt=media&token=e7ce4b9a-5e12-4c0f-a6d8-bf0534f6fe95"
            alt="profile_picture"
            className="avatar" />         
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar