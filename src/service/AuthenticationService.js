const AuthenticationService={
    login:function(username){
            sessionStorage.setItem('autenticatedUser',username)
    },
    logout:function(){
        sessionStorage.setItem('autenticatedUser','')
    },
    isLoggedIn:function(){
        let user=sessionStorage.getItem('autenticatedUser')
        if(user!=null)
            return true
        else    
            return false
    }
}

export default AuthenticationService