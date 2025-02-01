import { employee } from "@/app/db/employee";
import { NextResponse } from "next/server";

export const GET = (req: any, value: any) => {
  const unique = value.params.employeeId;
  const data = employee;
  const result = data.filter((item) => item?.empId == unique);
  return result.length === 0
    ? NextResponse.json({ result: "No result Found", status: 400 })
    : NextResponse.json(result, { status: 200 });
};
