import { useState } from "react"
import BounceLoader from 'react-spinners/BounceLoader';

const Loader = () => {
    const [loading, setLoading] = useState(true);

    return <div className="loader">
        <BounceLoader
            color="#3BC5B1"
            loading={loading}
            size={80} />
        <p className="loader-p">Loading...</p>
    </div>
}

export default Loader;