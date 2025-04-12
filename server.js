import express from 'express';

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express();

app.use(express.json());

app.get('/usuarios', async (req, res) => {

    const users =  await prisma.user.findMany()

    res.status(200).json(users);
});

app.post('/usuarios', async (req, res) => {

    const user = await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    })
    console.log(user);

    res.status(201).json({ message: 'Usuario creado' });

    
});

app.put('/usuarios/:id', async (req, res) => {

    const user = await prisma.user.update({
        
        where:  {
            id: req.params.id
        },
         data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    })
    

    res.status(200).json(user);

    
});

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete ({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ message: 'Usuario eliminado' });
});



app.listen(3000);
// usuario mongodb - albert , senha -  Z8svXif1a5ZOwPo9 //

