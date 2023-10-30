import Header from "./Layout/Home/Header"
import Footer from "./Layout/Home/Footer"

const LoginPage = () => {
  return (
    <div>
        <Header/>
        <section className="banner-area organic-breadcrumb">
            <div className="container">
                <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                    <div className="col-first">
                        <h1>Login/Register</h1>
                        <nav className="d-flex align-items-center">
                            <a href="index.html">Home<span className="lnr lnr-arrow-right"></span></a>
                            <a href="category.html">Login/Register</a>
                        </nav>
                    </div>
                </div>
            </div>
	    </section>
        <section className="login_box_area section_gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="login_box_img">
                            <img className="img-fluid" src="src/assets/img/login.jpg" alt=""/>
                            <div className="hover">
                                <h4>New to our website?</h4>
                                <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
                                <a className="primary-btn" href="registration.html">Create an Account</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="login_form_inner">
                            <h3>Log in to enter</h3>
                            <form className="row login_form" action="contact_process.php" method="post" id="contactForm" noValidate>
                                <div className="col-md-12 form-group">
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Username" />
                                </div>
                                <div className="col-md-12 form-group">
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Password"/>
                                </div>
                                <div className="col-md-12 form-group">
                                    <div className="creat_account">
                                        <input type="checkbox" id="f-option2" name="selector"/>
                                        <label htmlFor="f-option2">Keep me logged in</label>
                                    </div>
                                </div>
                                <div className="col-md-12 form-group">
                                    <button type="submit" value="submit" className="primary-btn">Log In</button>
                                    <a href="#">Forgot Password?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
	    </section>
        <Footer/>
    </div>
  )
}

export default LoginPage