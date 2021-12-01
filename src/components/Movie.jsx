function Movie (props) {
  let {title, year, type, img} = props;
  return (
    <div className="card">
      <img className="card__img" src={img === 'N/A' ? `https://via.placeholder.com/300x400?text=${title}` : img} alt={title} />
      <div className="card__content">
        <span className="card__title">{title}</span>
        <div className="card__subtitle">
          {year}
          <div>{type}</div>
        </div>
      </div>
    </div>
  )
}

export {Movie};