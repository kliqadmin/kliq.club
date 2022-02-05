// ** Icons Import
import { Heart } from 'react-feather'

const Footer = () => {
  return (
    <p className='clearfix mb-0'>
      <span className='float-md-start d-block d-md-inline-block mt-25'>
        Copyrights © {new Date().getFullYear()}{' '}
        <a href='https://kliq.club' target='_blank' rel='noopener noreferrer'>
          Kliq club
        </a>
        <span className='d-none d-sm-inline-block'>, All rights Reserved</span>
      </span>
    </p>
  )
}

export default Footer
