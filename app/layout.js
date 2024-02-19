import React from 'react';
import { Emotion } from './emotion';
const App = ({ children }) => (
  <>
    <html lang="en">
      <body>
        <Emotion> {children}</Emotion>
      </body>
    </html>
  </>
);

export default App;
