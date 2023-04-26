import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'

import React from 'react'

const Contact = () => {
return (
<>
<Navbar/>

<div style={{
display:'grid',
placeContent:'center'
}}>
<div className='formbox'>
<label htmlFor='fname'>Firstname</label>
<input type='text'  id='fname'/>
<label htmlFor='lname'>Lastname</label>
<input type='text'  id='lname'/>
<select name="state" id="topic">
<option value="select a topic">Select a Topic</option>
<option value="general question">General Question</option>
<option value="opinion">Opinion</option>
<option value="contact editor">Contact Editor</option>
<option value="career opportunities">Career Opportunities</option>
<option value="about donations">About Donations</option>
<option value="advertising">About Advertising</option>
</select>
<textarea name="" id="" cols="30" rows="25"></textarea>
<button>Submit</button>
</div>
</div>

<Footer/>
</>
)
}

export default Contact