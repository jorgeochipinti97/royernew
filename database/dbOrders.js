import OrderRoyer from "@/Models/Order";
import { db } from ".";

import { isValidObjectId } from "mongoose";



export const getAllOrders = async (id) => {

  await db.connectDB();
  const order = await OrderRoyer.find().lean();


  if (!order) {
    return null;
  }

  return JSON.parse(JSON.stringify(order));
};

