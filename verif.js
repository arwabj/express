let day = new Date().getDay(); // return current date
let hours = new Date().getHours(); // return current Hours

console.log(hours);

function verif1(req, res, next) {
    if (day> 0 && day<6 && hours>9 && hours <17) next();
    else
    res.send(
       ` <h1>Welcome, service closed now..., service open 9h-->17h / monday--> friday</h1>`
    );
}
module.exports = verif1;