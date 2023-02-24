import {derived, writable} from "svelte/store";

export interface Employee {
    id: Number,
    firstName: String,
    lastName: String,
    role: String
}

export const employeeData = writable<Employee>();

export const employees = derived(employeeData, ($employeeData) => {
    if ($employeeData.)
})