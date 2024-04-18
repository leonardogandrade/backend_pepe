import mongoose from "mongoose";

// comando para rodar local:
// export DATABASE_CONNECTIONSTRING=mongodb://mongodb:mongodb@localhost:27000/emissions?authSource=admin
const dbConnectionString:any = process.env.DATABASE_CONNECTIONSTRING;

async function ConnectDB(){
    try {
        // mongoose.connect(`mongodb+srv://gabrielpepepp:5Iw3C9V9T9KrR9A7@cluster0.weizypv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        mongoose.connect(`mongodb+srv://carbonacess:x5zsodeSjHIWIULq@carbonemissions.hjfkne3.mongodb.net/emissions?retryWrites=true&w=majority&appName=CarbonEmissions/emissions`)
        // mongoose.connect(`mongodb://mongodb:mongodb@localhost:27000/emissions?authSource=admin`)
        
        // mongoose.connect(dbConnectionString)/
        console.log('conectou!');
        
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

export default ConnectDB;