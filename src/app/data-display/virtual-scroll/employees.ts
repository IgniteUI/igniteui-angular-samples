export type DepartmentVariant = 'primary' | 'info' | 'success' | 'warning' | 'danger';

export interface Employee {
    id: number;
    name: string;
    initials: string;
    email: string;
    department: string;
    variant: DepartmentVariant;
    bio: string | null;
}

const DEPARTMENTS = ['Engineering', 'Design', 'Marketing', 'Sales', 'HR', 'Finance', 'Legal', 'Operations'];
const VARIANTS: DepartmentVariant[] = ['primary', 'info', 'success', 'warning', 'danger'];

const FIRST_NAMES = [
    'Alice', 'Bob', 'Carol', 'David', 'Eve', 'Frank', 'Grace', 'Henry',
    'Iris', 'Jack', 'Karen', 'Leo', 'Mia', 'Noah', 'Olivia', 'Paul'
];

const LAST_NAMES = [
    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller',
    'Davis', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson'
];

const BIOS = [
    'Leads a cross-functional team across three time zones and owns the quarterly delivery plan.',
    'Specializes in scalable service architecture.',
    'Passionate about accessible, pixel-perfect user interfaces and design systems that scale across products.',
    'Drives product strategy and stakeholder alignment.',
    'Champions data-driven decision making, runs the weekly metrics review and mentors new analysts.'
];

export function createEmployee(index: number): Employee {
    const first = FIRST_NAMES[index % FIRST_NAMES.length];
    const last = LAST_NAMES[Math.floor(index / FIRST_NAMES.length) % LAST_NAMES.length];
    const departmentIndex = index % DEPARTMENTS.length;

    return {
        id: index + 1,
        name: `${first} ${last}`,
        initials: `${first[0]}${last[0]}`,
        email: `${first.toLowerCase()}.${last.toLowerCase()}${index + 1}@example.com`,
        department: DEPARTMENTS[departmentIndex],
        variant: VARIANTS[departmentIndex % VARIANTS.length],
        bio: index % 3 === 0 ? BIOS[index % BIOS.length] : null
    };
}

export function generateEmployees(count: number, startIndex = 0): Employee[] {
    return Array.from({ length: count }, (_, i) => createEmployee(startIndex + i));
}
