const jsonServer = require("json-server");
const auth = require("json-server-auth");

const app = jsonServer.create();
const router = jsonServer.router("db.json");
const port = process.env.PORT || 3001;

app.db = router.db;

const rules = auth.rewriter({
  "/users*": "/660/users$1",
  "/vaccines*": "/660/vaccines$1",
  "/locals*": "/660/locals$1"
});

app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);

// {
//   "id" : 1,
//   "first_name": "Luciano",
//   "last_name": "Feder",
//   "enrollments": 1,
//   "class_rooms": 6,
//   "wage": 16 
// },
// {
//   "id" : 2,
//   "first_name": "Joseph",
//   "last_name": "Climber",
//   "enrollments": 3,
//   "class_rooms": 5,
//   "wage": 21
// },
// {
//   "id" : 3,
//   "first_name": "Famoso",
//   "last_name": "Irineu",
//   "enrollments": 2,
//   "class_rooms": 4,
//   "wage": 20
// },
// {
//   "id" : 4,
//   "first_name": "Peter",
//   "last_name": "Parker",
//   "enrollments": 5,
//   "class_rooms": 3,
//   "wage": 14
// },
// {
//   "id" : 5,
//   "first_name": "Harry",
//   "last_name": "Potter",
//   "enrollments": 4,
//   "class_rooms": 2,
//   "wage": 31
// },
// {
//   "id" : 6,
//   "first_name": "Tresque",
//   "last_name": "Dresque",
//   "enrollments": 3,
//   "class_rooms": 1,
//   "wage": 25
// }