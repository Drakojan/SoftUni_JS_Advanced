function tickets(array, criterion) {

    resultArrOfTickets = [];

    class Ticket {

        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    array.forEach(element => {

        ticketArr = element.split('|');

        let newTicket = new Ticket(ticketArr[0], ticketArr[1], ticketArr[2])
        resultArrOfTickets.push(newTicket);
    });

    switch (criterion) {
        case 'destination':
            resultArrOfTickets.sort((a,b)=>{
                return a.destination.localeCompare(b.destination)
                
            })
            break;

        case 'price':
            resultArrOfTickets.sort((a,b)=>{
                return a.price-b.price;
            })
            break;

        case 'status':
            resultArrOfTickets.sort((a,b)=>{
                return a.status.localeCompare(b.status)
            })
            break;
    }

    return resultArrOfTickets;
}

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));
