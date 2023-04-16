const { MongoClient } = require('mongodb')


const team1 = {
    title: "Green Energy Innovators",
    challenge: "Renewable Energy",
    description: "We are a team of 3 students who believe that green energy is the future and are using AI to optimize solar panel technology.",
    idea: "Develop a solar panel that can be easily installed on any roof and generates more electricity than traditional solar panels.",
    roles: ["Designer", "Programmer"],
    members: ["Nicole Jeffards", "Tomi Kivelä", "Aino Järvinen"],
    contactInfo: "team1@example.com"
};

const team2 = {
    title: "AI for Health",
    challenge: "AI Healthcare",
    description: "We are a team of 5 medical students who are passionate about using AI to improve patient outcomes.",
    idea: "Create a predictive algorithm that can identify patients at high risk for developing certain diseases.",
    roles: ["Data Scientist", "Medical Researcher", "Programmer"],
    members: ["John Smith", "Sarah Patel", "David Lee", "Emily Chen", "Avery Jones"],
    contactInfo: "team2@example.com"
};

const team3 = {
    title: "Smart Cities Builders",
    challenge: "Smart Cities",
    description: "We are a team of 4 engineering students who are developing self-driving cars that are safer and more efficient than traditional cars.",
    idea: "Develop a self-driving car that can communicate with other cars on the road to improve traffic flow.",
    roles: ["Software Engineer", "Electrical Engineer", "Mechanical Engineer"],
    members: ["Michael Johnson", "Alexandra Kim", "Kevin Chen", "Julia Rodriguez"],
    contactInfo: "team3@example.com"
};

const team4 = {
    title: "Agro Tech Wizards",
    challenge: "AI Agriculture",
    description: "We are a team of 6 architecture students who are developing a new type of elevator system for farms that is faster and more energy-efficient than traditional farming.",
    idea: "Develop an elevator system that uses AI to predict traffic patterns and optimize elevator movement.",
    roles: ["Architect", "Engineer", "Programmer"],
    members: ["Emma Wilson", "Oliver Davis", "Sophie Kim", "Samuel Brown", "Ella Jones", "Ethan Chen"],
    contactInfo: "team4@example.com"
};

const team5 = {
    title: "EcoSmart Homes",
    challenge: "Smart Cities",
    description: "We are a team of 3 computer science students who are developing a system to automate and optimize home energy use.",
    idea: "Create a system that uses AI to learn the energy usage patterns of a household and automatically adjust temperature and lighting to reduce energy consumption.",
    roles: ["Developer", "Data Analyst"],
    members: ["Jasmine Lee", "William Zhang", "Daniel Garcia"],
    contactInfo: "team5@example.com"
};

const team6 = {
    title: "Agriculture peeps",
    challenge: "AI Agriculture",
    description: "We are a team of 4 agricultural engineering students who are developing a system to optimize crop growth and reduce water usage.",
    idea: "Create a system that uses AI to monitor soil moisture levels and automatically adjust irrigation to reduce water waste.",
    roles: ["Engineer", "Programmer"],
    members: ["Olivia Smith", "Mason Lee", "Sophia Garcia", "Ethan Wilson"],
    contactInfo: "team6@example.com"
    }
    
    const team7 = {
    title: "CityHackers",
    challenge: "Smart Cities",
    description: "We are a team of 6 robotics enthusiasts who are developing a new generation of robots that can perform complex tasks autonomously.",
    idea: "Develop a robot that can assist in daily tasks in the house.",
    roles: ["Mechanical Engineer", "Electrical Engineer", "Software Engineer"],
    members: ["Liam Johnson", "Ava Davis", "Elijah Brown", "Nora Kim", "Isabella Lee", "Miles Garcia"],
    contactInfo: "team7@example.com"
    }
    
    const team8 = {
    title: "RoboDocs",
    challenge: "AI healthcare",
    description: "We are a team of 5 cybersecurity experts who are developing new strategies to prevent cyber attacks and protect sensitive healthcare data.",
    idea: "Develop an AI-powered system that can detect and respond to cyber threats in real-time.",
    roles: ["Security Analyst", "Penetration Tester", "Programmer"],
    members: ["Aiden Chen", "Zoe Wilson", "Evan Kim", "Mia Rodriguez", "Max Brown"],
    contactInfo: "team8@example.com"
    }
    
    const team9 = {
    title: "VR rockets",
    challenge:  "AI Healthcare",
    description: "We are a team of 3 computer science students who are developing a virtual reality platform for immersive learning experiences in healthcare.",
    idea: "Create a virtual reality platform that can be used to simulate real-world scenarios, such as medical procedures or emergency response training.",
    roles: ["Developer", "Designer"],
    members: ["Sophie Johnson", "Lucas Lee", "Oliver Kim"],
    contactInfo: "team9@example.com"
    }
    
    const team10 = {
    title: "Green Surfers",
    challenge:  "Renewable Energy",
    description: "We are a team of 4 engineers who are developing a new method for generating renewable energy from ocean waves.",
    idea: "Create a wave energy converter that uses AI to optimize power generation and reduce maintenance costs.",
    roles: ["Mechanical Engineer", "Electrical Engineer", "Programmer"],
    members: ["Mila Davis", "Noah Garcia", "Avery Johnson", "Ethan Kim"],
    contactInfo: "team10@example.com"
    }

    

    async function registerTeam(body) {
    const uri = `mongodb+srv://${process.env.USER_ID}:${process.env.USER_KEY}@cluster0.kanszg4.mongodb.net/test?retryWrites=true&w=majority`
    const client = new MongoClient(uri)
    try {
        await client.connect()
        const database = client.db("JunctionDB");
        const team = database.collection("Teams");
        const doc = {
          title: body.title,
          challenge: body.challenge,
          description: body.description,
          idea: body.idea,
          roles: body.roles,
          members: body.members,
          contactInfo: body.contactInfo
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

registerTeam(team1)
registerTeam(team2)
registerTeam(team3)
registerTeam(team4)
registerTeam(team5)
registerTeam(team6)
registerTeam(team7)
registerTeam(team8)
registerTeam(team9)
registerTeam(team10)