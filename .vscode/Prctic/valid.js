class validation {
    constructor(n) {
        this.lewra = n;
    }
    validate() {
        let pattern = /[A-z0-9._]+@[A-z]+\.[A-z]{2,4}/;

        if (this.lewra.search(pattern) == -1) {
            alert("please enter your valid email");
        }

        else {
            alert("Valid email address");
        }

    }
}