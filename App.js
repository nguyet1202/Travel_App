import React, {useContext} from 'react';
import Navigation from './src/navigation/ScreenNavigate';
import { PostProvider } from './src/context/PostContext';

const App = () => {
  return (
    <PostProvider>
      <Navigation />
    </PostProvider>
  );
};

export default App
