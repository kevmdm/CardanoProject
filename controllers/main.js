

exports.getMain = (req ,res, next) => {

    console.log('en main');
    res.render('main',{
        path:'/',
        pageTitle:'Main'
    })
}