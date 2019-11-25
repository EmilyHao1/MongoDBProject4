//pre-project
print("Project 4: Emily Hao, Daojun Liang ")
print("-------------------------------------QUESTION 1-----------------------------------------")
use test;
db.test.insertMany([
   {
       "_id" : 1,
       "name" : {
           "first" : "John",
           "last" : "Backus"
       },
       "birth" : ISODate("1924-12-03T05:00:00Z"),
       "death" : ISODate("2007-03-17T04:00:00Z"),
       "contribs" : [
           "Fortran",
           "ALGOL",
           "Backus-Naur Form",
           "FP"
       ],
       "awards" : [
           {
               "award" : "W.W. McDowell Award",
               "year" : 1967,
               "by" : "IEEE Computer Society"
           },
           {
               "award" : "National Medal of Science",
               "year" : 1975,
               "by" : "National Science Foundation"
           },
           {
               "award" : "Turing Award",
               "year" : 1977,
               "by" : "ACM"
           },
           {
               "award" : "Draper Prize",
               "year" : 1993,
               "by" : "National Academy of Engineering"
           }
       ]
   },
   {
       "_id" : ObjectId("51df07b094c6acd67e492f41"),
       "name" : {
           "first" : "John",
           "last" : "McCarthy"
       },
       "birth" : ISODate("1927-09-04T04:00:00Z"),
       "death" : ISODate("2011-12-24T05:00:00Z"),
       "contribs" : [
           "Lisp",
           "Artificial Intelligence",
           "ALGOL"
       ],
       "awards" : [
           {
               "award" : "Turing Award",
               "year" : 1971,
               "by" : "ACM"
           },
           {
               "award" : "Kyoto Prize",
               "year" : 1988,
               "by" : "Inamori Foundation"
           },
           {
               "award" : "National Medal of Science",
               "year" : 1990,
               "by" : "National Science Foundation"
           }
       ]
   },
   {
       "_id" : 3,
       "name" : {
           "first" : "Grace",
           "last" : "Hopper"
       },
       "title" : "Rear Admiral",
       "birth" : ISODate("1906-12-09T05:00:00Z"),
       "death" : ISODate("1992-01-01T05:00:00Z"),
       "contribs" : [
           "UNIVAC",
           "compiler",
           "FLOW-MATIC",
           "COBOL"
       ],
       "awards" : [
           {
               "award" : "Computer Sciences Man of the Year",
               "year" : 1969,
               "by" : "Data Processing Management Association"
           },
           {
               "award" : "Distinguished Fellow",
               "year" : 1973,
               "by" : " British Computer Society"
           },
           {
               "award" : "W. W. McDowell Award",
               "year" : 1976,
               "by" : "IEEE Computer Society"
           },
           {
               "award" : "National Medal of Technology",
               "year" : 1991,
               "by" : "United States"
           }
       ]
   },
   {
       "_id" : 4,
       "name" : {
           "first" : "Kristen",
           "last" : "Nygaard"
       },
       "birth" : ISODate("1926-08-27T04:00:00Z"),
       "death" : ISODate("2002-08-10T04:00:00Z"),
       "contribs" : [
           "OOP",
           "Simula"
       ],
       "awards" : [
           {
               "award" : "Rosing Prize",
               "year" : 1999,
               "by" : "Norwegian Data Association"
           },
           {
               "award" : "Turing Award",
               "year" : 2001,
               "by" : "ACM"
           },
           {
               "award" : "IEEE John von Neumann Medal",
               "year" : 2001,
               "by" : "IEEE"
           }
       ]
   },
   {
       "_id" : 5,
       "name" : {
           "first" : "Ole-Johan",
           "last" : "Dahl"
       },
       "birth" : ISODate("1931-10-12T04:00:00Z"),
       "death" : ISODate("2002-06-29T04:00:00Z"),
       "contribs" : [
           "OOP",
           "Simula"
       ],
       "awards" : [
           {
               "award" : "Rosing Prize",
               "year" : 1999,
               "by" : "Norwegian Data Association"
           },
           {
               "award" : "Turing Award",
               "year" : 2001,
               "by" : "ACM"
           },
           {
               "award" : "IEEE John von Neumann Medal",
               "year" : 2001,
               "by" : "IEEE"
           }
       ]
   },
   {
       "_id" : 6,
       "name" : {
           "first" : "Guido",
           "last" : "van Rossum"
       },
       "birth" : ISODate("1956-01-31T05:00:00Z"),
       "contribs" : [
           "Python"
       ],
       "awards" : [
           {
               "award" : "Award for the Advancement of Free Software",
               "year" : 2001,
               "by" : "Free Software Foundation"
           },
           {
               "award" : "NLUUG Award",
               "year" : 2003,
               "by" : "NLUUG"
           }
       ]
   },
   {
       "_id" : ObjectId("51e062189c6ae665454e301d"),
       "name" : {
           "first" : "Dennis",
           "last" : "Ritchie"
       },
       "birth" : ISODate("1941-09-09T04:00:00Z"),
       "death" : ISODate("2011-10-12T04:00:00Z"),
       "contribs" : [
           "UNIX",
           "C"
       ],
       "awards" : [
           {
               "award" : "Turing Award",
               "year" : 1983,
               "by" : "ACM"
           },
           {
               "award" : "National Medal of Technology",
               "year" : 1998,
               "by" : "United States"
           },
           {
               "award" : "Japan Prize",
               "year" : 2011,
               "by" : "The Japan Prize Foundation"
           }
       ]
   },
   {
       "_id" : 8,
       "name" : {
           "first" : "Yukihiro",
           "aka" : "Matz",
           "last" : "Matsumoto"
       },
       "birth" : ISODate("1965-04-14T04:00:00Z"),
       "contribs" : [
           "Ruby"
       ],
       "awards" : [
           {
               "award" : "Award for the Advancement of Free Software",
               "year" : "2011",
               "by" : "Free Software Foundation"
           }
       ]
   },
   {
       "_id" : 9,
       "name" : {
           "first" : "James",
           "last" : "Gosling"
       },
       "birth" : ISODate("1955-05-19T04:00:00Z"),
       "contribs" : [
           "Java"
       ],
       "awards" : [
           {
               "award" : "The Economist Innovation Award",
               "year" : 2002,
               "by" : "The Economist"
           },
           {
               "award" : "Officer of the Order of Canada",
               "year" : 2007,
               "by" : "Canada"
           }
       ]
   },
   {
       "_id" : 10,
       "name" : {
           "first" : "Martin",
           "last" : "Odersky"
       },
       "contribs" : [
           "Scala"
       ]
   }

] )

//question 1.1
//print("Question 1: ")

db.test.insertMany([
    {  
        "_id" : 20, 
        "name" : {
        	"first" : "Alex",
        	"last" : "Chen" 
        },
        "birth" : ISODate("1933-08-27T04:00:00Z"), 
        "death" : ISODate("1984-11-07T04:00:00Z"), 
        "contribs" : [
            "C++",
            "Simula"
        ],
        "awards" : [
          {
            "award" : "WPI Award", 
            "year" : 1977,
            "by" : "WPI"
          } 
        ]
    },
   
    {
    	"_id" : 30, 
    	"name" : {
			"first" : "David",
			"last" : "Mark"
		},
		"birth" : ISODate("1911-04-12T04:00:00Z"), 
		"death" : ISODate("2000-11-07T04:00:00Z"), 
		"contribs" : [
			"C++",
			"FP", 
			"Lisp",
		],
		"awards" : [
		  {
			"award" : "WPI Award",
			"year" : 1963,
			"by" : "WPI"
		  }, 
		  {
			"award" : "Turing Award", 
			"year" : 1966,
			"by" : "ACM"
		  }
		]
    }
]);

//1.2
print("Question 2: ")
db.test.find(
{
    $or:
    [
      {contribs:'FP'},
      {awards: {$size: 0}},
      {awards: {$size: 1}},
      {awards: {$size: 2}}
    ]
}
);

//1.3
print("Question 3: ")
db.test.update(
    {name:{"first":"Guido","last":"van Rossum"}},
    {$push:{contribs:"OOP"}}
);

//1.4
print("Question 4: ")
db.test.update(
    {name:{"first":"Alex","last":"Chen"}},
    {$set:{comments:["He taught in 3 universities","died from cancer","lived in CA"]}}
);

//1.5
print("Question 5: ")
var cursor = db.test.find(
    {
        name: {
            "first": "Alex",
            "last": "Chen"
        }
    }
)
var contributions = cursor.next().contribs;
for (var i = 0; i < contributions.length; i++) {
    var each_contrib = contributions[i];
    var cursor = db.test.aggregate(
        [
            {$unwind:"$contribs"},
            {$match:{'contribs':each_contrib}},
            {$group:{_id: "$contribs",people:{$push:"$name"}}}
        ]
    );
    cursor.forEach(printjson);
}

//1.6
print("Question 6: ")
db.test.distinct( "awards.by");

//1.7
print("Question 7: ")
db.test.update(
    {"awards.year": 2011},
    {$pull: {awards: {year: 2011}}},
    {multi: true}
);

//1.8
print("Question 8: ")
db.test.aggregate(
    [
        {$unwind:"$awards"},
        {$match:{'awards.year':2001}},
        {$group:{_id: "$name",count:{$sum:1}}},
        {$match:{count:{$gte: 2}}},
        {$project:{name:1}}
    ]
);

//1.9
print("Question 9: ")
var cursor = db.test.find().sort({_id:-1}).limit(1);
var max_id = cursor.next()._id;
db.test.find({_id:max_id});

//1.10
db.test.findOne({"awards.by": "ACM"});

print("-------------------------------------QUESTION 2-----------------------------------------")
print("Question 1: ")
//2.1
db.test.aggregate(
    [
        {$unwind:"$awards"},
        {$match:{awards:{$exists:true}}},
        {$group:{_id: "$awards.award",count:{$sum:1}}}
    ]
);

//2.2
print("Question 2: ")
db.test.aggregate(
    {$match:{birth:{$exists:true}}},
    {$group:{_id:{$year:"$birth"},
    idarray:{$addToSet:"$_id"}}
});

//2.3
print("Question 3: ")
var cursor_min = db.test.find().sort({_id:-1}).limit(1);
var cursor_max = db.test.find().sort({_id:1}).limit(1);
var min_id = cursor_min.next()._id;
var max_id = cursor_max.next()._id;
db.test.find(
    {
        $or:
        [{_id:max_id},
        {_id:min_id}]
    }
)

//Question 3 
//question 1: 
print("-------------------------------------QUESTION 3-----------------------------------------")
use categories

db.categories.insert( { _id: "MongoDB", parent: "Databases" })
db.categories.insert(  { _id: "dbm", parent: "Databases" })
db.categories.insert(  { _id: "Databases", parent: "Programming" })
db.categories.insert(  { _id: "Languages", parent: "Programming" })
db.categories.insert( { _id: "Programming", parent: "Books" })
db.categories.insert(  { _id: "Books", parent: null })
db.categories.find();
var item = db.categories.findOne({_id: "MongoDB"});
var stack = []; 
var ancestors = [];
var parent_l = 0;
stack.push(item);
while (stack.length > 0) {
	parent_l++;
	var current = stack.pop();
	var parent = db.categories.findOne({_id: current.parent});
	//print(tojson(parent)); 
	if (parent) {
		ancestors.push({ Name: parent._id, Level: parent_l });
		stack.push(parent);
	}
}
print("Question 1: "); 
ancestors


//question 2
var stack = []; 
var parent_tracker = {}; 
var descendants = []; 
var height =1; 
var item = db.categories.findOne({_id: "Books"});
stack.push(item);
while(stack.length>0){
	var current = stack.pop(); 
	var children = db.categories.find({parent:current._id}); 
	while(children.hasNext() == true){
		var child = children.next(); 
		if (!(child.parent in parent_tracker)) {
		height++; 
		parent_tracker[child.parent] = 1;
	}
		descendants.push({ Name: child._id, Height: height }); 
		stack.push(child); 
	}
}
print("Question 2:"); 
height 

// question 3 
use categories2
db.categories2.insert({ _id: "MongoDB", children: [] })
db.categories2.insert({ _id: "dbm", children: [] })
db.categories2.insert({ _id: "Databases", children: ["dbm", "MongoDB"] })
db.categories2.insert({ _id: "Languages", children: [] })
db.categories2.insert({ _id: "Programming", children: ["Databases", "Languages"] })
db.categories2.insert({  _id: "Books", children: ["Programming"] })
db.categories2.find();

var parent = db.categories2.findOne({ children: { $in: ["dbm"]}});
print("Question 3:");
parent 

//question 4 
var stack = [];
var descendants = [];
var item = db.categories2.findOne({_id: "Books"});
stack.push(item);
while (stack.length > 0) {
	var current = stack.pop();
	var children = db.categories2.find({_id: {$in: current.children}});

	while (children.hasNext()) {
		var child = children.next();
		descendants.push(child._id);
		stack.push(child);
	}
}
print("Question 4: "); 
descendants
