// tslint:disable: max-line-length
export interface IPlanet {
    name: string;
    moons: string[];
    totalMoonsCount: number;
    size: number;
    color: string;
    description: string;
}

export interface IMoon {
    name: string;
    planet: string;
    mass: string;
    diameter: string;
    orbitalPeriod: string;
    orbitalRadius: string;
}

export const planetData: IPlanet[] = [
    { name: "Mercury", moons: [], totalMoonsCount: 0, size: 1, color: "#694010", description: "Both Mercury and Venus have no orbiting satellites."},
    { name: "Venus", moons: [], totalMoonsCount: 0, size: 3, color: "#e9a041", description: "Both Mercury and Venus have no orbiting satellites."},
    { name: "Earth", moons: ["Moon"], totalMoonsCount: 1, size: 3, color: "#4eb862", description: "Moon is the fifth-largest natural satellite in the Solar System, and the largest among planetary satellites relative to the size of the planet that it orbits (its primary). The Moon is after Jupiter's satellite 'Io' the second-densest satellite in the Solar System among those whose densities are known."},
    { name: "Mars", moons: ["Phobos", "Deimos"], totalMoonsCount: 2, size: 2, color: "#ff134a", description: "The two moons of Mars are Phobos and Deimos. Both were discovered by Asaph Hall in August 1877 and are named after the Greek mythological twin characters Phobos (panic/fear) and Deimos (terror/dread) who accompanied their father Ares into battle. Ares, god of war, was known to the Romans as Mars."},
    { name: "Jupiter", moons: ["Callisto", "Ganymede", "Io", "Europa"], totalMoonsCount: 79, size: 7, color: "#E76824", description: "Moon is the fifth-largest natural satellite in the Solar System, and the largest among planetary satellites relative to the size of the planet that it orbits (its primary). The Moon is after Jupiter's satellite Io the second-densest satellite in the Solar System among those whose densities are known."},
    { name: "Saturn", moons: ["Mimas", "Enceladus", "Tethys", "Titan", "Rhea"], totalMoonsCount: 62,  size: 6, color: "#E2C543", description: ""},
    { name: "Uranus", moons: ["Triton", "Proteus", "Galatea"], totalMoonsCount: 14,  size: 5, color: "#09f", description: ""},
    { name: "Neptune", moons: ["Miranda", "Ariel", "Titania", "Oberon"], totalMoonsCount: 27,  size: 5, color: "#007ed2", description: ""}
];

export const moonData: IMoon[] = [
    { name: "Mimas", planet: "?", mass: "4×1019(0.05% Moon)", diameter: "396(12% Moon)", orbitalPeriod: "0.9(3% Moon)", orbitalRadius: "185,539((48% Moon))"},
    { name: "Deimos", planet: "?",  mass: "?", diameter: "?", orbitalPeriod: "?", orbitalRadius: "?" },
    { name: "Moon", planet: "?", mass: "?", diameter: "?", orbitalPeriod: "?", orbitalRadius: "?" },
    { name: "Triton", planet: "?", mass: "?", diameter: "?", orbitalPeriod: "?", orbitalRadius: "?" },
    { name: "Titan", planet: "?", mass: "?", diameter: "?", orbitalPeriod: "?", orbitalRadius: "?" },
    { name: "Titania", planet: "?", mass: "?", diameter: "?", orbitalPeriod: "?", orbitalRadius: "?" },
    { name: "Ariel", planet: "?", mass: "?", diameter: "?", orbitalPeriod: "?", orbitalRadius: "?" },
    { name: "Callisto", planet: "?", mass: "?", diameter: "?", orbitalPeriod: "?", orbitalRadius: "?" },
    { name: "Phobos", planet: "?",  mass: "?", diameter: "?", orbitalPeriod: "?", orbitalRadius: "?" },
];

export const moonDataPlanets: any[] = [
    {
        description: "",
        moons: [
            // { diameter: "?", mass: "?", name: "Moon",
            //   orbitalPeriod: "?", orbitalRadius: "?" }
        ],
        name: "Earth",
        sampleMoonsCount: 1,
        totalMoonsCount: 1
    },
    {
        description: "",
        moons: [
            { diameter: "?", mass: "1.08×1016", name: "Fhobos",
              orbitalPeriod: "?", orbitalRadius: "?" },
            // { diameter: "?", mass: "?", name: "Deimos",
            //   orbitalPeriod: "?", orbitalRadius: "?" }
        ],
        name: "Mars",
        sampleMoonsCount: 2,
        totalMoonsCount: 2
    },
    {
        description: "",
        moons: [
            // { diameter: "396(12% Moon)", mass: "4×1019(0.05% Moon)", name: "Mimas",
            //   orbitalPeriod: "0.9(3% Moon)", orbitalRadius: "185,539((48% Moon))" },
            { diameter: "504(14% Moon)", mass: "1.1×1020(0.2% Moon)", name: "Enceladus",
              orbitalPeriod: "1.4(5% Moon)", orbitalRadius: "237,948(62% Moon)" },
            { diameter: "1,062(30% Moon)", mass: "6.2×1020(0.8% Moon)", name: "Tethys",
              orbitalPeriod: "1.9(7% Moon)", orbitalRadius: "294,619(77% Moon)" },
            { diameter: "1,123(32% Moon)", mass: "1.1×1021(1.5% Moon)", name: "Dione",
              orbitalPeriod: "2.7(10% Moon)", orbitalRadius: "377,396(98% Moon)" },
            { diameter: "1,527(44% Moon)", mass: "2.3×1021(3% Moon)", name: "Rhea",
              orbitalPeriod: "4.5(20% Moon)", orbitalRadius: "527,108(137% Moon)" },
            { diameter: "5,149(148% Moon)(75% Mars)", mass: "1.35×1023(180% Moon)", name: "Titan",
              orbitalPeriod: "16(60% Moon)", orbitalRadius: "1,221,870(318% Moon)" },
            { diameter: "1,470(42% Moon)", mass: "1.8×1021(2.5% Moon)", name: "Iapetus",
              orbitalPeriod: "79(290% Moon)", orbitalRadius: "3,560,820(926% Moon)" }
        ],
        name: "Saturn",
        sampleMoonsCount: 7,
        totalMoonsCount: 62
    },
    {
        moons: [
            { diameter: "396(12% Moon)", mass: "4×1019(0.05% Moon)", name: "Mimas",
              orbitalPeriod: "0.9(3% Moon)", orbitalRadius: "185,539((48% Moon))" },
            { diameter: "504(14% Moon)", mass: "1.1×1020(0.2% Moon)", name: "Enceladus",
              orbitalPeriod: "1.4(5% Moon)", orbitalRadius: "237,948(62% Moon)" },
            { diameter: "1,062(30% Moon)", mass: "6.2×1020(0.8% Moon)", name: "Tethys",
              orbitalPeriod: "1.9(7% Moon)", orbitalRadius: "294,619(77% Moon)" },
            { diameter: "1,123(32% Moon)", mass: "1.1×1021(1.5% Moon)", name: "Dione",
              orbitalPeriod: "2.7(10% Moon)", orbitalRadius: "377,396(98% Moon)" },
            { diameter: "1,527(44% Moon)", mass: "2.3×1021(3% Moon)", name: "Rhea",
              orbitalPeriod: "4.5(20% Moon)", orbitalRadius: "527,108(137% Moon)" },
            { diameter: "5,149(148% Moon)(75% Mars)", mass: "1.35×1023(180% Moon)", name: "Titan",
              orbitalPeriod: "16(60% Moon)", orbitalRadius: "1,221,870(318% Moon)" },
            { diameter: "1,470(42% Moon)", mass: "1.8×1021(2.5% Moon)", name: "Iapetus",
              orbitalPeriod: "79(290% Moon)", orbitalRadius: "3,560,820(926% Moon)" }
        ],
        name: "Jupiter",
        sampleMoonsCount: 7,
        totalMoonsCount: 79
    },
    {
        moons: [
            { diameter: "396(12% Moon)", mass: "4×1019(0.05% Moon)", name: "Mimas",
              orbitalPeriod: "0.9(3% Moon)", orbitalRadius: "185,539((48% Moon))" },
            { diameter: "504(14% Moon)", mass: "1.1×1020(0.2% Moon)", name: "Enceladus",
              orbitalPeriod: "1.4(5% Moon)", orbitalRadius: "237,948(62% Moon)" },
            { diameter: "1,062(30% Moon)", mass: "6.2×1020(0.8% Moon)", name: "Tethys",
              orbitalPeriod: "1.9(7% Moon)", orbitalRadius: "294,619(77% Moon)" },
            { diameter: "1,123(32% Moon)", mass: "1.1×1021(1.5% Moon)", name: "Dione",
              orbitalPeriod: "2.7(10% Moon)", orbitalRadius: "377,396(98% Moon)" },
            { diameter: "1,527(44% Moon)", mass: "2.3×1021(3% Moon)", name: "Rhea",
              orbitalPeriod: "4.5(20% Moon)", orbitalRadius: "527,108(137% Moon)" },
            { diameter: "5,149(148% Moon)(75% Mars)", mass: "1.35×1023(180% Moon)", name: "Titan",
              orbitalPeriod: "16(60% Moon)", orbitalRadius: "1,221,870(318% Moon)" },
            { diameter: "1,470(42% Moon)", mass: "1.8×1021(2.5% Moon)", name: "Iapetus",
              orbitalPeriod: "79(290% Moon)", orbitalRadius: "3,560,820(926% Moon)" }
        ],
        name: "Neptune",
        sampleMoonsCount: 7,
        totalMoonsCount: 79
    }
];