const getAll = async (req, res) => {
    try {
        const user = await User.find({})
        res.send(user)
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    getAll
}