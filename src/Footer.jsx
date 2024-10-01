import "./Footer.css"

function Footer() {
    return (
        <footer>
            <div className="footerdiv">
                <p>{new Date().getFullYear()} oomban vaa</p>
            </div>
        </footer>
    );
}

export default Footer