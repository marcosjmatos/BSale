import cors from 'cors'
import express from 'express'
import routes from "./routes/products.js"
const app = express();
const PORT = process.env.PORT || 3000

app.use(cors({
    origin: 'http://localhost:3000',
}));

//Settings
app.set(PORT);


//Middlewares
app.use(express.json());

//Routes
app.use(routes)

//Starting the Server

app.listen(PORT,()=>{
    console.log(`Server connected on port ${PORT}`);
})

