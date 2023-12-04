import { Request, Response, NextFunction } from "express";

export const homeControllrer = () => {
  const getHomeStaticData = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    res.status(200).json({ sucess: true }).send();
  };

  return { getHomeStaticData };
};
