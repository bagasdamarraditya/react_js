import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import Hero from "../components/shared/Hero";
import ProductList from "../components/shared/ProductList";

export default function Home() {
    return (
        <>
            {/* Header */}
            <Header/>

            {/* Hero Section */}
            <Hero/>

            {/* Album Section */}
            <ProductList/>

            {/* Footer */}
            <Footer/>

        </>
    )
}