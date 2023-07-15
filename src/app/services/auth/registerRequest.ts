export interface RegisterUserRequest {
    firstName: string;
    lastName: string;
    user: string;
    password: string;
    email: string;
    genre: string;
    weight: number;
    desiredWeight: number;
    height: number;
}

export interface RegisterNutritionistRequest {
    firstName: string;
    lastName: string;
    user: string;
    password: string;
    email: string;
    genre: string;
}