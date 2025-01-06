import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer className='footer-wrapper'>
        <div className='container-fluid'>
            <div className='row'>
                    <div className='col-lg-4'><h4>footer Logo</h4></div>
                    <div className='col-lg-4'>
                        <h4>UseFull Links</h4>
                    </div>
                    <div className='col-lg-4'>
                        <h4>Contacts</h4>
                    </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer