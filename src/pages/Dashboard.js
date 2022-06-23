import React from 'react';
import { Info, Repos, User, Search, Navbar,NavBartwo, Footer} from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';

const Dashboard = () => {
  return (
    <main style={{backgroundColor:'#242548'}}>
      <NavBartwo/>
      <Search/>
      <Info/>
      <User/>
      <Repos/>
      <Footer style={{position:'absolute', bottom:0}}/>
    </main>
  );
};

export default Dashboard;
