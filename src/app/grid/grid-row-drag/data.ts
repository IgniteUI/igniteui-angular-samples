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
}

export const planetData: IPlanet[] = [
    { name: "Mercury", moons: [], totalMoonsCount: 0, size: 1.5, color: "#884800", description: "Both Mercury and Venus have no orbiting satellites."},
    { name: "Venus", moons: [], totalMoonsCount: 0, size: 2.75, color: "#ff7000", description: "Both Mercury and Venus have no orbiting satellites."},
    { name: "Earth", moons: ["Moon"], totalMoonsCount: 1, size: 3, color: "#006fff", description: "Moon is the fifth-largest natural satellite in the Solar System, and the largest among planetary satellites relative to the size of the planet that it orbits (its primary). The Moon is after Jupiter's satellite 'Io' the second-densest satellite in the Solar System among those whose densities are known."},
    { name: "Mars", moons: ["Phobos", "Deimos"], totalMoonsCount: 2, size: 2, color: "#ff3200", description: "The two moons of Mars are Phobos and Deimos. Both were discovered by Asaph Hall in August 1877 and are named after the Greek mythological twin characters Phobos (panic/fear) and Deimos (terror/dread) who accompanied their father Ares into battle. Ares, god of war, was known to the Romans as Mars."},
    { name: "Jupiter", moons: ["Callisto", "Ganymede", "Io", "Europa"], totalMoonsCount: 79, size: 7, color: "#fac080", description: "Io, Europa, Ganymede, and Callisto, called the Galilean moons, are the four largest moons of Jupiter. They were first seen by Galileo Galilei in December 1609 or January 1610, and recognized by him as satellites of Jupiter in March 1610. They were the first objects found to orbit another planet. There are 79 known moons of Jupiter."},
    { name: "Saturn", moons: ["Mimas", "Enceladus", "Tethys", "Titan", "Rhea"], totalMoonsCount: 62,  size: 6, color: "#ffb564", description: "The modern names for Saturnian moons were suggested by John Herschel in 1847. He proposed to name them after mythological figures associated with the Roman titan of time, Saturn (equated to the Greek Cronus). In particular, the then known seven satellites were named after Titans, Titanesses and Giants—brothers and sisters of Cronus. There are 62 known moons of Saturn."},
    { name: "Uranus", moons: ["Triton", "Proteus", "Galatea"], totalMoonsCount: 14,  size: 5, color: "#7fbbfa", description: "Uranus, the seventh planet of the Solar System, has 27 known moons, all of which are named after characters from the works of William Shakespeare and Alexander Pope. The first two moons to be discovered were Titania and Oberon, which were spotted by Sir William Herschel on January 11, 1787, six years after he had discovered the planet itself."},
    { name: "Neptune", moons: ["Miranda", "Ariel", "Titania", "Oberon"], totalMoonsCount: 27,  size: 5, color: "#3e6e9f", description: "Neptune has 14 known moons, which are named for minor water deities in Greek mythology. By far the largest of them is Triton, discovered by William Lassell on October 10, 1846, 17 days after the discovery of Neptune itself."}
];

export const moonData: IMoon[] = [
    { name: "Mimas", planet: "?", mass: "0.0005 x Moon", diameter: "0.12 x Moon", orbitalPeriod: "0.03 x Moon"},
    { name: "Deimos", planet: "?",  mass: "0.0000000272 x Moon", diameter: "0.003 x Moon", orbitalPeriod: "1.11 x Moon" },
    { name: "Moon", planet: "?", mass: "1 x 7342 exatonnes", diameter: "1 x 3476.2 km", orbitalPeriod: "1 x 27d 7h 43min 11.5s"},
    { name: "Triton", planet: "?", mass: "0.6 x Moon", diameter: "0.7 x Moon", orbitalPeriod: "?" },
    { name: "Titan", planet: "?", mass: "1.8 x Moon", diameter: "1.48 x Moon", orbitalPeriod: "0.6 x Moon" },
    { name: "Titania", planet: "?", mass: "0.48 x Moon", diameter: "0.45 x Moon", orbitalPeriod: "0.21 x Moon" },
    { name: "Ariel", planet: "?", mass: "0.18 x Moon", diameter: "0.33 x Moon", orbitalPeriod: "?" },
    { name: "Callisto", planet: "?", mass: "1.5 x Moon", diameter: "1.4 x Moon", orbitalPeriod: "0.61 x Moon" },
    { name: "Phobos", planet: "?",  mass: "0.000000147 x Moon", diameter: "0.0063 x Moon", orbitalPeriod: "0.28 x Moon" },
    { name: "Enceladus", planet: "?",  mass: "0.002 x Moon", diameter: "0.14 x Moon", orbitalPeriod: "0.05 x Moon" },
    { name: "Miranda", planet: "?",  mass: "0.009 x Moon", diameter: "0.13 x Moon", orbitalPeriod: "?" },
    { name: "Ganymede", planet: "?",  mass: "2 x Moon", diameter: "1.5 x Moon", orbitalPeriod: "0.26 x Moon" },
    { name: "Proteus", planet: "?",  mass: "0.00059 x Moon", diameter: "0.12 x Moon", orbitalPeriod: "0.04 x Moon" },
    { name: "Io", planet: "?",  mass: "1.2 x Moon", diameter: "1.05 x Moon", orbitalPeriod: "0.07 x Moon" },
    { name: "Tethys", planet: "?",  mass: "0.008 x Moon", diameter: "0.3 x Moon", orbitalPeriod: "0.07 x Moon" },
    { name: "Oberon", planet: "?",  mass: "0.41 x Moon", diameter: "0.43 x Moon", orbitalPeriod: "?" },
    { name: "Galatea", planet: "?",  mass: "0.000028 x Moon", diameter: "0.05 x Moon", orbitalPeriod: "0.015 x Moon" },
    { name: "Rhea", planet: "?",  mass: "0.03 x Moon", diameter: "0.44 x Moon", orbitalPeriod: "0.2 x Moon" },
    { name: "Europa", planet: "?",  mass: "0.65 x Moon", diameter: "0.9 x Moon", orbitalPeriod: "0.13 x Moon" }
];
