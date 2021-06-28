const request = require("supertest");
const app = require("../../index");

describe("Post Endpoints", () => {
  beforeEach(() => jest.setTimeout(30000));

  it("Should delete a new workspace", async () => {
    const res = await request(app)
      .delete("/workspace/60d526d24f27b52ed40b9752");
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
  });
});
