import Test from "../components/Test.html";

describe("App Component", () => {
  it("should render", () => {
    const el = document.createElement("div");
    new Test({
      target: el
    });
    expect(el.textContent).toBe("Hello World!");
  });
});
