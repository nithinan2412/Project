const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
var port = process.env.PORT || 7077


app.use(cors());
app.use(express.json());



const db  = mysql.createConnection({
  user: "pma_admin",
  host: "localhost",
  password: "b871dbba1b340294ec51",
  database: "Billslim",
});

const db2 = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "0832380120",
  database: "billslim",
});

app.get("/users", (req, res) => {
    db.query("SELECT * FROM users", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
});

app.get("/chart/usetime", (req ,res) => {
  const userid = req.query.userid
  db.query("SELECT usetime, vote FROM functions WHERE userid =? ORDER BY usetime DESC LIMIT 5"
  ,[userid],(err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  }
  );
  
  
});

app.get("/chart/usetime2", (req ,res) => {
  const userid = req.query.userid
  db.query("SELECT success - usetime as period,COUNT(1) as cnt FROM functions WHERE userid =? and success >= DATE_SUB(CURRENT_DATE, INTERVAL 1 MONTH) GROUP BY success - usetime "
  ,[userid],(err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  }
  );
  
  
});


app.get("/users/equiment", (req, res) => {
  const userid = req.query.userid

  db.query("SELECT success FROM `functions` WHERE userid = ?",[userid], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/Profile/profile", (req, res) => {
  const userid = req.query.userid

  db.query("SELECT * FROM `users` WHERE userid = ?",[userid], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/users/checkid", (req, res) => {
  const userid = req.body.userid;
  const pass = req.body.pass;

    
    db.query("SELECT * FROM users WHERE userid = ? AND pass = ? ",[userid, pass] , (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.post("/create", (req, res) => {
  const fname = req.body.fname;
  const lname  = req.body.lname;
  const userid = req.body.userid;
  const email = req.body.email;
  const pass = req.body.pass;

  db.query(
    "INSERT INTO users (fname, lname, userid, email, pass) VALUES (?,?,?,?,?)",
    [fname, lname, userid, email, pass],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log("success insert");
      }
    }
  );
});

app.post("/Switch/Open", (req, res) => {

      const userid = req.body.userid;


      db.query(
        "INSERT INTO `functions`(userid) VALUES (?)",
        [userid],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
            console.log("success insert");
          }
        }
      );
      db.query(
        "UPDATE `stat` SET stat = 1"
      );
});

app.put("/Switch/Close", (req, res) => {

      const id = req.body.id;
      const vote = req.body.vote;
      const comment = req.body.comment;
      const temp = req.body.temp;


      db.query(
        "UPDATE functions SET success = NOW(), vote = ?, comment = ?, temp =? WHERE id = ?;",
        [vote, comment, temp, id],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
            console.log("success insert");
          }
        }
      );
      db.query(
        "UPDATE `stat` SET stat = 0"
  );
});

app.listen(port, () => {
        console.log("Yey, your server is running on port 7077..");
      });

      app.put("/update/profile", (req, res) => {
        const fname = req.body.fname;
        const lname  = req.body.lname;
        const weight  = req.body.weight;
        const height  = req.body.height;
        const age  = req.body.age;
        const day  = req.body.day;
        const userid = req.body.userid;

        db.query(
          "UPDATE users SET fname = ?, lname = ?, weight = ?,height = ?, age = ?, day = ? WHERE userid = ?;",
          [fname, lname, weight, height, age, day, userid],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send(result);
            }
          }
        );
});


app.put("/Switch/Temp", (req, res) => {
  const temp = req.body.temp;
  

  db.query(
    "UPDATE stat SET temp = ?;",
    [temp],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});


//app.get("/Chart/")

/*app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});*/