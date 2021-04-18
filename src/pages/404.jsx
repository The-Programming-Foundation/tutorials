import { useEffect } from 'react';
import { navigate } from 'gatsby';

const NotFound = () => {
  useEffect(() => {
    navigate('/learn');
  }, []);

  return null;
};

export default NotFound;
