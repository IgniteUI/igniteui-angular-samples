export interface Employee {
  Age: number;
  Employees?: Employee[];
  HireDate: Date;
  ID: number;
  Name: string;
  Location: string;
  Country: string;
  Picture: string;
  JobTitle: string;
  Department: string;
  Contacts: string;
  GrossSalary: number;
}

export const EMPLOYEE_DATA: Employee[] = [
  {
    Age: 55,
    Employees: [
      {
        Age: 43,
        Employees: [
          {
            Age: 27,
            Employees: [],
            HireDate: new Date(2020, 2, 1),
            ID: 7,
            Name: 'Anna White',
            Location: 'London',
            Country: 'GBR',
            Picture: 'assets/images/women/1.jpg',
            JobTitle: 'Marketing Specialist',
            Department: 'Marketing',
            Contacts: 'Anna.White@outlook.com',
            GrossSalary: 62000
          },
          {
            Age: 30,
            Employees: [],
            HireDate: new Date(2017, 4, 15),
            ID: 8,
            Name: 'James Lee',
            Location: 'New York',
    Country: 'USA',
            Picture: 'assets/images/men/1.jpg',
            JobTitle: 'Sales Manager',
            Department: 'Sales',
            Contacts: 'James.Lee@outlook.com',
            GrossSalary: 75000
          }
        ],
        HireDate: new Date(2011, 6, 3),
        ID: 3,
        Name: 'Michael Burke',
        Location: 'London',
    Country: 'GBR',
        Picture: 'assets/images/men/2.jpg',
        JobTitle: 'Director of Engineering',
        Department: 'Engineering',
        Contacts: 'Michael.Burke@outlook.com',
        GrossSalary: 95000
      },
      {
        Age: 29,
        Employees: [
          {
            Age: 24,
            Employees: [],
            HireDate: new Date(2022, 3, 10),
            ID: 9,
            Name: 'Sophia Green',
            Location: 'Paris',
    Country: 'FRA',
            Picture: 'assets/images/women/2.jpg',
            JobTitle: 'Graphic Designer',
            Department: 'Marketing',
            Contacts: 'Sophia.Green@outlook.com',
            GrossSalary: 58000
          }
        ],
        HireDate: new Date(2015, 3, 12),
        ID: 4,
        Name: 'Sarah Johnson',
        Location: 'New York',
    Country: 'USA',
        Picture: 'assets/images/women/3.jpg',
        JobTitle: 'VP of Marketing',
        Department: 'Marketing',
        Contacts: 'Sarah.Johnson@outlook.com',
        GrossSalary: 87000
      }
    ],
    HireDate: new Date(2005, 11, 1),
    ID: 1,
    Name: 'John Smith',
    Location: 'San Francisco',
    Country: 'USA',
    Picture: 'assets/images/men/3.jpg',
    JobTitle: 'CEO',
    Department: 'Operations',
    Contacts: 'John.Smith@outlook.com',
    GrossSalary: 150000
  },
  {
    Age: 42,
    Employees: [
      {
        Age: 35,
        Employees: [
          {
            Age: 29,
            Employees: [],
            HireDate: new Date(2016, 7, 23),
            ID: 10,
            Name: 'Daniel Brown',
            Location: 'Berlin',
    Country: 'DEU',
            Picture: 'assets/images/men/4.jpg',
            JobTitle: 'Account Manager',
            Department: 'Finance',
            Contacts: 'Daniel.Brown@outlook.com',
            GrossSalary: 70000
          }
        ],
        HireDate: new Date(2013, 4, 21),
        ID: 5,
        Name: 'David Wilson',
        Location: 'Chicago',
    Country: 'USA',
        Picture: 'assets/images/men/5.jpg',
        JobTitle: 'VP of Sales',
        Department: 'Sales',
        Contacts: 'David.Wilson@outlook.com',
        GrossSalary: 120000
      },
      {
        Age: 31,
        Employees: [],
        HireDate: new Date(2018, 1, 15),
        ID: 6,
        Name: 'Emily Davis',
        Location: 'Paris',
    Country: 'FRA',
        Picture: 'assets/images/women/4.jpg',
        JobTitle: 'Director of Marketing',
        Department: 'Marketing',
        Contacts: 'Emily.Davis@outlook.com',
        GrossSalary: 98000
      }
    ],
    HireDate: new Date(2010, 9, 13),
    ID: 2,
    Name: 'Emma Thompson',
    Location: 'Berlin',
    Country: 'DEU',
    Picture: 'assets/images/women/5.jpg',
    JobTitle: 'COO',
    Department: 'Operations',
    Contacts: 'Emma.Thompson@outlook.com',
    GrossSalary: 140000
  },
  {
    Age: 48,
    Employees: [
      {
        Age: 36,
        Employees: [
          {
            Age: 28,
            Employees: [],
            HireDate: new Date(2018, 6, 18),
            ID: 11,
            Name: 'Lucas Wright',
            Location: 'Madrid',
    Country: 'ESP',
            Picture: 'assets/images/men/6.jpg',
            JobTitle: 'Software Engineer',
            Department: 'Engineering',
            Contacts: 'Lucas.Wright@outlook.com',
            GrossSalary: 82000
          }
        ],
        HireDate: new Date(2014, 5, 10),
        ID: 12,
        Name: 'Nina Parker',
        Location: 'Madrid',
    Country: 'ESP',
        Picture: 'assets/images/women/6.jpg',
        JobTitle: 'HR Manager',
        Department: 'Human Resources',
        Contacts: 'Nina.Parker@outlook.com',
        GrossSalary: 78000
      },
      {
        Age: 32,
        Employees: [],
        HireDate: new Date(2017, 8, 23),
        ID: 13,
        Name: 'Oliver King',
        Location: 'San Francisco',
    Country: 'USA',
        Picture: 'assets/images/men/7.jpg',
        JobTitle: 'Product Manager',
        Department: 'Product',
        Contacts: 'Oliver.King@outlook.com',
        GrossSalary: 90000
      }
    ],
    HireDate: new Date(2008, 3, 4),
    ID: 14,
    Name: 'Sophie Harris',
    Location: 'San Francisco',
    Country: 'USA',
    Picture: 'assets/images/women/7.jpg',
    JobTitle: 'Chief Product Officer',
    Department: 'Product',
    Contacts: 'Sophie.Harris@outlook.com',
    GrossSalary: 145000
  },
  {
    Age: 50,
    Employees: [
      {
        Age: 40,
        Employees: [],
        HireDate: new Date(2012, 10, 15),
        ID: 15,
        Name: 'Rachel Moore',
        Location: 'Sydney',
    Country: 'AUS',
        Picture: 'assets/images/women/8.jpg',
        JobTitle: 'Financial Analyst',
        Department: 'Finance',
        Contacts: 'Rachel.Moore@outlook.com',
        GrossSalary: 89000
      },
      {
        Age: 33,
        Employees: [],
        HireDate: new Date(2019, 1, 25),
        ID: 16,
        Name: 'William White',
        Location: 'Chicago',
    Country: 'USA',
        Picture: 'assets/images/men/8.jpg',
        JobTitle: 'Sales Engineer',
        Department: 'Sales',
        Contacts: 'William.White@outlook.com',
        GrossSalary: 85000
      }
    ],
    HireDate: new Date(2010, 11, 30),
    ID: 17,
    Name: 'Aaron Miller',
    Location: 'Sydney',
    Country: 'AUS',
    Picture: 'assets/images/men/9.jpg',
    JobTitle: 'CTO',
    Department: 'Technology',
    Contacts: 'Aaron.Miller@outlook.com',
    GrossSalary: 155000
  },
  {
    Age: 45,
    Employees: [
      {
        Age: 37,
        Employees: [
          {
            Age: 29,
            Employees: [],
            HireDate: new Date(2020, 9, 5),
            ID: 18,
            Name: 'Mia Scott',
            Location: 'Paris',
    Country: 'FRA',
            Picture: 'assets/images/women/9.jpg',
            JobTitle: 'UX Designer',
            Department: 'Design',
            Contacts: 'Mia.Scott@outlook.com',
            GrossSalary: 72000
          }
        ],
        HireDate: new Date(2016, 4, 19),
        ID: 19,
        Name: 'Noah Lewis',
        Location: 'Berlin',
    Country: 'DEU',
        Picture: 'assets/images/men/10.jpg',
        JobTitle: 'Senior Developer',
        Department: 'Engineering',
        Contacts: 'Noah.Lewis@outlook.com',
        GrossSalary: 95000
      }
    ],
    HireDate: new Date(2009, 7, 11),
    ID: 20,
    Name: 'Grace Martinez',
    Location: 'Paris',
    Country: 'FRA',
    Picture: 'assets/images/women/10.jpg',
    JobTitle: 'Chief Design Officer',
    Department: 'Design',
    Contacts: 'Grace.Martinez@outlook.com',
    GrossSalary: 138000
  },
  {
    Age: 39,
    Employees: [
      {
        Age: 29,
        Employees: [],
        HireDate: new Date(2017, 5, 11),
        ID: 21,
        Name: 'Harry Turner',
        Location: 'Tokyo',
    Country: 'JPN',
        Picture: 'assets/images/men/11.jpg',
        JobTitle: 'Project Manager',
        Department: 'Project Management',
        Contacts: 'Harry.Turner@outlook.com',
        GrossSalary: 88000
      }
    ],
    HireDate: new Date(2011, 3, 19),
    ID: 22,
    Name: 'Chloe Edwards',
    Location: 'Tokyo',
    Country: 'JPN',
    Picture: 'assets/images/women/11.jpg',
    JobTitle: 'VP of Product',
    Department: 'Product',
    Contacts: 'Chloe.Edwards@outlook.com',
    GrossSalary: 125000
  },
  {
    Age: 55,
    Employees: [
      {
        Age: 42,
        Employees: [],
        HireDate: new Date(2014, 9, 30),
        ID: 23,
        Name: 'Mark Hughes',
        Location: 'London',
    Country: 'GBR',
        Picture: 'assets/images/men/12.jpg',
        JobTitle: 'Engineering Manager',
        Department: 'Engineering',
        Contacts: 'Mark.Hughes@outlook.com',
        GrossSalary: 105000
      },
      {
        Age: 30,
        Employees: [],
        HireDate: new Date(2020, 11, 14),
        ID: 24,
        Name: 'Ella Watson',
        Location: 'London',
    Country: 'GBR',
        Picture: 'assets/images/women/12.jpg',
        JobTitle: 'Software Engineer',
        Department: 'Engineering',
        Contacts: 'Ella.Watson@outlook.com',
        GrossSalary: 82000
      }
    ],
    HireDate: new Date(2007, 8, 2),
    ID: 25,
    Name: 'William Carter',
    Location: 'London',
    Country: 'GBR',
    Picture: 'assets/images/men/13.jpg',
    JobTitle: 'VP of Engineering',
    Department: 'Engineering',
    Contacts: 'William.Carter@outlook.com',
    GrossSalary: 150000
  },
  {
    Age: 47,
    Employees: [
      {
        Age: 33,
        Employees: [],
        HireDate: new Date(2016, 10, 5),
        ID: 26,
        Name: 'Olivia James',
        Location: 'New York',
    Country: 'USA',
        Picture: 'assets/images/women/13.jpg',
        JobTitle: 'Finance Manager',
        Department: 'Finance',
        Contacts: 'Olivia.James@outlook.com',
        GrossSalary: 95000
      }
    ],
    HireDate: new Date(2009, 6, 21),
    ID: 27,
    Name: 'Henry Bell',
    Location: 'New York',
    Country: 'USA',
    Picture: 'assets/images/men/14.jpg',
    JobTitle: 'CFO',
    Department: 'Finance',
    Contacts: 'Henry.Bell@outlook.com',
    GrossSalary: 160000
  },
  {
    Age: 41,
    Employees: [
      {
        Age: 28,
        Employees: [],
        HireDate: new Date(2018, 3, 12),
        ID: 28,
        Name: 'Samantha Adams',
        Location: 'Berlin',
    Country: 'DEU',
        Picture: 'assets/images/women/14.jpg',
        JobTitle: 'Business Analyst',
        Department: 'Business',
        Contacts: 'Samantha.Adams@outlook.com',
        GrossSalary: 78000
      }
    ],
    HireDate: new Date(2013, 7, 8),
    ID: 29,
    Name: 'Nathan Evans',
    Location: 'Berlin',
    Country: 'DEU',
    Picture: 'assets/images/men/15.jpg',
    JobTitle: 'Head of Business Development',
    Department: 'Business',
    Contacts: 'Nathan.Evans@outlook.com',
    GrossSalary: 115000
  },
  {
    Age: 53,
    Employees: [
      {
        Age: 39,
        Employees: [],
        HireDate: new Date(2019, 12, 10),
        ID: 30,
        Name: 'Isaac Thomas',
        Location: 'Chicago',
    Country: 'USA',
        Picture: 'assets/images/men/16.jpg',
        JobTitle: 'Operations Manager',
        Department: 'Operations',
        Contacts: 'Isaac.Thomas@outlook.com',
        GrossSalary: 98000
      }
    ],
    HireDate: new Date(2011, 2, 25),
    ID: 31,
    Name: 'Charlotte Foster',
    Location: 'Chicago',
    Country: 'USA',
    Picture: 'assets/images/women/15.jpg',
    JobTitle: 'COO',
    Department: 'Operations',
    Contacts: 'Charlotte.Foster@outlook.com',
    GrossSalary: 145000
  },
  {
    Age: 60,
    Employees: [
      {
        Age: 43,
        Employees: [],
        HireDate: new Date(2013, 11, 7),
        ID: 32,
        Name: 'Victoria Perry',
        Location: 'Madrid',
    Country: 'ESP',
        Picture: 'assets/images/women/16.jpg',
        JobTitle: 'Lead Designer',
        Department: 'Design',
        Contacts: 'Victoria.Perry@outlook.com',
        GrossSalary: 97000
      }
    ],
    HireDate: new Date(2006, 4, 18),
    ID: 33,
    Name: 'Adrian Hill',
    Location: 'Madrid',
    Country: 'ESP',
    Picture: 'assets/images/men/17.jpg',
    JobTitle: 'Chief Creative Officer',
    Department: 'Design',
    Contacts: 'Adrian.Hill@outlook.com',
    GrossSalary: 142000
  },
  {
    Age: 37,
    Employees: [
      {
        Age: 27,
        Employees: [],
        HireDate: new Date(2021, 6, 1),
        ID: 34,
        Name: 'Dylan Ward',
        Location: 'Sydney',
    Country: 'AUS',
        Picture: 'assets/images/men/18.jpg',
        JobTitle: 'Sales Executive',
        Department: 'Sales',
        Contacts: 'Dylan.Ward@outlook.com',
        GrossSalary: 71000
      }
    ],
    HireDate: new Date(2015, 9, 25),
    ID: 35,
    Name: 'Zoe Wood',
    Location: 'Sydney',
    Country: 'AUS',
    Picture: 'assets/images/women/17.jpg',
    JobTitle: 'Sales Director',
    Department: 'Sales',
    Contacts: 'Zoe.Wood@outlook.com',
    GrossSalary: 115000
  },
  {
    Age: 55,
    Employees: [
      {
        Age: 32,
        Employees: [],
        HireDate: new Date(2021, 7, 19),
        ID: 36,
        Name: 'Benjamin Clark',
        Location: 'Toronto',
    Country: 'CAN',
        Picture: 'assets/images/men/19.jpg',
        JobTitle: 'Junior Developer',
        Department: 'Engineering',
        Contacts: 'Benjamin.Clark@outlook.com',
        GrossSalary: 68000
      }
    ],
    HireDate: new Date(2010, 3, 4),
    ID: 37,
    Name: 'Sophie Ward',
    Location: 'Toronto',
    Country: 'CAN',
    Picture: 'assets/images/women/18.jpg',
    JobTitle: 'Senior Developer',
    Department: 'Engineering',
    Contacts: 'Sophie.Ward@outlook.com',
    GrossSalary: 118000
  },
  {
    Age: 46,
    Employees: [
      {
        Age: 34,
        Employees: [],
        HireDate: new Date(2016, 8, 15),
        ID: 38,
        Name: 'Liam Bell',
        Location: 'San Francisco',
    Country: 'USA',
        Picture: 'assets/images/men/20.jpg',
        JobTitle: 'HR Specialist',
        Department: 'Human Resources',
        Contacts: 'Liam.Bell@outlook.com',
        GrossSalary: 85000
      }
    ],
    HireDate: new Date(2008, 11, 25),
    ID: 39,
    Name: 'Olivia Nelson',
    Location: 'San Francisco',
    Country: 'USA',
    Picture: 'assets/images/women/19.jpg',
    JobTitle: 'HR Director',
    Department: 'Human Resources',
    Contacts: 'Olivia.Nelson@outlook.com',
    GrossSalary: 132000
  },
  {
    Age: 50,
    Employees: [
      {
        Age: 37,
        Employees: [],
        HireDate: new Date(2019, 4, 7),
        ID: 40,
        Name: 'Noah Harris',
        Location: 'Sydney',
    Country: 'AUS',
        Picture: 'assets/images/men/21.jpg',
        JobTitle: 'Network Administrator',
        Department: 'IT',
        Contacts: 'Noah.Harris@outlook.com',
        GrossSalary: 78000
      }
    ],
    HireDate: new Date(2011, 10, 3),
    ID: 41,
    Name: 'Ava Thompson',
    Location: 'Sydney',
    Country: 'AUS',
    Picture: 'assets/images/women/20.jpg',
    JobTitle: 'IT Manager',
    Department: 'IT',
    Contacts: 'Ava.Thompson@outlook.com',
    GrossSalary: 125000
  },
  {
    Age: 57,
    Employees: [
      {
        Age: 44,
        Employees: [],
        HireDate: new Date(2015, 5, 22),
        ID: 42,
        Name: 'Mason Young',
        Location: 'Berlin',
    Country: 'DEU',
        Picture: 'assets/images/men/22.jpg',
        JobTitle: 'Legal Assistant',
        Department: 'Legal',
        Contacts: 'Mason.Young@outlook.com',
        GrossSalary: 90000
      }
    ],
    HireDate: new Date(2007, 6, 16),
    ID: 43,
    Name: 'Ella King',
    Location: 'Berlin',
    Country: 'DEU',
    Picture: 'assets/images/women/21.jpg',
    JobTitle: 'Legal Director',
    Department: 'Legal',
    Contacts: 'Ella.King@outlook.com',
    GrossSalary: 148000
  },
  {
    Age: 45,
    Employees: [
      {
        Age: 29,
        Employees: [],
        HireDate: new Date(2020, 2, 1),
        ID: 44,
        Name: 'Sophia Wright',
        Location: 'Tokyo',
    Country: 'JPN',
        Picture: 'assets/images/women/22.jpg',
        JobTitle: 'Customer Support Specialist',
        Department: 'Support',
        Contacts: 'Sophia.Wright@outlook.com',
        GrossSalary: 68000
      }
    ],
    HireDate: new Date(2012, 1, 5),
    ID: 45,
    Name: 'Jacob Lewis',
    Location: 'Tokyo',
    Country: 'JPN',
    Picture: 'assets/images/men/23.jpg',
    JobTitle: 'Support Director',
    Department: 'Support',
    Contacts: 'Jacob.Lewis@outlook.com',
    GrossSalary: 125000
  },
  {
    Age: 49,
    Employees: [
      {
        Age: 30,
        Employees: [],
        HireDate: new Date(2018, 12, 10),
        ID: 46,
        Name: 'Henry Baker',
        Location: 'Madrid',
    Country: 'ESP',
        Picture: 'assets/images/men/24.jpg',
        JobTitle: 'Sales Associate',
        Department: 'Sales',
        Contacts: 'Henry.Baker@outlook.com',
        GrossSalary: 74000
      }
    ],
    HireDate: new Date(2014, 11, 17),
    ID: 47,
    Name: 'Mia Mitchell',
    Location: 'Madrid',
    Country: 'ESP',
    Picture: 'assets/images/women/23.jpg',
    JobTitle: 'Sales Director',
    Department: 'Sales',
    Contacts: 'Mia.Mitchell@outlook.com',
    GrossSalary: 140000
  },
  {
    Age: 56,
    Employees: [
      {
        Age: 40,
        Employees: [],
        HireDate: new Date(2017, 6, 14),
        ID: 48,
        Name: 'Emily Ramirez',
        Location: 'Dubai',
    Country: 'ARE',
        Picture: 'assets/images/women/24.jpg',
        JobTitle: 'Marketing Associate',
        Department: 'Marketing',
        Contacts: 'Emily.Ramirez@outlook.com',
        GrossSalary: 78000
      }
    ],
    HireDate: new Date(2009, 3, 9),
    ID: 49,
    Name: 'James Cox',
    Location: 'Dubai',
    Country: 'ARE',
    Picture: 'assets/images/men/25.jpg',
    JobTitle: 'Chief Marketing Officer',
    Department: 'Marketing',
    Contacts: 'James.Cox@outlook.com',
    GrossSalary: 160000
  },
  {
    Age: 51,
    Employees: [
      {
        Age: 36,
        Employees: [],
        HireDate: new Date(2021, 3, 28),
        ID: 50,
        Name: 'Avery Perez',
        Location: 'London',
    Country: 'GBR',
        Picture: 'assets/images/men/26.jpg',
        JobTitle: 'IT Technician',
        Department: 'IT',
        Contacts: 'Avery.Perez@outlook.com',
        GrossSalary: 67000
      }
    ],
    HireDate: new Date(2012, 5, 11),
    ID: 51,
    Name: 'Grace Scott',
    Location: 'London',
    Country: 'GBR',
    Picture: 'assets/images/women/25.jpg',
    JobTitle: 'IT Director',
    Department: 'IT',
    Contacts: 'Grace.Scott@outlook.com',
    GrossSalary: 145000
  },
  {
    Age: 53,
    Employees: [
      {
        Age: 38,
        Employees: [],
        HireDate: new Date(2021, 5, 21),
        ID: 52,
        Name: 'Harper Blake',
        Location: 'New York',
    Country: 'USA',
        Picture: 'assets/images/women/26.jpg',
        JobTitle: 'Systems Analyst',
        Department: 'IT',
        Contacts: 'Harper.Blake@outlook.com',
        GrossSalary: 93000
      }
    ],
    HireDate: new Date(2008, 9, 4),
    ID: 53,
    Name: 'Nathan Bell',
    Location: 'New York',
    Country: 'USA',
    Picture: 'assets/images/men/27.jpg',
    JobTitle: 'IT Manager',
    Department: 'IT',
    Contacts: 'Nathan.Bell@outlook.com',
    GrossSalary: 130000
  },
  {
    Age: 45,
    Employees: [
      {
        Age: 29,
        Employees: [],
        HireDate: new Date(2020, 4, 14),
        ID: 54,
        Name: 'Ella Brooks',
        Location: 'Paris',
    Country: 'FRA',
        Picture: 'assets/images/women/27.jpg',
        JobTitle: 'Customer Success Manager',
        Department: 'Support',
        Contacts: 'Ella.Brooks@outlook.com',
        GrossSalary: 78000
      }
    ],
    HireDate: new Date(2010, 11, 7),
    ID: 55,
    Name: 'Jack Scott',
    Location: 'Paris',
    Country: 'FRA',
    Picture: 'assets/images/men/28.jpg',
    JobTitle: 'Customer Success Director',
    Department: 'Support',
    Contacts: 'Jack.Scott@outlook.com',
    GrossSalary: 120000
  },
  {
    Age: 59,
    Employees: [
      {
        Age: 41,
        Employees: [],
        HireDate: new Date(2019, 8, 12),
        ID: 56,
        Name: 'Olivia Barnes',
        Location: 'Berlin',
    Country: 'DEU',
        Picture: 'assets/images/women/28.jpg',
        JobTitle: 'Senior Financial Analyst',
        Department: 'Finance',
        Contacts: 'Olivia.Barnes@outlook.com',
        GrossSalary: 99000
      }
    ],
    HireDate: new Date(2006, 6, 2),
    ID: 57,
    Name: 'Lucas Cook',
    Location: 'Berlin',
    Country: 'DEU',
    Picture: 'assets/images/men/29.jpg',
    JobTitle: 'Chief Financial Officer',
    Department: 'Finance',
    Contacts: 'Lucas.Cook@outlook.com',
    GrossSalary: 175000
  },
  {
    Age: 40,
    Employees: [
      {
        Age: 26,
        Employees: [],
        HireDate: new Date(2022, 3, 5),
        ID: 58,
        Name: 'Emma Morris',
        Location: 'Chicago',
    Country: 'USA',
        Picture: 'assets/images/women/29.jpg',
        JobTitle: 'Graphic Designer',
        Department: 'Design',
        Contacts: 'Emma.Morris@outlook.com',
        GrossSalary: 70000
      }
    ],
    HireDate: new Date(2013, 1, 25),
    ID: 59,
    Name: 'Mason Perez',
    Location: 'Chicago',
    Country: 'USA',
    Picture: 'assets/images/men/30.jpg',
    JobTitle: 'Head of Design',
    Department: 'Design',
    Contacts: 'Mason.Perez@outlook.com',
    GrossSalary: 130000
  },
  {
    Age: 48,
    Employees: [
      {
        Age: 33,
        Employees: [],
        HireDate: new Date(2018, 11, 19),
        ID: 60,
        Name: 'Lily Turner',
        Location: 'Dubai',
    Country: 'ARE',
        Picture: 'assets/images/women/30.jpg',
        JobTitle: 'Operations Analyst',
        Department: 'Operations',
        Contacts: 'Lily.Turner@outlook.com',
        GrossSalary: 82000
      }
    ],
    HireDate: new Date(2009, 10, 28),
    ID: 61,
    Name: 'James Jenkins',
    Location: 'Dubai',
    Country: 'ARE',
    Picture: 'assets/images/men/31.jpg',
    JobTitle: 'VP of Operations',
    Department: 'Operations',
    Contacts: 'James.Jenkins@outlook.com',
    GrossSalary: 145000
  },
  {
    Age: 43,
    Employees: [
      {
        Age: 30,
        Employees: [],
        HireDate: new Date(2019, 9, 9),
        ID: 62,
        Name: 'Sophia Nelson',
        Location: 'Madrid',
    Country: 'ESP',
        Picture: 'assets/images/women/31.jpg',
        JobTitle: 'Sales Coordinator',
        Department: 'Sales',
        Contacts: 'Sophia.Nelson@outlook.com',
        GrossSalary: 77000
      }
    ],
    HireDate: new Date(2011, 7, 14),
    ID: 63,
    Name: 'Aiden Stewart',
    Location: 'Madrid',
    Country: 'ESP',
    Picture: 'assets/images/men/32.jpg',
    JobTitle: 'Sales Director',
    Department: 'Sales',
    Contacts: 'Aiden.Stewart@outlook.com',
    GrossSalary: 130000
  },
  {
    Age: 52,
    Employees: [
      {
        Age: 39,
        Employees: [],
        HireDate: new Date(2017, 12, 20),
        ID: 64,
        Name: 'Evelyn Bryant',
        Location: 'Toronto',
    Country: 'CAN',
        Picture: 'assets/images/women/32.jpg',
        JobTitle: 'Marketing Manager',
        Department: 'Marketing',
        Contacts: 'Evelyn.Bryant@outlook.com',
        GrossSalary: 88000
      }
    ],
    HireDate: new Date(2007, 12, 11),
    ID: 65,
    Name: 'Henry Foster',
    Location: 'Toronto',
    Country: 'CAN',
    Picture: 'assets/images/men/33.jpg',
    JobTitle: 'Chief Marketing Officer',
    Department: 'Marketing',
    Contacts: 'Henry.Foster@outlook.com',
    GrossSalary: 155000
  },
  {
    Age: 47,
    Employees: [
      {
        Age: 34,
        Employees: [],
        HireDate: new Date(2018, 6, 18),
        ID: 66,
        Name: 'Isabella Hayes',
        Location: 'Tokyo',
    Country: 'JPN',
        Picture: 'assets/images/women/33.jpg',
        JobTitle: 'Product Designer',
        Department: 'Product',
        Contacts: 'Isabella.Hayes@outlook.com',
        GrossSalary: 89000
      }
    ],
    HireDate: new Date(2010, 4, 30),
    ID: 67,
    Name: 'Benjamin Rivera',
    Location: 'Tokyo',
    Country: 'JPN',
    Picture: 'assets/images/men/34.jpg',
    JobTitle: 'Product Lead',
    Department: 'Product',
    Contacts: 'Benjamin.Rivera@outlook.com',
    GrossSalary: 135000
  }
];
