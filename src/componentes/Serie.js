import React from "react"

export default function Serie(props) {

  const [allSeries, setAllSeries] = React.useState([])

  React.useEffect(() => {
    async function getData() {
      const res = await fetch(`${props.link}?ts=1&apikey=4bf7c617fe640d4e7bc6a1778a86548e&hash=c8f51f375b64058e3b3543d6ee2a443b`)
      const series = await res.json()
      setAllSeries(series.data.results[0])
    }
    getData()
  },[])

    return (
        <div>
            <h3 className="serie-name">{props.nombre}</h3>
            <h4 className="serie-year">years: {allSeries.startYear} - {allSeries.endYear}</h4>
            <h5 className="serie-id">id: {allSeries.id}</h5>
        </div>
    )
}