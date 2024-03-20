var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/login',function(req,res,next){
  res.send({
    code:0,
    data:{
      a:1
    }
  })
})

router.get('/', function(req, res, next) {
  res.send({
    code:0,
    data:[
      {
        id:0,
        name:'推薦',
        data:[
          {
            id:0,
            name:'推薦',
            list:[
              {
                id:0,
                name:'bmw',
                imgurl:'/recommend1.png'
              },
              {
                id:1,
                name:'bmw',
                imgurl:'/recommend1.png'
              },
            ]
          }
        ]
      },{
        id:1,
        name:'敞篷車',
        data:[
          {
            id:0,
            name:'敞篷車',
            list:[
              {
                id:0,
                name:'bmw',
                imgurl:'/recommend1.png'
              },
              {
                id:1,
                name:'bmw',
                imgurl:'/recommend1.png'
              },
            ]
          }
        ]
      },{
        id:1,
        name:'休旅車',
        data:[
          {
            id:0,
            name:'休旅車',
            list:[
              {
                id:0,
                name:'bmw',
                imgurl:'/recommend1.png'
              },
              {
                id:1,
                name:'bmw',
                imgurl:'/recommend1.png'
              },
            ]
          }
        ]
      }
    ]

  })

});

module.exports = router;
