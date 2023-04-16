const http = require('http')
const { MongoClient } = require('mongodb')
require('dotenv').config();

async function writeApplication(client, body) {
    try {
      await client.connect()
      const database = client.db("JunctionDB");
      const team = database.collection("Applications");
      const doc = {
        team_id: body.team_id,
        letter: body.letter,
        userCV: body.userCV
      }
      const result = await team.insertOne(doc)
      
      console.log(`A document was inserted with the _id: ${result.insertedId}`)
      console.log(`Inserted document: `+ doc)
    } catch (e) {
        console.error(e)
    } finally {
      await client.close()
    }
  }

async function getTeams(client) {  
    try {
        await client.connect()
        const database = client.db("JunctionDB")
        const collection = database.collection("Teams")
        const items = collection.find()
        const body = await items.toArray()
        return body
    } catch (e) {
        console.error(e)
    } finally {
        await client.close()
    }
}

const hostname = '127.0.0.1'
const port = 8080

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.statusCode = 200
    const uri = `mongodb+srv://${process.env.USER_ID}:${process.env.USER_KEY}@cluster0.kanszg4.mongodb.net/test?retryWrites=true&w=majority`
    const client = new MongoClient(uri)
    if (req.method === 'GET') {
        const data = getTeams(client)
        data.then(result => {
            console.log('Fetched Teams from database')
            res.end(JSON.stringify(result))
        }) 
    } else if (req.method === 'POST') {
        let body
        req.on('data', chunk => {
            body = JSON.parse(chunk)
        })
        req.on('end', () => {
            writeApplication(client, body)
            .then((result) => {
                console.log("Sent application to database")
                res.end(JSON.stringify(result))
            } )
        })
    }
    else {
      res.end()
    }
});



server.listen(port, hostname, async () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});
    
