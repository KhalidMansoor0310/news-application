import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
    BrowserRouter as Router,
    Routes,
    Route,

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export class App extends Component {
     pageSize = 10;
     state={
         progress:0
     }
     setprogress=(progress)=>{
         this.setState({
             progress:progress
         })
     }
    render() {
        return (
            <>
                
                <Router>
                <Navbar />
                <LoadingBar
                    color='#f11946'
                    progress={this.state.progress}
                />
                    <Routes>
                        <Route path="/technology" element={<News setprogress={this.setprogress} pageSize={this.pageSize}  key='technology' category='technology' />}/>
                        <Route path="/general" element={<News setprogress={this.setprogress} pageSize={this.pageSize} key='general' category='general' />}/>
                        <Route path="/sports" element={<News setprogress={this.setprogress} pageSize={this.pageSize}  key='sports' category='sports' />}/>
                        <Route path="/health" element={<News setprogress={this.setprogress} pageSize={this.pageSize} key='health' category='health' />}/>
                        <Route path="/entertainment" element={<News setprogress={this.setprogress} pageSize={this.pageSize} key='entertainment' category='entertainment' />}/>  
                        <Route path="/science" element={<News setprogress={this.setprogress} pageSize={this.pageSize} key='science' category='science' />}/>   
                                     

                    </Routes>
                    
                </Router>
            </>
        )
    }
}

export default App
