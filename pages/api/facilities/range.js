import connectDB from '../../../db'
import Hotel from '../../../models/hotel-model'




export default async function handler(req,res){
    if(req.method === 'GET'){
        connectDB();
        const hotels = await Hotel.find({'Price':{$lte : req.query.Price}});  //$lte means less than or equal to
        res.status(200).json({msg:'Range Filter.', hotels});
    }
}