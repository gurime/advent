import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'

import React from 'react'


const sendfeedback = () => {
return (
<>
<Navbar/>


<div style={{display:'grid'}}>
<div className='formbox'>
<label style={{
marginBottom:'10px',
fontSize:'20px'}} htmlFor="name">Full Name</label>
<input type="text" id="name" pwa2-uuid="EDITOR/input-A1A-0D8-40CCD-1CC" pwa-fake-editor=""/>
<label htmlFor="email" style={{
marginBottom:'10px',
fontSize:'20px'}}>Email</label>
<input type="email" id="name"/>
<label htmlFor="topic" style={{marginBottom:'1rem'}}> <br/>
 What is the subject of your inquiry or comment?</label>
<select name="state" id="topic"><option value="select a topic">Select a Topic</option>
<option value="general question">General Question</option>
<option value="opinion">Opinion</option>
<option value="contact editor">Contact Editor</option>
<option value="career opportunities">Career Opportunities</option>
<option value="about donations">About Donations</option>
<option value="advertising">About Advertising</option>
</select>
<label style={{marginBottom:'1rem'}} htmlFor="topic"> <br/> Message:</label>
<textarea name="" id="" cols="50" rows="20">
</textarea>
<button>Submit Comment</button>
</div>
</div>











<Footer/>
</>
)
}

export default sendfeedback