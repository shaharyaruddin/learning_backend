import { employee } from "@/app/db/employee";
import { NextResponse } from "next/server";

export const GET = () => {
  const data = employee;
  return NextResponse.json(data);
};
