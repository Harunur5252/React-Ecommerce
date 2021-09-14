
import { Fragment } from 'react';
import { HashRouter } from 'react-router-dom';
import RouterLink from './Router/RouterLink';


function App() {
  return (
    <Fragment>
       <HashRouter>
          <RouterLink />
       </HashRouter>
    </Fragment>
  );
}

export default App;


