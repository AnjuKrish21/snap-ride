
export interface BookingRequestDTO {
    busId: number;
    noOfPassengers: number;
    passengers: PassengersRequestDTO[];
}

export interface PassengersRequestDTO {
    fullName: string;
    mobile: number;
    email?: string;
}

export interface BookingResponseDTO extends BookingRequestDTO {
    bookingId: number;
}