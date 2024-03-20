import mongoose from "mongoose";

async function ConnectDB(){
    try {
        mongoose.connect(`mongodb+srv://gabrielpepepp:5Iw3C9V9T9KrR9A7@cluster0.weizypv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

export default ConnectDB;