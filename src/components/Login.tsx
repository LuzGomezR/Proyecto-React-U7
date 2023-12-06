const Login = () => {
    return (
        <main>
            <section className="vh-100">
                <div className="container h-100" >
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" id="card-tx">
                        <div className="card-body p-md-5">
                            <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                <p className="text-center h1 fw-bold mb-4 mx-1 mx-md-4 mt-4" id="p">Sign in</p>

                                <form className="mx-1 mx-md-4">

                                <div className="d-flex flex-row align-items-center mb-3">
                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    
                                    <label className="form-label" htmlFor="form3Example3c"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                    </svg> User</label>
                                    <input type="email" id="form3Example3c" className="form-control" />
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-3">
                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                    <label className="form-label" htmlFor="form3Example4c"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
                                    </svg> Password</label>
                                    <input type="password" id="form3Example4c" className="form-control" />
                                    </div>
                                </div>

                                <div className="form-check d-flex justify-content-center mb-4">
                                    
                                 <a href="#!">Forgot Password?</a>
                                    
                                </div>

                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                    <button type="button" id="btn-login" className="btn btn-primary btn-lg">Login</button>
                                </div>

                                </form>

                            </div>
                            <div className="col-md-10 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-2">

                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                className="img-fluid" alt="Sample image"/>

                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </main>

    )
}
export default Login;