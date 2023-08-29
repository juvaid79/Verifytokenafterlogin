
import { useNavigate } from 'react-router-dom';


function Navbar() {

  const navigate = useNavigate();
  const LogOut = () => {
    localStorage.clear()
    navigate("/Login")
  }
  return (
    <div>
     
      <div className='mainNavBar'>
        <button className='button' onClick={LogOut}>LogOut</button>
      </div>
    </ div>
  )
}

export default Navbar;