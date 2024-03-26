// import { Switch } from 'react-router-dom/cjs/react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Layout from './components/layout/Layout';
import AddWork from './pages/AddWork';
import Works from './pages/Works';
import WorkDetail from './pages/WorkDetail';
import NoFound from './components/works/NoFound';


function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/works' />
          </Route>
          <Route path='/works' exact>
            {/* <WorksList /> */}
            <Works />
          </Route>
          <Route path='/works/:workId'>
            <WorkDetail />
          </Route>
          <Route path='/add-work'>
            <AddWork />
          </Route>
          <Route path='/*'>
            <NoFound />
          </Route>
        </Switch>
      </Layout>
      {/* <Layout /> */}
    </div>
  );
}

export default App;
