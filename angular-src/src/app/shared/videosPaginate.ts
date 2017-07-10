export class videoPaginate {
    docs:  {
        _id: string,
        title: string,
        url: string,
        discription: string
    };
    total: Number;
    limit: Number;
    page?: Number;
    pages?: Number;
}