import { Link } from 'react-router-dom';



function Home(){
    return(
        <div className="homePage">

            <h1>Welcome to Marc's Personal Portfolio</h1>

            <div className="homeButtons">
                
                <p>Go to:</p>
                
                <div className="buttonGroup">

                <Link to="/aboutMe">About Me</Link>

                <Link to="/projects">Projects</Link>
                </div>
            </div>
        </div>
        
    );

}

export default Home