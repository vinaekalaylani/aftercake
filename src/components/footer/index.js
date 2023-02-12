export default function FooterComp() {
    return (
        <>
            <div class="container-fluid bg-img text-secondary">
                <div class="container">
                    <div class="row gx-5">
                        <div class="col-lg-4 col-md-6 mb-lg-n5">
                            <div class="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary border-inner p-4">
                                <a href="index.html" class="navbar-brand">
                                    <h1 class="m-0 text-uppercase text-white"><i class="fa fa-birthday-cake fs-1 text-dark me-3"></i>After Dessert</h1>
                                </a>
                                <p class="mt-3">Affordable Tasty Dessert</p>
                                <p>Konsep dessert yang lezat dengan harga terjangkau sehingga cocok untuk semua kalangan, cita rasa rumahan yang hangat dan berkesan. Menu Dessert cup ada 5 varian rasa : choco.oreo, choco.regal, choco. Strowberry. Choco Custard, Custard Strowberry.</p>
                                <p>Dessert Chips ada 4 varian rasa : Whitey Chips, Choco Chips, Pinky Chips, BlackPink Chips. Berdiri pada tanggal 5 janurai 2023 dengan pendiri 3 anggota</p>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-6">
                            <div class="row gx-5">
                                <div class="col-lg-4 col-md-12 pt-5 mb-5">
                                    <h4 class="text-primary text-uppercase mb-4">Get In Touch</h4>
                                    <div class="d-flex mb-2">
                                        <i class="bi bi-geo-alt text-primary me-2"></i>
                                        <p class="mb-0">Jl. Bandulan No.8, Mulyorejo, Kec. Sukun, Kota Malang, Jawa Timur 65147</p>
                                    </div>
                                    <div class="d-flex mb-2">
                                        <i class="bi bi-envelope-open text-primary me-2"></i>
                                        <p class="mb-0">after.dessert1@gmail.com</p>
                                    </div>
                                    <div class="d-flex mb-2">
                                        <i class="bi bi-telephone text-primary me-2"></i>
                                        <p class="mb-0">+62 896-1523-2199</p>
                                    </div>
                                    <div class="d-flex mt-4">
                                        <a class="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 me-2" href="#"><i class="fab fa-twitter fw-normal"></i></a>
                                        <a class="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 me-2" href="#"><i class="fab fa-facebook-f fw-normal"></i></a>
                                        <a class="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 me-2" href="#"><i class="fab fa-linkedin-in fw-normal"></i></a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                    <h4 class="text-primary text-uppercase mb-4">Quick Links</h4>
                                    <div class="d-flex flex-column justify-content-start">
                                        <a class="text-secondary mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Home</a>
                                        <a class="text-secondary mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                                        <a class="text-secondary mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                                        <a class="text-secondary" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                    <h4 class="text-primary text-uppercase mb-4">Newsletter</h4>
                                    <p>Get latest updates and offers.</p>
                                    <form action="">
                                        <div class="input-group">
                                            <input type="text" class="form-control border-white p-3" placeholder="Your Email" />
                                            <button class="btn btn-primary">Sign Up</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid text-secondary py-4" style={{background:"#111111"}}>
                <div class="container text-center">
                    <p class="mb-0">Powered System By <a class="text-white border-bottom">vinas.project</a></p>
                </div>
            </div>
        </>
    )
}