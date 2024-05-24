import { Student } from "../@types/student.type";
import { StudentServices } from "../services/student-services";

export class StudentController {
    async Signup (requestBody: Student , decodeId: string){
        const student = {decodeId , ...requestBody}
        console.log(student)
        try{
            const service = new StudentServices();
            const newStudent = await service.Signup(student);
            
            return newStudent
        }catch(error: unknown){
            throw error
        }
    }
}