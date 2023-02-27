module.exports.getUsers = function (req, res, next) {
    console.log("Middleware getUsers used!");
    console.log(`Passed uuid: ${req.params.uuid.toString()}`)

    req.addedData = req.params.uuid + "222222222222222";
    res.locals.myUuid = req.params.uuid;

    res.locals.test = "lmao";

    next();
}