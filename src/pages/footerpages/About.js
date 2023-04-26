import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'

import React from 'react'

import Link from 'next/link'
const About = () => {
return (
<>
<Navbar/>

<div className="about-container">
<h2>About Us</h2>
<p>
We're a team of passionate individuals dedicated to helping people live their best lives. Our mission is to make wellness accessible and affordable for everyone, and we believe that starts with education. That's why we've created this website – to provide you with the tools and information you need to take control of your health and wellbeing.
</p>

<h3>Our Story</h3>
<p>
Our founder, Phillip Bailey, has always been interested in wellness. After years of studying and practicing different approaches to health and happiness, she realized that many people didn't have access to the resources she had. That's when she decided to create a platform where anyone could learn about wellness and live their best life.
</p>

<h3>Our Values</h3>
<p>
At JOURNEY, we believe in the power of education, accessibility, and inclusiveness. We're committed to making wellness information and resources available to everyone, regardless of background or income. We also believe in transparency, which is why we're open about our processes and always looking for ways to improve.
</p>

<h3>Our Team</h3>
<p>
We're a diverse group of individuals with a shared passion for wellness. Our team includes certified health coaches, registered dietitians, and experienced writers who are dedicated to providing you with accurate, up-to-date information. We're here to support you on your wellness journey.
</p>

<h3>Get in Touch</h3>
<p>
We'd love to hear from you! Whether you have a question, comment, or just want to say hi, please don't hesitate to reach out. You can find us on social media or email us at <Link href='/footerpages/Contact'>Contact</Link>.
</p>
</div>
<Footer/>
</>
)
}

export default About