import { Student } from "../../@types/student.type";


export interface StudentService extends Student {
    decodeId: string
}