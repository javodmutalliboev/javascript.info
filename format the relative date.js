/**
 * @param {Date} date
 * @return {string}
 */
function formatDate(date) {
    const diff = new Date().getTime() - date.getTime();

    if (diff < 1000) {
        return "right now";
    } else if (diff < 1000 * 60) {
        return `${Math.floor(diff / 1000)} sec. ago`;
    } else if (diff < 1000 * 60 * 60) {
        return `${Math.floor(diff / 1000 / 60)} min. ago`;
    } else {
        const d = date;

        const dArray = [
            "0" + d.getDate(),
            "0" + (d.getMonth() + 1),
            "" + d.getFullYear(),
            "0" + d.getHours(),
            "0" + d.getMinutes(),
        ].map(component => component.slice(-2));

        return dArray.slice(0, 3).join(".") + " " + dArray.slice(3).join(":");
    }
}

console.log(formatDate(new Date(new Date - 1))); // "right now"

console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 sec. ago"

console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 min. ago"

// yesterday's date like 31.12.16 20:00
console.log(formatDate(new Date(new Date - 86400 * 1000)));
