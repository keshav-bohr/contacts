import faker from 'faker'

const contacts = [...Array(10)].map((eachItem, index) => {
    return {
        id: index + 1,
        prefix: faker.name.prefix(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber()
    }
})

export function fetchContactsList() {
    return {
        status: 200,
        body: {
            success: true,
            contacts
        }
    }
}