import express from "express";
import router from "./router.js";
import env from "dotenv";
import cors from "cors";
import './DBConnection/dbConnect.js';
env.config();


const port = process.env.PORT 
const app = express();

app.use(cors());
app.use(express.json());

app.use('/app', router);



//In case someone use wrong or invalid URL
app.use((req,res) => { 
    res.status(404).json({
        status: false,
        message: 'URL does not exist Seller Lead'
    });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});