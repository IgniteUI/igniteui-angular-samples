export interface Destination {
    id: string;
    name: string;
    country: string;
    countryCode: string;
    region: string;
    offset: string;
}

export const destinations: Destination[] = [
    { id: 'SOF', name: 'Sofia', country: 'Bulgaria', countryCode: 'BG', region: 'Europe', offset: 'UTC+2' },
    { id: 'LON', name: 'London', country: 'United Kingdom', countryCode: 'GB', region: 'Europe', offset: 'UTC+0' },
    { id: 'PAR', name: 'Paris', country: 'France', countryCode: 'FR', region: 'Europe', offset: 'UTC+1' },
    { id: 'BER', name: 'Berlin', country: 'Germany', countryCode: 'DE', region: 'Europe', offset: 'UTC+1' },
    { id: 'MAD', name: 'Madrid', country: 'Spain', countryCode: 'ES', region: 'Europe', offset: 'UTC+1' },
    { id: 'ROM', name: 'Rome', country: 'Italy', countryCode: 'IT', region: 'Europe', offset: 'UTC+1' },
    { id: 'CPT', name: 'Cape Town', country: 'South Africa', countryCode: 'ZA', region: 'Africa', offset: 'UTC+2' },
    { id: 'NBO', name: 'Nairobi', country: 'Kenya', countryCode: 'KE', region: 'Africa', offset: 'UTC+3' },
    { id: 'CAI', name: 'Cairo', country: 'Egypt', countryCode: 'EG', region: 'Africa', offset: 'UTC+2' },
    { id: 'RAK', name: 'Marrakesh', country: 'Morocco', countryCode: 'MA', region: 'Africa', offset: 'UTC+1' },
    { id: 'TYO', name: 'Tokyo', country: 'Japan', countryCode: 'JP', region: 'Asia', offset: 'UTC+9' },
    { id: 'SIN', name: 'Singapore', country: 'Singapore', countryCode: 'SG', region: 'Asia', offset: 'UTC+8' },
    { id: 'BKK', name: 'Bangkok', country: 'Thailand', countryCode: 'TH', region: 'Asia', offset: 'UTC+7' },
    { id: 'DXB', name: 'Dubai', country: 'United Arab Emirates', countryCode: 'AE', region: 'Asia', offset: 'UTC+4' },
    { id: 'NYC', name: 'New York', country: 'United States', countryCode: 'US', region: 'Americas', offset: 'UTC-5' },
    { id: 'YTO', name: 'Toronto', country: 'Canada', countryCode: 'CA', region: 'Americas', offset: 'UTC-5' },
    { id: 'MEX', name: 'Mexico City', country: 'Mexico', countryCode: 'MX', region: 'Americas', offset: 'UTC-6' },
    { id: 'SAO', name: 'São Paulo', country: 'Brazil', countryCode: 'BR', region: 'Americas', offset: 'UTC-3' },
    { id: 'BUE', name: 'Buenos Aires', country: 'Argentina', countryCode: 'AR', region: 'Americas', offset: 'UTC-3' }
];
