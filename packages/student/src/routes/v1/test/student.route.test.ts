import request from "supertest";
import app from "../../../app"; // Adjust the import if the path is different

describe("POST /v1/students/become-student", () => {
  it("should create a new user when provided with valid input", async () => {
    const MOCK_USER = {
      school_name: "test_user",
      education: "belti",
      grade: 123,
      student_card: "8998"
    };

    const response = await request(app)
      .post("/v1/students/become-student")
      .send(MOCK_USER)
      .expect("Content-Type", /json/)
      .expect(201);

    expect(response.body.message).toBe("Success Signup");
    expect(response.body.data.school_name).toBe(MOCK_USER.school_name);
    expect(response.body.data.education).toBe(MOCK_USER.education);
    expect(response.body.data.grade).toBe(MOCK_USER.grade);
    expect(response.body.data.student_card).toBe(MOCK_USER.student_card);
    expect(response.body.token).toBeDefined();
  }, 50000);
});
