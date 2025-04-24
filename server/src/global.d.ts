// src/global.d.ts
declare namespace Express {
    export interface Request {
      user?: {
        userId: string;
      };
    }
  }
  