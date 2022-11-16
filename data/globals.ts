interface IGlobals {
    contactInfo: IContactInfo;
}

interface IContactInfo {
    mobileNumber: string;
    landlineNumber: string;
    email: string;
}

export const globals: IGlobals = {
    contactInfo: {
        mobileNumber: '077350 99987',
        landlineNumber: '01603 629218',
        email: 'contact@deedeecare.co.uk'
    }
}