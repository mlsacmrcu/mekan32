const hakkinda=function(req, res, next) {
  res.render('hakkinda', { title: 'Hakkında',
             'footer':'Melisa Cumurcu 2020'});
}

module.exports={
	hakkinda
}
