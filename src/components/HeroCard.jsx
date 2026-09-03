function HeroCard({ image, name, title, bio, contribution, achievements = [] }) {
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
        {contribution && (
          <p className="hero-profile__contribution">{contribution}</p>
        )}
        {achievements.length > 0 && (
          <ul className="hero-profile__achievements">
            {achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}

export default HeroCard;
