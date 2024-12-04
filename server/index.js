import express from 'express';
import cors from 'cors';
import healthRoutes from './routes/health.js';
import extensionRoutes from './routes/extensions.js';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/health', healthRoutes);
app.use('/api/extensions', extensionRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});