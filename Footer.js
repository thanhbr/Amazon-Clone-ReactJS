import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <>
          <footer>
                <div className="main-content">
                <div className="left box">
                    <h2>About us</h2>
                    <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quo qui voluptates molestiae veniam quod illo eligendi molestias, aut iusto expedita exercitationem perferendis ab laudantium nisi quae minus ipsum tempore?</p>
                    <div className="social">
                        <a href="/"><span className="fab fa-facebook-f" /></a>
                        <a href="/"><span className="fab fa-twitter" /></a>
                        <a href="/"><span className="fab fa-instagram" /></a>
                        <a href="/"><span className="fab fa-youtube" /></a> 
                    </div>
                    </div>
                </div>
                <div className="center box">
                    <h2>Address</h2>
                    <div className="content">
                    <div className="place">
                        <span className="fas fa-map-marker-alt" />
                        <span className="text">Lorem ipsum dolor sit amet.</span>
                    </div>
                    <div className="phone">
                        <span className="fas fa-phone-alt" />
                        <span className="text">Lorem ipsum dolor sit amet.</span>
                    </div>
                    <div className="email">
                        <span className="fas fa-envelope" />
                        <span className="text">Lorem ipsum dolor sit amet.</span>
                    </div>
                    </div>
                </div>
                <div className="right box">
                    <h2>Contact us</h2>
                    <div className="content">
                    <form action="/">
                        <div className="email">
                        <div className="text">Email *</div>
                        <input type="email" required />
                        </div>
                        <div className="msg">
                        <div className="text">Message *</div>
                        <textarea cols={25} rows={2} required defaultValue={""} />
                        </div>
                        <div className="btn">
                        <button type="submit">Send</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
                <div className="bottom">
                <center>
                    <span className="credit">Create by <a href="/">ThanhBr</a> |</span>
                    <span className="far fa-copyright" /><span>2020 All rights reserved.</span>
                </center>
                </div>
            </footer>  
        </>
    )
}

export default Footer
