describe("My contrived example", () => {
    // These are duplicated in test heirarchy, from having a play with creating my own test adapter can nest with .'s shame
    // their is not a lot of documentation on how to create a test adapter in visual studio 
    it("Should show in the task explorer", () => {
        expect(true).toBe(true);
    });

    describe("nesting", () => {
        it("should work", () => {
            expect(false).toBe(false);
        });
    });

    // These do not get discovered.
    for (let testcase of [1, 2, 3, 4, 5]) {
        describe("Test loops " + i, () => {
            it("should get discovered", () => {
                expect(true).toBe(true);
            });
        });

        it("should get discovered " + i, () => {
            expect(false).toBe(true);
        });
    }

    
    test("yay", () => {

    });
});