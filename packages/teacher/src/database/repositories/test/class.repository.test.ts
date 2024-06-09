

import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { ClassRepository } from "../../repositories/class.repository";
// import { ClassModel } from "../../models/class.model";
// import { ApiError } from "../../../error/base-custom-error";
import { IClass } from "../../../@types/class.type";

let mongoServer: MongoMemoryServer;

// let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});


describe("ClassRepository Integration Tests", () => {
  let classRepository: ClassRepository;

  beforeEach(() => {
    classRepository = new ClassRepository();
  });

  describe("CreateClass", () => {
    it("should create a class successfully", async () => {
      const mockClass: IClass = {
        class_name: "computer",
        subject: "english",
        email: "thontha@gmail.com",
      };

      const createdClass = await classRepository.CreateClass(mockClass);

      // Assert
      expect(createdClass).toBeDefined();
      expect(createdClass.class_name).toEqual(mockClass.class_name);
      expect(createdClass.email).toEqual(mockClass.email);
      expect(createdClass.subject).toEqual(mockClass.subject);
    });

 
  });
});
