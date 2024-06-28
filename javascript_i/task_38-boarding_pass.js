// Write code below 💖

let departTripTicket = {
    name : "Marcos",
    from : "Brazil",
    to : "Japan",
    businessClass : true,
    upgrade () {
        return this.businessClass ? console.log("Your ticket is already business class!") :
            (this.businessClass = true, console.log("Your ticket is business class now!"))
    }
};

let returnTripTicket = {
    name : "Marcos",
    from : "Japan",
    to : "Brazil",
    businessClass : false,
    upgrade () {
        return this.businessClass ? console.log("Your ticket is already business class!") :
            (this.businessClass = true, console.log("Your ticket is business class now!"))
    }
};

departTripTicket.upgrade();
returnTripTicket.upgrade()