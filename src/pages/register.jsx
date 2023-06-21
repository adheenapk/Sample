import React from 'react'
import './register.css'
import arrow from '../assets/arrow.png'

const register = () => {
  return (
    <>
    <div className="container">
    <div className="join">
        <img src={arrow}  class="center"></img>
        <h2>Join Us</h2><b> 
        
                    <p>Subscribe Easy Tutorial Youtube Channel to watch more videos</p>
        </b>
        <button className="b1">About Us</button>
    </div>
    <div className="reg">
   < div class="content">
<h2 class="text_shadows">REGISTER HERE</h2>
</div>
        <form action="" method="get">
          <div className="regs">
            <label for="fname">Name</label>
            <input type="text" id="fname" className="id" placeholder="Name" pattern="[A-Za-z ]"
                title="Please enter a valid name" required></input>
            <label for="name">User-Name</label>
            <input type="text" id="name" className="id" placeholder="Username" required></input>
            <label for="number">Phone Number</label>
            <input type="text" id="number" className="id" placeholder="Phone number" pattern="[0-9]{1,2}-[0-9]{10}"
                title="Enter a valid 10 digit mobile number(Countrycode-mobile number)" required></input>
            <label for="mail">E-mail</label>
            <input type="email" id="mail" className="id" placeholder="Email" required></input>
            <label for="pass">Password </label>
            <input type="password" id="pass" class="id" placeholder="Password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                required></input>
            <input type="submit" class="b2" value="Register"></input>
            </div>
        </form>
    </div>
</div>
</>

  )
}

export default register