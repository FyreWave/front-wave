export type Maybe<T> = T | undefined | null;
export type MaybeFalse<T> = T | false;
export type MaybeNull<T> = T | null;
export type MaybeUndefined<T> = T | undefined;


/**
 * Pagination Type
 * Where T is the type of the items in the `data` array
 */
export type Pagination<T = any> = {
    total: number;
    perPage: number;
    page: number;
    lastPage: number;
    data: T[]
};

/**
 * Pagination Default
 * @constructor
 */
export function Pagination<T = any>(): Pagination<T> {
    return {
        total: 0,
        page: 1,
        perPage: 0,
        lastPage: 1,
        data: []
    };
}
