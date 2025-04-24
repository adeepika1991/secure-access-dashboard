/// <reference path="../../types/express/index.d.ts" />
import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';
import { prisma } from '../prisma';

interface AuthenticatedRequest extends Express.Request {
  user?: {
    userId: string;
  };
}

const router = Router();

router.get('/profile', authMiddleware, async (req: AuthenticatedRequest, res) => {
  console.log("Decoded User ID:", req.user?.userId);
  const user = await prisma.user.findUnique({
    where: { id: Number(req.user?.userId) },
  });

  if (!user) {
    res.status(404).json({ error: 'User not found' });
    return;
  }

  res.status(200).json({ user });
});

export default router;
