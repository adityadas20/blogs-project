import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>that page can not be found</p>
            <Link to="/">Go Home</Link>
        </div>
    );
}

export default NotFound;