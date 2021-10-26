
const fs = require("fs");

function generateHtml() {
    const base = `</div>
    </div>
</body>
</html>`;

    
    fs.appendFile("./output/team.html", base, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("You have finished setting up your Team Profile!!!");
}

module.exports = generateHtml;