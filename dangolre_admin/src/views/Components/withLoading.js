import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default (loadingMessage = 'Loading') => WrappedComponent => {
  const { displayName, name: componentName } = WrappedComponent;
  const wrappedComponentName = displayName || componentName;

  function WithLoading({ isLoading, ...props }) {
    console.log(`${wrappedComponentName} isLoading : ${isLoading}`);

    if (isLoading) {

      const loadingStyle={
        position:'fixed',
        left:'50%',
        top:'50%',
        marginLeft:'-40px',
        marginTop:'-40px',
      }

      return (
        <div style={loadingStyle}><CircularProgress size={80} /></div>
      );
    }

    return <WrappedComponent {...props} />;
  }
  WithLoading.displayName = `withLoading(${wrappedComponentName})`;
  return WithLoading;
};
