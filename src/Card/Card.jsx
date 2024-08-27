import profile from '../assets/prof2.jpg'


function Card() {
  return (
   <div className='card'>
    <img className='card-image' src={profile} alt="Picture Here"/>
    <h2 className='card-title'>Hassan Faruq</h2>
    <p className='card-text'>I am a passionate and dedicated frontend developer</p>
   </div>
  )
}

export default Card