import React from 'react';
import Loader from 'react-loader-spinner';

const LoaderSpinner = () => {
    return (
            <Loader 
                type="TailSpin"
                color="#996faf"
                width={100}
                height={100}
            />
    );
}

export default LoaderSpinner;