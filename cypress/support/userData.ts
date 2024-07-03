import { faker } from '@faker-js/faker';

export interface UserData {
    username: string;
    password: string;
}

export interface CustomerData {
    firstName: string;
    lastName: string;
    postalCode: string;
}

export const incorrectUserData: UserData = {
    username: faker.internet.userName(),
    password: faker.internet.password(),
};

export const correctCustomerData: CustomerData = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    postalCode: faker.location.zipCode(),
};

export const incorrectCredentialsValidation = 'Epic sadface: Username and password do not match any user in this service';
export const successfulOrderInformation = 'Thank you for your order!';

export const firstNameValidation = 'Error: First Name is required';
export const lastNameValidation = 'Error: Last Name is required';
export const postalCodeValidation = 'Error: Postal Code is required';
export const paymentOption = 'SauceCard #31337';
