/**
 * returns how many sends are remaining till tomorrow
 * @return {number}
 */
function getSecondsToTomorrow() {
    const now = new Date();

    const tomorrow = new Date(now.getFullYear(),
        now.getMonth(), now.getDate() + 1);

    return Math.round((tomorrow.getTime() - now.getTime()) / 1000);
}

console.log(getSecondsToTomorrow());