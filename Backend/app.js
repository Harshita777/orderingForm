const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const formRoutes = require('./routes/formRoutes');
require('dotenv').config();
require('./config/database');

const app = express();
const port = process.env.PORT || 3015;

app.use(morgan('dev'));
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(bodyParser.json());

app.use(formRoutes);

app.use((req, res) => {
    res.status(404).json({ error: '404 Not Found' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});