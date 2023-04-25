import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import adventpic from "./img/journey-logo.png"
import { useRouter } from 'next/router'
const Navbar = () => {
const router = useRouter()    
return (
<>
<header>
<div className="header-logo-box">

<Image width={100}
onClick={() => router.push('/')}
src={adventpic} alt="..." priority/>
</div>  

<div class="contact-box">

<div>
<Link style={{textDecoration:'none'}}  
href="#!" className="contact-open">Call us, we're open 24/7</Link>
</div>

<div>
<Link style={{textDecoration:'none'}} href="#!">1-800-234-5678</Link>
</div>

</div>
</header>

<nav></nav>
</>
)
}

export default Navbar