import fs from 'fs';
import path from 'path'
import matter from 'gray-matter'
import Navbar from '@/Components/Navbar'
import Head from 'next/head'
import searchimg from '../pages/img/white_search.png'
import Image from 'next/image'
import Link from 'next/link'
import Card from '@/Components/Card'
import Footer from '@/Components/Footer';
import indopic from '../pages/img/indopic.jpg'
import parispic from '../pages/img/parispic.jpg'
export default function Home({posts}) {
return (
<>
<Head>
<title>Journey</title>
<meta name="description" content="Generated by create next app" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" href="/favicon.ico" />
</Head>
<Navbar/>  

<div className="hero">


{/* hero starts here */}
<div className="search-box">
<h1 id="he-h1">We will find you the perfect getaway</h1>

<form >
<input type="type" placeholder="Find your next Destination! "/>
<button className="form-btn" type="submit">
<Image src={searchimg} width={14} alt='...'  />
</button>
</form>
</div>
</div>
{/* hero stops here */}

{/* plan starts here */}
<div className="plan-box">

<div className="left-plan">
<h1 style={{padding:'0 20px'}}>Plan Your Adventure</h1>
<p style={{padding:'0 20px'}}>
Are you ready to embark on your next journey? <br/> Let us help you plan the adventure of a lifetime! Our website offers a wide range of travel resources to help you make the most of your trip. From searching for flights and hotels to finding exciting activities and insider tips, we’ve got you covered.

With our easy-to-use search tools, you can find the best deals on flights and accommodations. Browse our extensive collection of travel guides and insider tips to discover hidden gems and must-see attractions at your destination.

Save your favorite destinations and itineraries for easy access and planning. Stay up-to-date with the latest information on travel restrictions and health and safety measures to ensure a smooth and worry-free trip.

Start planning your adventure today with our comprehensive travel resources. Your next journey awaits!
</p>
</div>

<div className="right-plan">
<h1 style={{padding:'0 20px'}}>Featured Destinations</h1>
<p style={{padding:'0 20px'}}>
Looking for inspiration for your next trip? Check out some of our top featured destinations below!
</p>
<ul style={{padding:'0 20px'}}>

<li>
<Link href="#!">
<div className='planflex'>
<p>Bali, Indonesia</p>
<Image width={200} src={indopic} alt='...'/></div>
</Link>
</li>
<li>
<Link href="#!">
<div className='planflex'>
<p>Paris, Italy</p>
<Image width={200} src={parispic} alt='...'/></div>
</Link>
</li>

</ul>
</div>

</div>
{/* <!-- plan stops here --> */}


{/* tropical hero stops here */}
<div className="tropic-hero">
<div className="tropic-hero-title">
<h1 style={{
color:'#fff',
fontSize:'5rem',
textAlign:'center',
textTransform:'capitalize'
}}>Tropical vacation blogs</h1>
</div>
</div>
{/* tropical hero stops here */}


<div className='card-grid'>
{posts && posts.map((post, index) => (
<Card key={index} post={post}/>
))}
</div>
<Footer/>
</>
)
}

export async function getStaticProps() {
// Get files from the feartered articles dir
const files = await fs.promises.readdir('Articles');

// Get slug and frontmatter from blogs
const posts = await Promise.all(
files.map(async (filename) => {
// Create slug
const slug = filename.replace('.md', '');
  
 // articles block
const markdownWithMeta = await fs.promises.readFile(
path.join('Articles', filename),
'utf-8');
  
const { data: frontmatter } = matter(markdownWithMeta);
return {
slug,
frontmatter,
};
})
);
// articles block
 


posts.sort((a, b) => new Date(a.frontmatter.date) - new Date(b.frontmatter.date));
return {
props: {
posts,

},
};
}