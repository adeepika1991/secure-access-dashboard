// src/index.ts
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import protectedRoutes from './routes/protectedRoutes';  // Assuming you also want to use protectedRoutes

dotenv.config();

const app = express();
const port = process.env.PORT || 5050;

app.use(cors());
app.use(helmet());
app.use(express.json());

// Add this route for debugging purposes
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Add auth routes
app.use('/auth', authRoutes);

// Add protected routes (if needed)
app.use('/protected', protectedRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
