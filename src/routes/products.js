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

router.get("/products/:id" , (req,res)=>{
    const {id} = req.params
    client.query("SELECT * FROM product WHERE id = ?", [id], (err,rows,field)=>{
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})



export default router