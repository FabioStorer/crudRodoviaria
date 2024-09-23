import express from 'express';
import passenger_route from './http/routes/passenger_route.js';
import route_route from './http/routes/route_route.js';
import travel_route from './http/routes/travel_route.js';
import user_route from './http/routes/user_route.js';
import vehicle_route from './http/routes/vehicle_route.js';
import driver_route from './http/routes/driver_route.js';
const app = express();

app.use(express.json());
app.use('/', passenger_route);
app.use('/', route_route);
app.use('/', travel_route);
app.use('/', user_route);
app.use('/', vehicle_route);
app.use('/', driver_route);

app.listen(process.env.API_PORT, () => {
    console.log(`Server running at port ${process.env.API_PORT}`);
});