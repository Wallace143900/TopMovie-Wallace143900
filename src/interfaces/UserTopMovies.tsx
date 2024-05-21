export interface telaPrincipal {
    id: number;
    name: string;
    type: string;
    duration: number;
    synopsis: string;
    image: string;
}

export interface userCad{
    email: string;
    password: string;
    name: string;
}

export interface userLogin {
    email: string;
    password: string;
}

export interface createAvaliation{
    movieId: number;
    userId: number;
    score: number;
    description: string;
}