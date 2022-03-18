const PORT = process.env.PORT || 8000
const express = require('express')
const app = express()
const cors = require('cors')
const Datastore = require('nedb')

const database = new Datastore('databse.db')
database.loadDatabase()

app.use(cors({
    origin: '*'
}))

app.get("/", (req, res) => {
    res.json(
        {
            status: "online",
            days: "try this: ./{dayNumber} or ./{exer}",
            info: "Sunday - Saturday : 0 - 6"
        }
    )
})


const liegestütze = {
    title: "25 Liegestütze",
    time: 2,
    description: "Stärkt die Arme und die Brust."
}
const sitUps = {
    title: "40 SitUps",
    time: 2,
    description: "Bauchmuskeln, vor allem Sixpack"
}
const beineHeben = {
    title: "Beine Heben",
    time: "25 wdh.",
    description: "obere Bauchmuskulatur wird beansprucht"
}
const russianTwist = {
    title: "Russian Twist",
    time: "20 wdh.",
    description: "Verbrennt Bauchfett"
}
const cobra = {
    title: "Kobra",
    time: 2,
    description: "Yoga-Position zum dehnen des Rückens"
}
const blackroll = {
    title: "Blackroll",
    time: 2,
    description: "Öffnen vom Brustkorb"
}
const plank = {
    title: "Plank",
    time: 2,
    description: "Für die Bauchmuskeln und den Willen"
}
const seilspringen = {
    title: "Seilspringen",
    time: 1.5,
    description: "Für die Ausdauer und zum Aufwärmen"
}
const butterfly = {
    title: "Butterfly",
    time: "3 x 10",
    description: "Stärkt Arme, Schultern und die Brust."
}
const winkelziehen = {
    title: "Winkelziehen",
    time: "3 x 10",
    description: "Brust beanspruchen"
}
const schrägBankdrücken = {
    title: "Schräg bankdrücken",
    time: "3 x 10",
    description: "Brust und Arme schänden"
}
const langhantelcurl = {
    title: "Langhantelcurl",
    time: "3 x 10",
    description: "Arme und Brust schänden"
}
const hammercurls = {
    title: "Hammercurls",
    time: "3 x 10",
    description: "Bizeps schänden"
}
const kurzhantelcurls = {
    title: "Kurzhantelcurls",
    time: "3 x 10",
    description: "Bizeps stärken"
}
const ausdauer = {
    title: "Ausdauer Übung",
    time: 30,
    description: "Gehe laufen, Fahrrad fahren, Rudern oä."
}
const armkreisenrw = {
    title: "Armkreisen rückwärts",
    time: 0.5,
    description: "Kreise deine Arme rückwärts"
}
const armkreisenvw = {
    title: "Armkreisen vorwärts",
    time: 0.5,
    description: "Kreise deine Arme vorwärts"
}
const jumpingSquats = {
    title: "Jumping Squats",
    time: 0.5,
    description: "Hock-streck-sprünge"
}
const mountainClimber = {
    title: "Mountain Climber",
    time: 1,
    description: "Im Liegestütz die Beine Richtung Bauch ziehen"
}


//Sunday - Saturday : 0 - 6

app.get("/0", (reg, res) => {
    res.json(
        [exer0 = seilspringen,
        exer1 = liegestütze,
        exer2 = plank,
        exer3 = butterfly,
        exer4 = winkelziehen,
        exer5 = schrägBankdrücken,
        exer6 = langhantelcurl,
        exer7 = hammercurls,
        exer8 = kurzhantelcurls,
        ]
    )
})
app.get("/1", (reg, res) => {
    res.json(
        [
            exer0 = seilspringen,
            exer1 = liegestütze,
            exer2 = plank,
            exer3 = butterfly,
            exer4 = winkelziehen,
            exer5 = schrägBankdrücken,
            exer6 = langhantelcurl,
            exer7 = hammercurls,
            exer8 = kurzhantelcurls,
        ]
    )
})
app.get("/2", (reg, res) => {
    res.json(
        [
            exer0 = seilspringen,
            exer1 = liegestütze,
            exer2 = plank,
            exer3 = butterfly,
            exer4 = winkelziehen,
            exer5 = schrägBankdrücken,
            exer6 = langhantelcurl,
            exer7 = hammercurls,
            exer8 = kurzhantelcurls,
        ]
    )
})
app.get("/3", (reg, res) => {
    res.json(
        [
            exer0 = seilspringen,
            exer1 = liegestütze,
            exer2 = plank,
            exer3 = butterfly,
            exer4 = winkelziehen,
            exer5 = schrägBankdrücken,
            exer6 = langhantelcurl,
            exer7 = hammercurls,
            exer8 = kurzhantelcurls,
        ]
    )
})
app.get("/4", (reg, res) => {
    res.json(
        [
            exer0 = seilspringen,
            exer1 = liegestütze,
            exer2 = plank,
            exer3 = butterfly,
            exer4 = winkelziehen,
            exer5 = schrägBankdrücken,
            exer6 = langhantelcurl,
            exer7 = hammercurls,
            exer8 = kurzhantelcurls,
        ]
    )
})
app.get("/5", (reg, res) => {
    res.json(
        [
            exer0 = seilspringen,
            exer1 = liegestütze,
            exer2 = plank,
            exer3 = butterfly,
            exer4 = winkelziehen,
            exer5 = schrägBankdrücken,
            exer6 = langhantelcurl,
            exer7 = hammercurls,
            exer8 = kurzhantelcurls,
        ]
    )
})
app.get("/6", (reg, res) => {
    res.json(
        [
            exer0 = seilspringen,
            exer1 = liegestütze,
            exer2 = plank,
            exer3 = butterfly,
            exer4 = winkelziehen,
            exer5 = schrägBankdrücken,
            exer6 = langhantelcurl,
            exer7 = hammercurls,
            exer8 = kurzhantelcurls,
        ]
    )
})

app.get("/warmup", (reg, res) => {
    res.json(
        [
            exer0 = seilspringen,
            exer1 = armkreisenrw,
            exer2 = armkreisenvw,
            exer3 = jumpingSquats,
            exer4 = mountainClimber
        ]
    )
})
app.get("/kraft", (reg, res) => {
    res.json(
        [
            exer0 = kurzhantelcurls,
        ]
    )
})
app.get("/koordination", (reg, res) => {
    res.json(
        [
            exer0 = seilspringen,
        ]
    )
})
app.get("/beweglichkeit", (reg, res) => {
    res.json(
        [
            exer0 = blackroll,
        ]
    )
})
app.get("/ausdauer", (reg, res) => {
    res.json(
        [
            exer0 = ausdauer,
        ]
    )
})
app.get("/cooldown", (reg, res) => {
    res.json(
        [
            exer0 = cobra,
        ]
    )
})
app.listen(PORT, () => console.log(`Running on PORT: ${PORT}`))