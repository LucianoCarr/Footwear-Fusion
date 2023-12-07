
import { Outlet } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer'
import { SideBar } from './components/SideBar'
import { TopBar } from './components/TopBar'

function App() {
  

  return (
    <>
     <div id="wrapper">		
		<SideBar/>
		<div id="content-wrapper" className="d-flex flex-column">			
			<div id="content">	
				<TopBar/>	

		<div className="container-fluid ">
			<div className="d-sm-flex align-items-center justify-content-between mb-4">
		<h1 className="h3 mb-0 text-gray-800">Admin</h1>
			</div>
	
					
			<Outlet/>
			
			</div>				
			</div>			
			<Footer/>
		</div>
		</div>
    </>
  )
}

export default App
