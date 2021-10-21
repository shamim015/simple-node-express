const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('WOW . I am excited to learn node and express autometic restart');
})

const users = [
    { id: 0, name: 'Shamim', email: "shamimur@gmail.com", phone: '01524521521' },
    { id: 1, name: 'Rakib', email: "Rakib@gmail.com", phone: '01524521521' },
    { id: 2, name: 'samia', email: "samia@gmail.com", phone: '01524521521' },
    { id: 3, name: 'sabbir', email: "sabbir@gmail.com", phone: '01524521521' },
    { id: 4, name: 'Hasan', email: "hasan@gmail.com", phone: '01524521521' },
    { id: 5, name: 'Zia', email: "zia@gmail.com", phone: '01524525221' },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if (search) {
        const searchResul = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResul);
    }
    else {

        res.send(users)
    }
});
// app.Method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser)
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})



app.listen(port, () => {
    console.log('Listening to port', port);
})