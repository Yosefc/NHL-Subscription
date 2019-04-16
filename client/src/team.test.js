import { getTeam, getTeams } from "./teams";

describe("Team name", () => {
    test("Should equal Ottawa Senators", () => {
        expect(getTeam(9)).toBe("Ottawa Senators");
    });

    test("Should return a string", () => {
        expect(typeof getTeam(52)).toBe("string");
    });
})

describe("List of Teams", () => {
    test("Should return an array", () => {
        expect(typeof getTeams()).toBe("object");
    });

    test("Happy path", () => {
        expect(getTeams().filter(team => team.id == 1)[0].name).toBe("New Jersey Devils")
    })
})

