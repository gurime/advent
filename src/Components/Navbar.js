import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import adventpic from "./img/journey-logo.png"
import { useRouter } from 'next/router'
const Navbar = () => {
const router = useRouter()    
return (
<>
<header className='header'>
<div className="header-logo-box">
Logo
{/* <Image width={100}
onClick={() => router.push('/')}
src={adventpic} alt="..." priority/> */}
</div>  

<div className="contact-box">

<div style={{padding:'1rem'}}>
Call us, we're open 24/7
</div>

<div style={{padding:'1rem'}}>
1-800-234-5678
</div>

</div>
</header>

<nav></nav>
</>
)
}

export default Navbar