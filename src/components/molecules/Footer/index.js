import React from 'react'
import { LogoBlog, IconWhatsapp, IconTelegram, IconInstagram, IconDiscord, IconPhone } from '../../../assets'
import './footer.scss'

const Icon = ({img}) => {
    return (
        <div className="icons-wrapper">
            <img className="icon-image" src={img} alt="icon" />
        </div>
    )
}
const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <img className="logo" src={LogoBlog} alt="logo" />
                </div>
                <div className="socials-wrapper">
                    <Icon img={IconWhatsapp} />
                    <Icon img={IconTelegram} />
                    <Icon img={IconInstagram} />
                    <Icon img={IconDiscord} />
                    <Icon img={IconPhone} />
                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer
