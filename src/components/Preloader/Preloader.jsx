import './Preloader.sass';

function Preloader() {
  return (
    <div className="transition-loader">
      <div className="transition-loader-inner">
        <label></label>
        <label></label>
        <label></label>
        <label></label>
        <label></label>
        <label></label>
      </div>
    </div>
  )
}

export {Preloader};