export type ListContentsResponse<T> = {
    contents: T[];
    totalCount: number;
    offset: number;
    limit: number;
};

export type ContentResponse<T> = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
} & T;

export type WorkResponse = ContentResponse<{
    name: string;
    url?: string;
    image: {
        url: string;
        width: number;
        height: number;
    };
    description: string;
    caption: string;
    category: CategoryResponse;
}>;

export type WorkListResponse = ListContentsResponse<WorkResponse>;

export type CategoryResponse = ContentResponse<{
    name: string;
}>;

export type CategoryListResponse = ListContentsResponse<CategoryResponse>;
