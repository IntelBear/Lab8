const formatVolumeIconPath = require("../assets/scripts/main")

describe("Test formatting volume icons", () => {
    test("Volume > 66", () => {
        expect(formatVolumeIconPath(70)).toBe(`./assets/media/icons/volume-level-3.svg`)
    })

    test("Volume > 33", () => {
        expect(formatVolumeIconPath(50)).toBe(`./assets/media/icons/volume-level-2.svg`)
    })

    test("Volume > 0", () => {
        expect(formatVolumeIconPath(20)).toBe(`./assets/media/icons/volume-level-1.svg`)
    })

    test("Volume = 0", () => {
        expect(formatVolumeIconPath(0)).toBe(`./assets/media/icons/volume-level-0.svg`)
    })
})