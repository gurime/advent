import React from 'react'
import Link from 'next/link'



const FeaturedCard = ({post}) => {
const {frontmatter} = post ?? {}; 
return (
<>
<div className="featerhero">
<div className='hero-info'>
<h1 className="hero-title">{post.frontmatter.title}</h1> 
<div className="authflex" >
<p>{post.frontmatter.category}</p>
<div className="authpic-block">
<h3 className="card-catogory">{post.frontmatter.author}</h3>
<img style={{width:'40px',height:'40px'}} className="authpic" src={post.frontmatter.authpic} alt="" />
</div>
</div>   
<p className="hero-description">
{post.frontmatter.excerpt}</p>
<div style={{display:'flex', placeItems:'center',justifyContent:'space-between'}}>
<Link href={`/DetailsPage/${post.slug}`}className="hero-btn">Read More</Link>
{post.frontmatter.date}
</div>
</div>
<div className='heroimg-box' >
<img  src={post.frontmatter.cover_image} alt="Hero Image" />
</div>
</div>

</>
)
}
  
  export default FeaturedCard;