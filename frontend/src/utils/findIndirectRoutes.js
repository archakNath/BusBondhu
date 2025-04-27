// findIndirectRoutes.js
import connectingStops from "../data/connecting_stops.js";

/**
 * Attempts to find a route from source to destination via a major connecting stop.
 * Returns a 2-leg route with 1 transfer if found.
 */
export function findIndirectRoutes(source, destination, allRoutes) {
    const routeBetween = (from, to) => {
        return allRoutes.find(route => {
            const stops = [route.location1, ...(route.via || []), route.location2];
            return stops.includes(from) && stops.includes(to);
        });
    };

    for (const hub of connectingStops) {
        const stopName = hub.name;

        const routeToHub = routeBetween(source, stopName);
        const routeFromHub = routeBetween(stopName, destination);

        if (routeToHub && routeFromHub) {
            return {
                path: [
                    { from: source, to: stopName, route: routeToHub.route },
                    { from: stopName, to: destination, route: routeFromHub.route }
                ],
                transfers: 1
            };
        }
    }

    return null; // No valid indirect route found
}
