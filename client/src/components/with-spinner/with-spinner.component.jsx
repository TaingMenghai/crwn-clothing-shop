import React from 'react';

import Spinner from '../spinner/spinner.component';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <Spinner />
    ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;

// const WithSpinner = WrappedComponent => {
//   const Spinner = ({ isLoading, ...otherProps }) => {
//     return isLoading ? (
//       <SpinnerOverlay>
//         <SpinnerContainer />
//       </SpinnerOverlay>
//     ) : (
//       <WrappedComponent {...otherProps} />
//     );
//   };
//   return Spinner;
// };

// export default WithSpinner;