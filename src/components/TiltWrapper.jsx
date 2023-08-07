import React, { useState, useEffect } from 'react';
import Tilt from 'react-tilt';

// Disables Tilt when in mobile preview
function TiltWrapper({ className, children }) {
  const [isTiltEnabled, setIsTiltEnabled] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        setIsTiltEnabled(false);
      } else {
        setIsTiltEnabled(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={className}>
      {isTiltEnabled ? (
        <Tilt options={{ max: 25 }}>
          {children}
        </Tilt>
      ) : (
        children
      )}
    </div>
  );
}

export default TiltWrapper;