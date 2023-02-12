export default function ServiceComp() {
    return (
        <div className="container-fluid service position-relative px-5 mt-5" style={{ marginBottom: "135px" }}>
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 col-md-6">
                        <div className="bg-primary border-inner text-center text-white p-5">
                            <h4 className="text-uppercase mb-3">DESSERTS</h4>
                            <p>Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo amet tempor amet kasd lorem dolor ipsum</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="bg-primary border-inner text-center text-white p-5">
                            <h4 className="text-uppercase mb-3">CHIPS</h4>
                            <p>Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo amet tempor amet kasd lorem dolor ipsum</p>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-6 text-center">
                        <a href="https://api.whatsapp.com/send?phone=+6289615232199&text=Hello,%20I%20would%20like%20to%20order%20a%20dessert%20please." className="btn btn-primary border-inner py-3 px-5">Order Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}