import { Link } from "react-router-dom";

export const Home = ()=>{

    return (
        <div className="Home">
            <Link to="/" className="link"><p className="title">MC Movies Blog</p></Link>
            <p className="author">Mohamed Afsal J</p>
            <div className="nav">
                <Link to="/movies" className="link"><button>Get all Movies</button></Link>
                <Link to="/admin" className="link"><button>Admin Features</button></Link>
            </div>
        </div>
    );
}