exports.Moderator = async (req, res) => {
    res.render("./admin/moderator", {title: "Moderatorlar"})
}

exports.addModerator = async (req, res) => {
    res.render("./admin/addmoderator", {title: "Add Moderator"})
}
