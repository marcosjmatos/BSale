import express from "express"
import getClient from "../database.js"
const router = express.Router();


const client = getClient()

router.get("/products", (req, res) => {
    client.query(`SELECT * FROM product`, (err, rows, field) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})


router.get("/category", (req, res) => {
    client.query("SELECT * FROM category", (err, rows, field) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})


router.get("/category/products/:category" , (req,res)=>{
    const {category} = req.params
    client.query("SELECT * FROM product WHERE category = ?", [category], (err,rows,field)=>{
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})


router.get("/products/:name", (req, res) => {
    let name = req.params.name;
    client.query("SELECT * FROM product WHERE name like ?",
        ['%' + name + '%'],
        function (err, rows, field) {
            if (!err) {
                res.send(rows);
            } else {
                console.log(err);
            }
        }
    );
}
);



export default router