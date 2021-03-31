exports.Home = async (req, res) => {
    res.render("./main/index", {title: "Home"})
}

exports.Login = async (req, res) => {
    res.render("./main/login", {title: "Login", layout: './logRegLayout'})
}
