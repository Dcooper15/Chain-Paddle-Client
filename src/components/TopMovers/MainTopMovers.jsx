import React from 'react';

import Navbar from '../Navbar/Navbar';
import { Link, Route} from 'react-router-dom';



const MainTopMovers = () => {
    return(
     <>
     
        <div>
         <Route path="/topmovers">
            <Navbar />
            <h2 className="sectorHeader">Today's Top Movers</h2>
            <div className="sectorMenu">
          <div class="row">
            <div class="column" className="financeSect"><h3 className="linkHeader"><Link to="/topmovers/compx" style={{ textDecoration: 'none' ,color: '#1F51FF'}}>NASDAQ</Link></h3></div>
            <div class="column" className="entertainmentSect"><h3 className="linkHeader"><Link to="/topmovers/spx"  style={{ textDecoration: 'none', color: '#1F51FF'}}>SPX</Link></h3></div>
          </div>
          
          <div class="row">
            <div class="column"className="techSect"><h3 className="linkHeader"><Link to="/topmovers/dji" style={{ textDecoration: 'none', color: '#1F51FF' }}>DJI</Link></h3></div>
          </div>
        </div>
           
            <h5 className="sectorHeader"><Link to="/" style={{color: '#fff'}}>Return to Homepage</Link></h5>
        </Route>
        </div>    
        
      </> 
      
    )
};

export default MainTopMovers;