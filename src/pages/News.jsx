import { useEffect } from "react"

function News() {
    useEffect(() => {
        document.title = "News Page 👽"
    })
    return (
        <>
            <div className="main">
                <h1>News</h1>
            </div>
        </>
    ) ;
}

export default News;