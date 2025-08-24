export interface TUser {
    id: string;
    name: string;
    email: string;
    password: string;
    needsPasswordChange: boolean;
    passwordChangeAt?: Date;
    role: 'admin' | 'customer';
    status: 'active' | 'blocked';
    isDeleted: boolean;
}

export type NewUser = {
    password: string;
    role: string;
    id: string;
};