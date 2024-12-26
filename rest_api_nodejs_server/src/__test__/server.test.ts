import request from "supertest";
import server from "../server";

describe("GET /api", () => {
  it("status 200 & welcome msg/", async () => {
    const res = await request(server).get("/api");
    expect(res.status).toBe(200);
    expect(res.headers["content-type"]).toMatch(/json/);
    expect(res.body).toEqual({ msg: "Mensaje desde endpoint" });
    expect(res.status).not.toBe(404);
  });
});