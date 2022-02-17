const express = require('express');
require("../src/db/connect")
const meds = require('./routers/medsRoutes');
const authRoutes = require('./routers/admin/adminRoutes');
const userRoutes = require('./routers/user/userRoutes');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use('/api',meds);
app.use(cors());
app.use('/api',authRoutes);
app.use('/api',userRoutes)

app.listen(port,()=>{
    console.log(`Connection passed successfully at http://localhost:${port}`)
})
