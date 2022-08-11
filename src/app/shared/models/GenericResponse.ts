export type Roles = 'SUSCRIPTOR' | 'ADMIN';

export class GenericResponse{
    error: number;
    message: string;
    values: any;
    token: string;
    userId: number;
    role: Roles;
}