import Logo from '../../atoms/Logo'
import './Footer.css'

const Footer: React.FC = () => {
  const date = new Date()
  const year = date.getFullYear()

  interface FooterItem {
    href: string
    label: string
    bold?: boolean
  }

  const colOne: FooterItem[] = [
    {
      label: 'Home',
      href: '/',
      bold: true,
    },
    {
      label: 'About me',
      href: '/about',
    },
    {
      label: 'Work',
      href: '/about/work',
    },
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'Learning',
      href: '/learning',
    },
  ]

  const colTwo: FooterItem[] = [
    {
      label: 'Projects',
      href: '/projects',
      bold: true,
    },
    {
      label: 'Portfolio website',
      href: '/projects/portfolio',
    },
    {
      label: 'Batch and Flow',
      href: '/projects/batch-and-flow',
    },
    {
      label: 'Too Much Munch',
      href: '/projects/too-much-munch',
    },
    {
      label: 'Nail configurator',
      href: '/projects/nail-configurator',
    },
  ]

  const colThree: FooterItem[] = [
    {
      label: 'Recipes',
      href: '/recipes',
      bold: true,
    },
    {
      label: 'Italian',
      href: '/recipes/italian',
    },
    {
      label: 'Indian',
      href: '/recipes/indian',
    },
    {
      label: 'English',
      href: '/recipes/english',
    },
    {
      label: 'American',
      href: '/recipes/american',
    },
  ]

  const horizontalRow: FooterItem[] = [
    {
      label: 'CV',
      href: 'https://www.datocms-assets.com/106829/1703635119-adam_horne_cv_dec_23.pdf',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/madamot',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/adam-h-82b144128/',
    },
    {
      label: 'Tom Horne',
      href: 'https://www.tomhorne.co.uk',
    },
  ]

  return (
    <div className="global-footer">
      <footer className="global-footer-container">
        <div className="footer-logo-container">
          <Logo />
        </div>
        <hr />
        <div className="footer-sections">
          <div className="footer-section">
            <ul>
              {colOne.map(row => (
                <li>
                  <a href={row.href}>{row.bold ? <strong>{row.label}</strong> : row.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <ul>
              {colTwo.map(row => (
                <li>
                  <a href={row.href}>{row.bold ? <strong>{row.label}</strong> : row.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <ul>
              {colThree.map(row => (
                <li>
                  <a href={row.href}>{row.bold ? <strong>{row.label}</strong> : row.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr />
        <div className="horizontal-footer-section">
          <ul>
            {horizontalRow.map(row => (
              <li>
                <a href={row.href}>{row.bold ? <strong>{row.label}</strong> : row.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <small>Copyright © {year} Adam Horne</small>
      </footer>
    </div>
  )
}

export default Footer
