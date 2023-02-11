import AboutComp from "../components/about";
import ContactComp from "../components/contact";
import FooterComp from "../components/footer";
import HeroComp from "../components/hero";
import NavbarComp from "../components/navbar";
import ProductComp from "../components/product";
import ServiceComp from "../components/service";
import TestimonialComp from "../components/testimonial";
import TopbarComp from "../components/topbar";

export default function MainLayout() {
    return (
        <div>
            <TopbarComp />
            <NavbarComp />
            <HeroComp />
            <AboutComp />
            <ProductComp />
            <ServiceComp/>
            <TestimonialComp/>
            <ContactComp/>
            <FooterComp/>
            {/*  Back to Top  */}
            <a href="#" className="btn btn-primary border-inner py-3 fs-4 back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>
    )
}