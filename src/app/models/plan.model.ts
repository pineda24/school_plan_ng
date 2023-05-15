export class PlanModel {
    clave!: string;
    carrer!: number;
    materi!: number;
    fecalt!: Date;
    fecbaj?: Date | null = null;
    area?: string | null = null;
    reqsim?: number | null = null;
    requi1?: number | null = null;
    requi2?: number | null = null;
    requi3?: number | null = null;
    requi4?: number | null = null;
    semest!: number;
}
