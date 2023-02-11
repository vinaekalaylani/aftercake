export default function AboutComp() {
    return (
        <div className="container-fluid pt-3">
            <div className="container">
                <div className="section-title position-relative text-center mx-auto mb-5 pb-3" style={{ maxWidth: "600px" }}>
                    <h2 className="text-primary font-secondary">About Us</h2>
                    <h1 className="display-5 text-uppercase">Welcome To After Dessert</h1>
                </div>
                <div className="row gx-5">
                    <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: "400px" }}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100" src="styles/img/about.jpg" style={{ objectFit: "cover" }} />
                        </div>
                    </div>
                    <div className="col-lg-6 pb-5">
                        <h4 className="mb-4">Our dessert is small but with a big love for wonderful desserts.</h4>
                        <p className="mb-5">it's an opportunity to share life's sweetest moments with the people you care about most! At After Dessert, there's nothing we love more than putting our heads and hands together to create the perfect dessert for your special moment</p>
                        <div className="row g-5">
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center justify-content-center bg-primary border-inner mb-4" style={{ width: "90px", height: "90px" }}>
                                    <i className="fa fa-heartbeat fa-2x text-white"></i>
                                </div>
                                <h4 className="text-uppercase">100% Healthy</h4>
                                <p className="mb-0">We use fresh ingredients of the highest quality for our desserts</p>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center justify-content-center bg-primary border-inner mb-4" style={{ width: "90px", height: "90px" }}>
                                    <i className="fa fa-award fa-2x text-white"></i>
                                </div>
                                <h4 className="text-uppercase">Award Winning</h4>
                                <p className="mb-0">We always get awards in every sweetest moment with you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}