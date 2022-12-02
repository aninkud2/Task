const express=require("express");
const mysql=require("mysql");
const port=9182;
const app=express();
app.use(express.json())
const mysqlconvar=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"practicedb",
    multipleStatements:true
})
mysqlconvar.connect((err)=>{if (err){console.log("Unable to connect to the db")}
else{console.log("Connectected to the db ")}})
// to see all table
app.get("/allstaffs",(req,res)=>{
    mysqlconvar.query("SELECT * FROM newtable",(error,rows,)=>{
        if(error){console.log("Cannot access db")}
        else{res.send(rows)}
     } )


});
/// delete table
app.delete("/deleteall",(req,res)=>{
    mysqlconvar.query("DROP table newtable",(error)=>{
        if(error){console.log("Cannot delete")}
        else{res.send("Sucessfully deleted")}
     } )
    })
    // delete one
    app.delete("/delete/:id",(req,res)=>{
        mysqlconvar.query("DELETE FROM newtable WHERE id=?",[req.params.id],(error)=>{
            if(error){console.log("Cannot delete id"),res.send("Cannot delete the id")}
            else{res.send("Sucessfully deleted")}
         } )
        })
// deletedb
app.delete("/deletedb",(req,res)=>{
    mysqlconvar.query("DROP DATABASE practicedb",(error)=>{
        if(error){res.send("Cannot delete"),console.log("Cannot delete")}
        else{res.send("Database has been deleted")}
     } )
    })
     //  delete one id
     app.delete("/deletetable/:id",(req,res)=>{
        const Id=req.params.id;
        mysqlconvar.query("DELETE FROM newtable where Id=?",[Id],(error,result)=>{
            if(error){res.send("Cannot delete"),console.log("Cannot delete")}
            else{if(result.affectedRows==0){res.send("Id not found"),console.log(result)}
                else{res.send("Id field deleted")}}

})
     })
     ;
// to create new record
app.put("/update/:id",(req,res)=>{
    const Hub=req.body.Hub;
    const Riders=req.body.Riders;
    const Apointment=req.body.Apointment;
    const Id=req.params.id;
    mysqlconvar.query("UPDATE newtable SET Hub=?,Riders=?,Apointment=? WHERE Id=?",[Hub,Riders,Apointment,Id],(err,result)=>{if (err){console.log("Cannot Update")}
else{
    //,console.log(result)
    if (result.affectedRows==0){res.send("ID not found")}
    else{res.send("Good job")}
    
    
}
})

})
app.post("/post",(req,res)=>{
    const Hub=req.body.Hub;
    const Riders=req.body.Riders;
    const Apointment=req.body.Apointment;
    const Id=req.params.id;
    mysqlconvar.query("INSERT INTO newtable VALUES(?,?,?,?)",[Id,Hub,Riders,Apointment],(err)=>{if (err){console.log("Cannot post")}
else(res.send("Post action sucessful")) 
})

})
app.listen(port,()=>{console.log("conected to the port:"+port)}) 