import { NextResponse } from "next/server";
import { FormSearchType } from "src/types";

export async function postRequest(newSearch: FormSearchType) {
  const res = await fetch("https://httpbin.org/anything", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ newSearch }),
  });

  const data = await res.json();

  return NextResponse.json(data);
}
