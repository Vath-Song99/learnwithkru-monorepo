import { classSchema} from "../class-schema"
describe('StudentSchemas', () => {
  it('should validate the schema correctly', () => {
    const validData = {
      school_name: "Springfield Elementary",
      subject: "english",
      email: "thontha@gmail.com"
    };

    expect(() => classSchema.parse(validData)).not.toThrow();

    const invalidData = {
        school_name: "S",
        subject: "H",
        email: "thon"
    };

    expect(() => classSchema.parse(invalidData)).toThrow();
  });

  it('should fail if required fields are missing', () => {
    const missingFields = {};

    expect(() => classSchema.parse(missingFields)).toThrow();
  });

  it('should fail if fields exceed max length', () => {
    const invalidData = {

      school_name: "S".repeat(51),
      subject: "High School",
      email: "thontha@gmail.com"
    };

    expect(() => classSchema.parse(invalidData)).toThrow();
  });

  it('should fail if fields are below min length', () => {
    const invalidData = {
        school_name: "S".repeat(51),
        subject: "H",
        email: "t"
    };

    expect(() => classSchema.parse(invalidData)).toThrow();
  });
});
