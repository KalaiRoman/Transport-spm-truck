import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import '../public/css/bootstrap.min.css';
import '../public/css/style.css';
import '../public/css/responsive.css';
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (<>
        {!loading ? (
            <Component {...pageProps} />
        ) : (
            <div className="preloader"></div>
        )}
    </>)
}

export default MyApp