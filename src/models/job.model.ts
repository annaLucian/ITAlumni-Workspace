export interface Job {
    idJob: string;
    title: string;
    company: string;
    location: string;
    companyLogo: string;
    postedDate?: string;
    isReviewing?: boolean;
    isVerified?: boolean;
}
