import { Pagination } from './_pagination.interface'

export interface Data<T> {
    pagination?: Pagination
    data: T
    success: boolean
}
