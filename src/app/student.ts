export interface Student {
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    nationality: string,
    occup? : string,
    gender: "Male" | "Female",
    homeAddress: string,
    status: "Single" | "Married",
    elemSchool: string,
    highSchool: string,
    college? : string
}
