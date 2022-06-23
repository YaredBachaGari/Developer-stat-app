import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import mockLinkedin from './mockData.js/mockLinkedin';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GitHubProvider =({children}) =>{

    const [githubUsers, SetGithubUsers] = useState(mockUser);
    const [repos, SetRepos] = useState(mockRepos);
    const [followers, SetFollowers] = useState(mockFollowers);
    const [lnkdnUser, setLkdnUser] =useState(mockLinkedin)
    

    const [request, setRequest] = useState(0);
    const [loading, setLoading] = useState(false);
    const [ error, setError] =useState({show:false, msg:''})

    const toggleError=(show, msg)=>{
           setError({show, msg});
    }

    const SearchDeveloper = async (userIn)=>{
        toggleError()
        try {
            const response = await fetch(`${rootUrl}/users/${userIn}`)
            const data = await response.json()
            if(data){
                SetGithubUsers(data)
                const {login, followers_url} = data
                try {
                    const RepoResponse = await fetch(`${rootUrl}/users/${login}/repos?per_page=100`)
                    const usersRepo = await RepoResponse.json()
                    console.log(usersRepo)
                    if(usersRepo){
                        SetRepos(usersRepo)
                    }
                } catch (error) {
                    alert('Request not found')
                }
                try {
                    const FollowersResponse = await fetch(`${followers_url}?per_page=100`)
                    const Follow_resp = await FollowersResponse.json()
                    console.log(Follow_resp)
                    if(Follow_resp){
                        SetFollowers(Follow_resp)
                    }
                } catch (error) {
                    alert('Request not found')
                }
            }else{
                toggleError(true,'no user with this name')
            }
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(()=>{
  
    },[])

    return <GithubContext.Provider value={{
            githubUsers,
            repos,
            followers,
            lnkdnUser,
            SearchDeveloper,
            error,
        }}>
            {children}
          </GithubContext.Provider>
}

export { GitHubProvider, GithubContext }