const fs = require("fs");


function baseHTML() {
    const base = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="icon" type="image/x-icon" href="../images/favicon.ico">
        <title>Your Starfleet Travel Team!!!</title>
    </head>
    <body>
        <div class="bg-primary p-5 rounded-3 lg m-3 text-light">
            <h1 class="display-4">Starfleet Travel</h1>
            <p class="lead">Thank you for choosing Starfleet Travel for your flight today.  Your destination is our vocation.</p>
            <hr class="my-4">
            <p> Your flight team today consists of:</p>
        </div>
        <div class="container bg-success rounded-3">
            <div class="row justify-content-around">`;
    
    
        fs.writeFile("./output/team.html", base, function (err) {
            if (err) {
                console.log(err);
            }
        });
        console.log("begin");
}

module.exports = baseHTML;