import React from 'react'
import './footersection.css'

function Footersec() {
  return (
    <div>

        <div className='footer' style={{ backgroundColor:"#1A1A1A" }}>
            <div className='footersection'>
                <div className='linkfirst'>
                    <h1 className='text-light'>KCC Multiplex</h1>
                    <p className='text-light' style={{ marginTop:"20px" }}>Buy Tickets</p>
                    <p className='text-light'>Movies</p>
                    <p className='text-light'>Cinemas</p>
                    <p className='text-light'>Contact Us</p>
                </div>
            
                <div className='linkfirst'>
                    <h1 className='text-light '>General</h1>
                    <p className='text-light' style={{ marginTop:"20px" }}>Kandy City Center</p>
                    <p className='text-light'>Covid 19 guidelines</p>
                   
                </div>

        <div className='linkfirst icons'>           
                    <svg  xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 30 30" fill="none">
                        <path d="M27.5 15C27.5 8.1 21.9 2.5 15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.05 6.8 26.0875 12.5 27.25V18.75H10V15H12.5V11.875C12.5 9.4625 14.4625 7.5 16.875 7.5H20V11.25H17.5C16.8125 11.25 16.25 11.8125 16.25 12.5V15H20V18.75H16.25V27.4375C22.5625 26.8125 27.5 21.4875 27.5 15Z" fill="#9E9E9E"/>
                    </svg>
                    <svg style={{ marginLeft:"50px" }} xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 33 33" fill="none">
                            <path d="M10.725 2.75H22.275C26.675 2.75 30.25 6.325 30.25 10.725V22.275C30.25 24.3901 29.4098 26.4186 27.9142 27.9142C26.4186 29.4098 24.3901 30.25 22.275 30.25H10.725C6.325 30.25 2.75 26.675 2.75 22.275V10.725C2.75 8.6099 3.59022 6.58143 5.08582 5.08582C6.58143 3.59022 8.6099 2.75 10.725 2.75ZM10.45 5.5C9.13718 5.5 7.87813 6.02152 6.94982 6.94982C6.02152 7.87813 5.5 9.13718 5.5 10.45V22.55C5.5 25.2862 7.71375 27.5 10.45 27.5H22.55C23.8628 27.5 25.1219 26.9785 26.0502 26.0502C26.9785 25.1219 27.5 23.8628 27.5 22.55V10.45C27.5 7.71375 25.2862 5.5 22.55 5.5H10.45ZM23.7188 7.5625C24.1746 7.5625 24.6118 7.74358 24.9341 8.06591C25.2564 8.38824 25.4375 8.82541 25.4375 9.28125C25.4375 9.73709 25.2564 10.1743 24.9341 10.4966C24.6118 10.8189 24.1746 11 23.7188 11C23.2629 11 22.8257 10.8189 22.5034 10.4966C22.1811 10.1743 22 9.73709 22 9.28125C22 8.82541 22.1811 8.38824 22.5034 8.06591C22.8257 7.74358 23.2629 7.5625 23.7188 7.5625ZM16.5 9.625C18.3234 9.625 20.072 10.3493 21.3614 11.6386C22.6507 12.928 23.375 14.6766 23.375 16.5C23.375 18.3234 22.6507 20.072 21.3614 21.3614C20.072 22.6507 18.3234 23.375 16.5 23.375C14.6766 23.375 12.928 22.6507 11.6386 21.3614C10.3493 20.072 9.625 18.3234 9.625 16.5C9.625 14.6766 10.3493 12.928 11.6386 11.6386C12.928 10.3493 14.6766 9.625 16.5 9.625ZM16.5 12.375C15.406 12.375 14.3568 12.8096 13.5832 13.5832C12.8096 14.3568 12.375 15.406 12.375 16.5C12.375 17.594 12.8096 18.6432 13.5832 19.4168C14.3568 20.1904 15.406 20.625 16.5 20.625C17.594 20.625 18.6432 20.1904 19.4168 19.4168C20.1904 18.6432 20.625 17.594 20.625 16.5C20.625 15.406 20.1904 14.3568 19.4168 13.5832C18.6432 12.8096 17.594 12.375 16.5 12.375Z" fill="#9E9E9E"/>
                    </svg>
                    <h2 className='text-light mt-3'>News Letter</h2>
                    <p className='text-light' >Join our mailing list for promotions and latest movie <br/> updates.</p>
                    <input placeholder='Enter Your Email' style={{ width:"230px", height:"45px", marginBottom:"40px", marginTop:"20px", background:"#D8D8D8", borderRadius: "5px 5px 5px 5px"}}></input>
                    <button className='btn' style={{ width:"150px", height:"40px", marginBottom:"5px", marginLeft:"15px", background:"#607D8B"}}>Subscribe</button>
            </div>

            </div>

           

            <div className='cpysec'>
                 <p className='text-light' style={{ marginLeft:"150px", marginTop:"10px"}}>Privacy Policy</p>
                 <p className='text-light' style={{ marginLeft:"10px", marginTop:"10px"}}>Terms and Condition</p>                
                 <p className='text-light copyright' style={{ marginLeft:"600px", marginTop:"10px"}}> © 2023 Property Finance and Investments Kandy (Pvt) Ltd. All rights reserved.</p>
            </div>
           
        </div>
 
     
    </div>
  )
}

export default Footersec
