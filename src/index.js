const application = require('express')();

application.get('/', (req, res ) => 
    res.json({ message: 'Docker is running...' }) 
);

const port_number = process.env.PORT || 8080;

application.listen(port_number, () => console.log(`app listening on http://localhost:${port_number}`) );