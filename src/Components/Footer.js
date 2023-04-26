import { useRouter } from 'next/router'
import Link from 'next/link'
import footLogo from '../pages/img/journeypic.png'
import Image from 'next/image'


const Footer = () => {

const scrollTo = () =>{
window.scroll({top: 0,
behavior: "smooth"
})
}  

const router = useRouter()
return (
<>


<footer id="footer">


<div className="flex-footer">
<div className="footer-tablebox"> 
<div className="footer-headline">Get To Know Us</div>

<ul className="footer-navlink">
<li><Link href='/footerpages/About'>About Journey</Link></li>

<li><Link href='#!' className="#!">Passenger Info</Link></li>

<li><Link href='#!'>Press Center </Link></li>

<li><Link href='#!' >Blog</Link></li>

<li><Link href='#!'>How We Work</Link></li>

</ul>
</div>
{/*first tablebox stops here*/}
<div className="footer-tablebox"> 
<div className="footer-headline">Transportation</div>

<ul className="footer-navlink">
<li><Link href='/footerpages/Finance'>Flights</Link></li>

<li><Link href='/footerpages/Gaming'>Ground</Link></li>

<li><Link href='/footerpages/Entertainment'>Parking </Link></li>

<li><Link href='/footerpages/Fashion'>Guests</Link></li>

<li><Link href='/footerpages/Education'>Airline Fees</Link></li>

</ul>
</div>
{/*seconds tablebox stops here*/}
<div className="footer-tablebox"> 
<div className="footer-headline">Popular Destinations</div>

<ul className="footer-navlink">
<li><Link href='/footerpages/Mexico'>Cancun</Link></li>

<li><Link href='/footerpages/SouthAmerica'>Paris</Link></li>

<li><Link href='/footerpages/Europe'>Australia </Link></li>

<li><Link href='/footerpages/Asia'>Egypt</Link></li>

<li><Link href='/footerpages/Africa'>Africa</Link></li>

</ul>
</div>
{/*third tablebox stops here*/}
<div className="footer-tablebox" style={{borderRight:'none'}}> 
<div className="footer-headline">Help Center</div>

<ul className="footer-navlink" style={{borderBottom:'none'}}>
<li><Link  href='/footerpages/Contact'>Contact Journey</Link></li>

<li><Link  href='/footerpages/termsofuse'>terms of Use</Link></li>

<li><Link  href='/footerpages/privacy'>Privacy Policies </Link></li>

<li><Link  href='/footerpages/Cookie'>Cookie Policies</Link></li>

<li><Link href='/footerpages/sendfeedback'>Send Feedback</Link></li>

</ul>
</div>
{/*fourth tablebox stops here*/}


</div>



<p style={{color: '#fff', textAlign: 'center'}}>
&#169; Text or its affiliated companies. All rights reserved. 
</p>

<div className="footer-logo-box">

<Image style={{cursor:'pointer'}} width={100} onClick={scrollTo}  src={footLogo} alt="..." />

</div>
</footer>






</>
)
}

export default Footer