import React from 'react'
import { Navbar,NavBartwo, Footer, Search} from '../components'

const Twitter = () => {
  return (
    <main style={{backgroundColor:'#242548'}}>

        <NavBartwo/>
        <Search/>
        <div className='twitter-footer'>
          <Footer/>
        </div>
        
   
    </main>
  )
}

export default Twitter