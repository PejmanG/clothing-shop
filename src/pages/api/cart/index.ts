import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";

import { sessionOptions } from "../../../utils/session";
import { prisma } from "../../../utils/prisma-client";

import { ICart } from "../../../hooks/useCart";
import { IApiError } from "../auth/login";

export default withIronSessionApiRoute(
  cartRoute,
  sessionOptions
);

async function cartRoute(
  req: NextApiRequest,
  res: NextApiResponse<ICart | IApiError>
) {
  if (req.method === "GET") {
  } else if (req.method === "PUT") {
  }
  return res
    .status(400)
    .json({ status: "ERROR", message: "Bad Request." });
}