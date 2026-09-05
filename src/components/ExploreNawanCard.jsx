function ExploreNawanCard({ image, name, title, bio }) {
  // Condition: Check if the image string contains 'image.png'
  const isSpecialImage = image && image.includes('image.png');

  return (
    <article className="hero-profile">
      <div className="hero-profile__media">
        <img 
          src={image} 
          alt={name} 
          loading="lazy" 
          style={{ 
            height: isSpecialImage ? '500px' : '400px', // Increases height for image.png
            width: isSpecialImage ? '600px' : '500px'   // Example adjusted width
          }} 
        />
      </div>
      <div className="hero-profile__body">
        <span className="hero-profile__title">{title}</span>
        <h3>{name}</h3>
        <p>{bio}</p>
      </div>
    </article>
  )
}

export default ExploreNawanCard;
