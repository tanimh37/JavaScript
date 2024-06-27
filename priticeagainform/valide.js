class validation {
    constructor(n) {
        this.k = n;
    }
    validate() {
        let pattern = /[A-z0-9._]+@[A-z]+\.[A-z]{2,4}/;

        if (this.k.search(pattern) == -1) {
            alert("please enter your valid email");
        }

        else {
            document.write("Login Completed") ;
        }

    }
}