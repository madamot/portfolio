import Logo from '../../atoms/Logo'

import './Header.css'

const Header: React.FC = () => {
  return (
    <div className="global-header">
      <header className="global-header-container">
        <Logo />
      </header>
    </div>
  )
}

export default Header
