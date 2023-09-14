export const statesList = [
    { name: 'Alabama', abbreviation: 'AL' },
    { name: 'Kentucky', abbreviation: 'KY' },
    { name: 'Ohio', abbreviation: 'OH' },
    { name: 'Alaska', abbreviation: 'AK' },
    { name: 'Louisiana', abbreviation: 'LA' },
    { name: 'Oklahoma', abbreviation: 'OK' },
    { name: 'Arizona', abbreviation: 'AZ' },
    { name: 'Maine', abbreviation: 'ME' },
    { name: 'Oregon', abbreviation: 'OR' },
    { name: 'Arkansas', abbreviation: 'AR' },
    { name: 'Maryland', abbreviation: 'MD' },
    { name: 'Pennsylvania', abbreviation: 'PA' },
    { name: 'Massachusetts', abbreviation: 'MA' },
    { name: 'Puerto Rico', abbreviation: 'PR' },
    { name: 'California', abbreviation: 'CA' },
    { name: 'Michigan', abbreviation: 'MI' },
    { name: 'Rhode Island', abbreviation: 'RI' },
    { name: 'Colorado', abbreviation: 'CO' },
    { name: 'Minnesota', abbreviation: 'MN' },
    { name: 'South Carolina', abbreviation: 'SC' },
    { name: 'Connecticut', abbreviation: 'CT' },
    { name: 'Mississippi', abbreviation: 'MS' },
    { name: 'South Dakota', abbreviation: 'SD' },
    { name: 'Delaware', abbreviation: 'DE' },
    { name: 'Missouri', abbreviation: 'MO' },
    { name: 'Tennessee', abbreviation: 'TN' },
    { name: 'Washington DC', abbreviation: 'DC' },
    { name: 'Montana', abbreviation: 'MT' },
    { name: 'Texas', abbreviation: 'TX' },
    { name: 'Florida', abbreviation: 'FL' },
    { name: 'Nebraska', abbreviation: 'NE' },
    { name: 'Georgia', abbreviation: 'GA' },
    { name: 'Nevada', abbreviation: 'NV' },
    { name: 'Utah', abbreviation: 'UT' },
    { name: 'New Hampshire', abbreviation: 'NH' },
    { name: 'Vermont', abbreviation: 'VT' },
    { name: 'Hawaii', abbreviation: 'HI' },
    { name: 'New Jersey', abbreviation: 'NJ' },
    { name: 'Virginia', abbreviation: 'VA' },
    { name: 'Idaho', abbreviation: 'ID' },
    { name: 'New Mexico', abbreviation: 'NM' },
    { name: 'Virgin Islands', abbreviation: 'VI' },
    { name: 'Illinois', abbreviation: 'IL' },
    { name: 'New York', abbreviation: 'NY' },
    { name: 'Washington', abbreviation: 'WA' },
    { name: 'Indiana', abbreviation: 'IN' },
    { name: 'North Carolina', abbreviation: 'NC' },
    { name: 'West Virginia', abbreviation: 'WV' },
    { name: 'Iowa', abbreviation: 'IA' },
    { name: 'North Dakota', abbreviation: 'ND' },
    { name: 'Wisconsin', abbreviation: 'WI' },
    { name: 'Kansas', abbreviation: 'KS' },
    { name: 'Wyoming', abbreviation: 'WY' },
];

export const states = statesList.sort(function (a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
});