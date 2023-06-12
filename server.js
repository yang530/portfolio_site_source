
const express = require("express");
const app = express();
app.use(express.json());

const PORT = 5000;
const mysql = require("mysql");
const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "portfolio_site"
    }
);

app.get("/getPrjs", (req, res)=>{

    //connection.connect();

    connection.query("SELECT * FROM projects", (err, rows, fields)=>{

        if(err){
            throw err;
        }

        console.log(JSON.stringify(rows));   
        
        //connection.end();
    
        res.json(rows);
    });

});

app.post("/addPrj", (req, res)=>{

    let prjName = req.body.prjName.toString();
    let prjPath = req.body.prjPath.toString();
    let github = req.body.github.toString();
    let prjDescr = req.body.prjDescr.toString();

    //connection.connect();
    console.log(prjName, prjPath, github, prjDescr);
    connection.query(
        `INSERT INTO projects (prjName, prjPath, github, prjDescr) VALUES ('${prjName}', '${prjPath}', '${github}', '${prjDescr}');`, 
        (err, rows, fields)=>{

            if(err){
                throw err;
            }
            //connection.end();
            res.send("upload successful");

        }
    );

});

app.post("/rmPrj", (req, res)=>{

    let prjID = req.body.prjID.toString();
    let prjName = req.body.prjName.toString();

    //connection.connect();
    
    connection.query(
        `DELETE FROM projects WHERE \`prj_ID\`='${prjID}' AND \`prjName\`='${prjName}';`, 
        (err, rows, fields)=>{

            if(err){
                throw err;
            }
            //connection.end();
            res.send("delete completed");

        }
    );

});

app.post("/editPrj", (req, res)=>{

    let prjID = req.body.prjID.toString();

    //connection.connect();
    
    const data = [];

    //check if variables are defined
    if(req.body.prjName !== null && req.body.prjName !== undefined){
        data.push({col: "prjName", val: req.body.prjName.toString()});
    }
    if(req.body.prPath !== null && req.body.prjPath !== undefined){
        data.push({col: "prjPath", val: req.body.prjPath.toString()});
    }
    if(req.body.github !== null && req.body.github !== undefined){
        data.push({col: "github", val: req.body.github.toString()});
    }
    if(req.body.prjDescr !== null && req.body.prjDescr !== undefined){
        data.push({col: "prjDescr", val: req.body.prjDescr.toString()});
    }

    let setStr = "";
    let loopEnd = data.length;

    if(loopEnd == 0){

        //connection.end();
        res.send("input is empty, no update is made.");

    }else{

        //prepare "SET" part of the SQL statement
        for(let i=0; i<loopEnd; i++){
    
            setStr += `\`${data[i].col}\`='${data[i].val}'`;
    
            if(i < loopEnd-1){
                setStr += ", ";
            }
    
        }
    
        //prepare the entire SQL statement
        let stmt = "UPDATE projects SET " + setStr + ` WHERE \`prj_ID\`='${prjID}' ;`;
        console.log(stmt);
    
        connection.query(stmt, (err, rows, fields)=>{
    
                if(err){
                    throw err;
                }
                //connection.end();
                res.send("update completed");
    
            }
        );

    }


});

app.listen(PORT, ()=>{
    console.log(`Server listening port ${PORT}`);
});
