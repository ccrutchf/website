interface PublicationModel {
    authors: string[];
    title: string;
    titleHref: string;
    journal?: string;
    conference?: string;
    volume?: number;
    issue?: number;
    article?: number;
    month: number;
    year: number;
}

export default PublicationModel;