import { MongoClient } from "mongodb"

const uri = "mongodb://root:mongopassword@localhost:27017?retryWrites=true&writeConcern=majority";

const client = new MongoClient(uri);

try {
    await client.connect();

    const database = client.db('ort');
    const personas = database.collection('personas');
    const persona = await personas.findOne({ id: 1 });

    console.log(persona);
} catch (error) {
    console.log(error)
} finally {
    await client.close();
}

