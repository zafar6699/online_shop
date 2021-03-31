exports.Home = async (req, res) => {
    res.render("./main/index", {title: "Home"})
}