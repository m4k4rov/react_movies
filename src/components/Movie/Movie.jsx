function Movie (props) {
  let {id, title, year, type, img} = props;
  let href = "https://www.imdb.com/title/" + id;
  return (
    <a href={href} target="_blank" rel="noreferrer" className="card">
      <img className="card__img" src={img === 'N/A' ? `https://via.placeholder.com/300x300?text=${title}` : img} alt={title} />
      <div className="card__content">
        <span className="card__title">{title}</span>
        <div className="card__subtitle">
          {year}
          <div>{type}</div>
        </div>
      </div>
    </a>
  )
}

export {Movie};