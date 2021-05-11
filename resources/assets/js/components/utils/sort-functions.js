// do poprawki, coś się buguje ale nie pamiętam co

export const sortByInvestmentName = (apartments, sortAsc = true) => {
    if (sortAsc) {
        return apartments.sort((a, b) => {
            let x = a.inwestycje.length > 1 ? a.inwestycje[1] : a.inwestycje[0];
            let y = b.inwestycje.length > 1 ? b.inwestycje[1] : b.inwestycje[0];
            return x.inwestycje > y.inwestycje ? 1 : -1;
        });
    } else {
        return apartments.sort((a, b) => {
            let x = a.inwestycje.length > 1 ? a.inwestycje[1] : a.inwestycje[0];
            let y = b.inwestycje.length > 1 ? b.inwestycje[1] : b.inwestycje[0];
            return x < y ? 1 : -1;
        });
    }
};


export const sortFunction = (apartments, sortAsc= true, field) => {
    if (sortAsc) {
        return apartments.sort((a, b) => {
            return parseFloat(a[field]) < parseFloat(b[field]) ? -1 : 1;
        });
    } else {
        return apartments.sort((a, b) => {
            return parseFloat(a[field]) > parseFloat(b[field])  ? -1 : 1;
        });
    }
}