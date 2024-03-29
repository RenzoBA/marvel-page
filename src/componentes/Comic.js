import React from "react"

export default function Comic(props) {

  const [allComics, setAllComics] = React.useState([])

  React.useEffect(() => {
    async function getData() {
      const res = await fetch(`${props.link}?ts=1&apikey=4bf7c617fe640d4e7bc6a1778a86548e&hash=c8f51f375b64058e3b3543d6ee2a443b`)
      const comics = await res.json()
      setAllComics(comics.data.results[0])
    }
    getData()
  },[])

    return (
        <div>
            <h3 className="comic-name">{props.nombre}</h3>
            <h5 className="comic-id">id: {allComics.id} / digital id: {allComics.digitalId}</h5>
            <h4 className="comic-page">pages: {allComics.pageCount} pag</h4>
        </div>
    )
}