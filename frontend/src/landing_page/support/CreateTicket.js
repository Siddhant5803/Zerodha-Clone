import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container'>
            <div className='row'>
                <p className='fs-4 text-muted mb-2'>To create a ticket, select a relevant topic</p>
                <div className='col-4 p-5'>
                    <p className='fs-5'><i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</p>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.0"}}>Resident individual</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.0"}}>Minor</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.0"}}>Non Resident Indian (NRI)</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.0"}}>Company, Partnership, HUF and LLP</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.0"}}>Glossary</a><br/>
                </div>
                <div className='col-4 p-5'>
                    <p className='fs-5'><i class="fa fa-user" aria-hidden="true"></i> Your Zerodha Account</p>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.0"}}>Your Profile</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.0"}}>Account modification</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.0"}}>Client Master Report (CMR) and Depository Participant (DP)</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.0"}}>Nomination</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.0"}}>Transfer and conversion of securities</a><br/>
                </div>
                <div className='col-4 p-5'>
                    <p className='fs-5'><i class="fa fa-bar-chart" aria-hidden="true"></i> Kite</p>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.0"}}>IPO</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.0"}}>Trading FAQs</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.0"}}>Margin Trading Facility (MTF) and Margins</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.0"}}>Charts and orders</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.0"}}>Alerts and Nudges</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.0"}}>General</a><br/>
                </div>
                <div className='col-4 p-5'>
                    <p className='fs-5'><i class="fa fa-credit-card" aria-hidden="true"></i> Funds</p>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.0em"}}>Add money</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.0em"}}>Withdraw money</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.0em"}}>Add bank accounts</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.0em"}}>eMandates</a><br/>
                </div>
                <div className='col-4 p-5'>
                    <p className='fs-5'><i class="fa fa-circle-o-notch" aria-hidden="true"></i> Console</p>
                    <a href='' style={{textDecoration:'none', lineHeight:"2.0em"}}>Portfolio</a><br/>
                    <a href='' style={{textDecoration:'none', lineHeight:"2.0em"}}>Corporate actions</a><br/>
                    <a href='' style={{textDecoration:'none', lineHeight:"2.0em"}}>Funds statement</a><br/>
                    <a href='' style={{textDecoration:'none', lineHeight:"2.0em"}}>Reports</a><br/>
                    <a href='' style={{textDecoration:'none', lineHeight:"2.0em"}}>Profile</a><br/>
                    <a href='' style={{textDecoration:'none', lineHeight:"2.0em"}}>Segments</a><br/>
                </div>
                <div className='col-4 p-5'>
                    <p className='fs-5'><i class="fa fa-circle-thin" aria-hidden="true"></i> Coin</p>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.0em"}}>Mutual funds</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.0em"}}>National Pension Scheme (NPS)</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.0em"}}>Features on Coin</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.0em"}}>Payments and Orders</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.0em"}}>General</a><br/>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;