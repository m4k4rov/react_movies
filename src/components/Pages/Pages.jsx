function Pages (props) {
  let pages = Array(props.numbOfPages).fill().map((e, i) => i + 1);
  return (
    <div className="pages">
      {pages.map(item => <button onClick={(ev) => {props.pageChange(ev); window.scrollTo(0,0)}} page={item} key={item}>{item}</button> )}
    </div>
  )
}

export {Pages};