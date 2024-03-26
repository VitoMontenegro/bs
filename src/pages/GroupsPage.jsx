import {useEffect} from "react";

function GroupsPage() {
    useEffect(() => {
        document.title = "News Page 👻 👾  🤠 "
    })
    return (
        <>
            <div className="main">
                <h1>Communities</h1>
            </div>
        </>
    ) ;
}

export default GroupsPage;