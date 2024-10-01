import "./index.css"
import "./Home.css"
import { Link } from 'react-router-dom'
import Button from "./button/button.jsx"
import testimage from "./assets/OIP.jpg"

function Home() {
    return (
        <section className="home">
            <div className="homediv">
                <h2>Home page aayirikum</h2>
                <p>Ondaaki padikaan paranjappol cheyythatha <br /> to-do keyari nok</p>
                <img src={testimage} alt="test image" />
                <p>(test image)</p>
                <Link to="/todo">
                    <Button buttonText="To-Do" />
                </Link>
            </div>
        </section>
    );
}

export default Home