import './account.css';

function Account()
{
    return (
        <section className="account">
            <div className='container'>
                <div className="row">
                    <div className="col-md-6 offset-md-4">
                        <form method='post' action=''>
                            <div className="mb-3">
                                <label for="email" className="form-label fs-5">Username or E-mail</label>
                                <input type="email" className="form-control p-3" id="email" />
                            </div>
                            <div className="mb-3">
                                <label for="password" className="form-label fs-5">Password</label>
                                <input type="password" className="form-control p-3" id="password" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input"  id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Keep me signed in</label>
                            </div>
                            <button type="submit" className="btn btn-warning btn-lg me-3">Login</button>
                            <button type="submit" className="btn btn-success btn-lg">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Account;