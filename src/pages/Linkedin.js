import React from 'react'
import { Navbar,NavBartwo, Footer, Search,SearchLkdn, LkdInfo,LkdUser,Experiance,WorkYears,LearnedSkill,Education } from '../components'


import { GithubContext} from '../context/context'

const Linkedin = () => {
    const {lnkdnUser} = React.useContext(GithubContext)
    console.log(lnkdnUser)
  return (
    <main style={{backgroundColor:'#242548'}}>

        <NavBartwo/>
        <SearchLkdn/>
        <LkdInfo/>
        <LkdUser/>
        <div className='work-exp section-center section'>
         <Experiance/>
        <WorkYears/> 
         <LearnedSkill/> 
         <Education/> 
        </div>
        
        <div className=''>
          <Footer/>
        </div>
        
        

   
    </main>
  )
}

export default Linkedin