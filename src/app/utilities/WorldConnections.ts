import { WorldLocations } from "./WorldLocations";
import { WorldUtility } from "./WorldUtility";

export class WorldConnections {

    public static getFlights(): any[] {
        if (this.flights.length === 0) { this.init(); }
        return this.flights;
    }

    public static getAirports(): any[] {
        if (this.airports.length === 0) { this.init(); }
        return this.airports;
    }

    public static comparePopulation(a: any, b: any): number {
        if (a.pop < b.pop) {
            return 1;
        }
        if (a.pop > b.pop) {
            return -1;
        }
        return 0;
    }

    public static init() {

        const cities: any[] = WorldLocations.getAll();
        cities.sort(this.comparePopulation);
        const count = cities.length;
        const minDistance = 200;
        const maxDistance = 9000;
        const flightsLimit = 1500;
        let flightsCount  = 0;

        for (let i = 0; i < count; i++) {
            const origin = cities[i];
            let connectionsCount = 0;
            const connectionsMax = Math.min(20, Math.round(origin.pop * 4));

            for (let ii = 0; ii < count; ii++) {
                const dest = cities[ii];
                if (origin.name !== dest.name) {
                    const route = [origin.name, dest.name].sort().join("-");
                    const routeIsValid = this.flightsLookup.indexOf(route) === -1;
                    const distance = Math.round(WorldUtility.calcDistance(origin, dest));
                    const distanceIsValid = distance > minDistance && distance < maxDistance;
                    const pass = Math.round((Math.random() * 200)) + 150;
                    const time = distance / 800;
                    const trafficIsValid = origin.pop > 3 && dest.pop > 1.0;

                    if (routeIsValid && distanceIsValid && trafficIsValid) {
                         this.flightsLookup.push(route);

                         const paths = WorldUtility.calcPaths(origin, dest);
                         flightsCount++;
                         connectionsCount++;
                         const id = origin.name.substring(0, 3).toUpperCase() + "-" + flightsCount;
                         const flight = { id, origin, dest, time, passengers: pass, distance, points: paths };
                         this.flights.push(flight);
                    }
                    if (connectionsCount > connectionsMax) {
                        break;
                    }
                }
            }
            if (flightsCount > flightsLimit)  {
                break;
            }
        }

        for (const flight of this.flights) {
            this.addAirport(flight.origin);
            this.addAirport(flight.dest);
        }

        this.airports = Array.from(this.airportsLookup.values());
    }

    public static getGridlines(): any[] {
        const gridlines = [];
        // longitude lines
        for (let lon = -180; lon <= 180; lon += 30) {

            const line: any[] = [{x: lon, y: -90}, {x: lon, y: 90}];
            const points: any[] = [line];

            const coordinateLine = {points,
// tslint:disable-next-line: object-literal-sort-keys
                                    degree: lon,
                                    direction: lon > 0 ? "E" : "W"
              };
            gridlines.push(coordinateLine);
        }
        // latitude lines
        for (let lat = -90; lat <= 90; lat += 30) {

            const line: any[] = [{x: -180, y: lat}, {x: 180, y: lat}];
            const points: any[] = [line];
            const coordinateLine = {points,
// tslint:disable-next-line: object-literal-sort-keys
                                    degree: lat,
                                    direction: lat > 0 ? "N" : "S"
              };
            gridlines.push(coordinateLine);
        }
        return gridlines;
    }

    private static airports: any[] = [];
    private static airportsLookup = new Map<string, any>();

    private static flights: any[] = [];
    private static flightsLookup: string[] = [];

    private static addAirport(city: any) {
        if (this.airportsLookup.has(city.name)) {
            this.airportsLookup.get(city.name).flights += 1;
        } else {
            const airport = Object.assign({flights: 1}, city);
            this.airportsLookup.set(city.name, airport);
        }
    }
}
