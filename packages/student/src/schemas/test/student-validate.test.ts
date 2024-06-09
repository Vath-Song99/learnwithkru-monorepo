
import { StudentSchemas } from "../student-validate"; // Adjust the import path accordingly

describe('StudentSchemas', () => {
  it('should validate the schema correctly', () => {
    const validData = {
      school_name: "Springfield Elementary",
      education: "High School",
      grade: 10,
      student_card: "ABC123"
    };

    expect(() => StudentSchemas.parse(validData)).not.toThrow();

    const invalidData = {
      school_name: "S",
      education: "H",
      grade: "10", // Incorrect type
      student_card: "ABC123"
    };

    expect(() => StudentSchemas.parse(invalidData)).toThrow();
  });

  it('should fail if required fields are missing', () => {
    const missingFields = {};

    expect(() => StudentSchemas.parse(missingFields)).toThrow();
  });

  it('should fail if fields exceed max length', () => {
    const invalidData = {
      school_name: "S".repeat(51), // Exceeds max length
      education: "High School",
      grade: 10,
      student_card: "ABC123"
    };

    expect(() => StudentSchemas.parse(invalidData)).toThrow();
  });

  it('should fail if fields are below min length', () => {
    const invalidData = {
      school_name: "S",
      education: "H", // Below min length
      grade: 10,
      student_card: "ABC123"
    };

    expect(() => StudentSchemas.parse(invalidData)).toThrow();
  });
});
