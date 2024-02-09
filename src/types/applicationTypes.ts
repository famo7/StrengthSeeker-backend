interface UserPayload {
    email: string;
    id: string;
}

export interface AuthenticatedRequest extends Request {
    user: UserPayload;
}


