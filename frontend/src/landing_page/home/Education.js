import React from 'react';

function Education() {
    return (
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-6'>
              <img src='images\education.svg' style={{width:"70%"}}/>
            </div>
            <div className='col-6'>
              <h1 className='mb-3 fs-2'>Free and open market education</h1>
              <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
              <a href='' style={{textDecoration:"none"}}>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

              <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
              <a href='' style={{textDecoration:"none"}}>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      );
}

export default Education;