import './Modal.sass';

function Modal(props) {
  return (
    <div className="modal">
      <div className="modal__box">
        <span></span> Сервис по поиску фильмов с использованием OMDb API (англоязычный поиск). В подборке выдаёт 10 элементов, содержащих постер фильма, его название, год выпуска и тип фильма (сериал, фильм или что то иное). Возможна выборка по типу. Карточки кликабельны и ведут на соответствующие страницы сайта IMDB. В проекте используется библиотека React, асинхронные запросы и методы работы с React-компонентами.
        <div className="modal__close" onClick={props.toggle}>x</div>
      </div>
    </div>
  )
}

export {Modal};