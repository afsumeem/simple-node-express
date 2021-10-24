const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello hello from my first node server, wow!');
});


const users = [
    { id: 0, name: 'shabana', email: 'shabana@gmail.com', phone: '012849374' },
    { id: 1, name: 'shabnoor', email: 'shabnoor@gmail.com', phone: '01772849374' },
    { id: 2, name: 'soniya', email: 'soniya@gmail.com', phone: '01992849374' },
    { id: 3, name: 'suchorita', email: 'suchorita@gmail.com', phone: '01882849374' },
    { id: 4, name: 'shimu', email: 'shimu@gmail.com', phone: '012849374' },
    { id: 5, name: 'shiuly', email: 'shiuly@gmail.com', phone: '012849374' }
];


app.get('/users', (req, res) => {
    const search = req.query.search;
    console.log(search);

    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    } else {
        res.send(users);
    }

    res.send(users);
});


//app.METHOD

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);

    // res.send(JSON.stringify(newUser))

    res.json(newUser);
})


//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});


app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana', 'apple']);
})


app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok fazli')
})



app.listen(port, () => {
    console.log('listening to port', port);
})