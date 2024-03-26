
import { useEffect } from "react"

function Home() {
    useEffect(() => {
        document.title = "Home Page 🤠"
    })
    return (
        <>
            <div className="main">
                <h1>Home</h1>
            </div>
        </>
    ) ;
}

export default Home;