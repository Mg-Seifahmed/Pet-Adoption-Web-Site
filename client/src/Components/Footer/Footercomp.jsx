import React from 'react'
import './footer.css';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
function Footercomp() {
    return (
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">our services</a></li>
                            <li><a href="#">privacy policy</a></li>
                            <li><a href="#">affiliate program</a></li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">shipping</a></li>
                            <li><a href="#">returns</a></li>
                            <li><a href="#">order status</a></li>
                            <li><a href="#">payment options</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">

                    </div>
                    <div class="footer-col">
                        <h4>follow us</h4>
                        <div class="social-links">
                            <a href="#"><i class="fab fa-facebook-f"><FaFacebookF /></i></a>
                            <a href="#"><i class="fab fa-twitter"><FaXTwitter /></i></a>
                            <a href="#"><i class="fab fa-instagram"><FaInstagram /></i></a>
                            <a href="#"><i class="fab fa-whatsapp"><ImWhatsapp /></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footercomp