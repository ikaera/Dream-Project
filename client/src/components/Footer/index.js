

function Footer() {
    return (
        <div className="footer">
            <div className="col-1">
                <h3>USEFUL LINKS</h3>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
                <a href="#">Shop</a>
                <a href="#">Blog</a>
            </div>
            <div className="col-2">
                <h3>NEWSLETTER</h3>
                <form>
                    <input type="text" placeholder="Email" required className="form-input-footer"></input>
                    <br></br>
                    <button type="submit" className="form-button-footer">SUBSCRIBE NOW</button>
                </form>
            </div>
            <div className="col-3">
                <h3>CONTACT</h3>
                <p>2601, Warring Street Berkeley<br></br>Berkeley, CA 94720</p>
                <div className="social-icons">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                </div>
                
            </div>
        </div>
    )
};

export default Footer;