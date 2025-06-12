export interface Bus {
    id?: number;
    name: string;
    fromLocation: Location;
    toLocation: Location;
    type: string;
    stops: string[];
    departureTime: string;
    arrivalTime: string;
    capacity: number;
    registrationNumber: string;
}
export interface BusType {
    id: number;
    name: string;
}

export interface Location {
    id: number;
    name: string;
}