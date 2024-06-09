import express from 'express';
import { healthRoutes } from './routes';

const app = express();

// Health Route [Not via API Gateway]
app.use('/health', healthRoutes);


//export defualt app
export default app;
