import type {Status} from "./status";

export interface Order {
    id: Number,
    description: String,
    status: Status
}