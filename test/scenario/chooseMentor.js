var root = require('../user/learner.js')(require('../data/users/root.js'));
//gets user data from /data/users/root and create new learner obj

var lisa = require('../user/mentor.js')(require('../data/users/lisa.js'));
var mark = require('../user/learner.js')(require('../data/users/mark.js'));
//gets user data from /data/users/root and create new mentor obj

var skillCommPlan = require('../data/lessons/skillCommPlan1.js');
//gets user data from /data/users/root and create new lesson obj

////How the user data and lessons data look like
//var root = {email:'user@demo.com',password:'Banana23123',name:'Mark Brandanawicz'};
//var owen = {email:'owen',password:'Banana23123',name:'Owen Brown'};
//var lisa = {email:'lisa', password:'Banana23123', name:'Lisa Richards'};
//var skillCommPlan = {name:'Communication Plan',level:'1',id:'skillCommPlan_level_1'};


mark.chooseMentor(lisa,skillCommPlan);
lisa.acceptMentee(mark);//unfinished-should be skillCommPlan related like this: lisa.acceptMentee(mark,skillCommPlan)
