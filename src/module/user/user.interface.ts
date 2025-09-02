export interface TUser {
    id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    photo?: string;
    needsPasswordChange: boolean;
    passwordChangeAt?: Date;
    role: 'ADMIN' | 'CUSTOMER';
    status: 'ACTIVE' | 'BLOCKED';
    isDeleted: boolean;
}

export type NewUser = {
    password: string;
    role: string;
    id: string;
};