export interface Counter {
    value: number
}

export interface CounterSchema {
    data: Counter;
    isLoading: boolean;
    error?: string;
}