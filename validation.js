class validation {
    constructor(email) {
        this.email = email ;
    }
    validate () {
        let pattern = /[A-z0-9._]+@[A-z]+\.[A-z]{2,4}/;
        
        if ( this.email.search(pattern)==-1) {
            alert("please enter your valid email") ;
        }
        
        else {
            alert("Valid Email Address") ;
        }
    }
}