import express from 'express';

const router = express.Router()

const routes = () =>{
    router.get('/get',(req, res,next)=>{
        const str = "hello from router"
       let data =  getdetails(str)
       res.json(data)
    }
    )
    return router
};

function getdetails(str,res){
    console.log('hi there')
    return 'completed'
}
export default routes;