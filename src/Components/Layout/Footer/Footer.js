import styles from './Footer.module.css';

const Footer = (props) => {
    return (
        <div>
            <footer className="fixed-bottom">
                <div className={styles.copyright_area}>
                    <div className="container fixed-bottom">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left ">
                                <div className={styles.copyright_text} >
                                    <p>Copyright &copy; 2021, All Right Reserved <a href="#">Weather App</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;