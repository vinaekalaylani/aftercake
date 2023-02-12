export default function AboutComp() {
    return (
        <div className="container-fluid pt-3">
            <div className="container">
                <div className="section-title position-relative text-center mx-auto mb-5 pb-3" style={{ maxWidth: "600px" }}>
                    <h2 className="text-primary font-secondary">About Us</h2>
                    <h1 className="display-5 text-uppercase">Welcome To After Dessert</h1>
                </div>
                <div className="row gx-5">
                    <h4 className="mb-4 text-center">Our dessert is small but with a big love for wonderful desserts.</h4>
                    <div className="col-lg-6 mb-5 mx-auto mb-lg-0" style={{ minHeight: "400px" }}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100" src="styles/img/d4.jpg" style={{ objectFit: "cover" }} />
                        </div>
                    </div>
                    <div className="col-lg-6 mb-5 mx-auto mb-lg-0" style={{ minHeight: "400px" }}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100" src="styles/img/c1.jpg" style={{ objectFit: "cover" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}