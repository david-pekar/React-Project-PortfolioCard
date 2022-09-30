import myPhoto from '../Images/me.jpg'
function Info(){
    return (
        <div className="info-comp">
            <img className="my-image" src={myPhoto}/>
            <h1>David Pekar</h1>
            <h2>Computer Engineering</h2>
            <h3>UT Austin</h3>
            <div className="info-buttons">
                <button className="email-button">
                <img src="/Images/Mail.jpg"/>
                <h4>Mail</h4>
                </button>
                <button className="link-button">
                <img src="/Images/linkedin.jpg"/>
                <h4>LinkedIn</h4>
                </button>
            </div>
        </div>
    )
}

export default Info