const request = require("supertest");
const app = require("../../index");

describe("Post Endpoints", () => {
  beforeEach(() => jest.setTimeout(30000));

  it("Should create a new workspace", async () => {
    const res = await request(app)
      .post("/workspaces/add")
      .send({
        title: "test is cool",
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body.success).toBe(true);
  });
});
