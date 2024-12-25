import request from "supertest";
import server from "../server";

describe("GET /api", () => {
  it("Should send back a json response /", async () => {
    const res = await request(server).get("/api");
    expect(res.status).toBe(200);
    // expect(res.body).toEqual({ msg: "Mensaje desde endpoint" });
  });
});