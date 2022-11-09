import { NavLink } from 'react-router-dom';

function Sider() {
    function getNavClass(navLinkProps) {
      let navClass = 'app-header-item';
      if (navLinkProps.isActive) navClass += ' app-header-item-active';
      return navClass;
    }
  
    return (
      <header className="app-header">
        <NavLink className={getNavClass} to="/" end>HomePage</NavLink>
        <br /><br />
        <NavLink className={getNavClass} to="SearchPage">SearchPage</NavLink>
      </header>
    );
  }
  
  export default Sider;