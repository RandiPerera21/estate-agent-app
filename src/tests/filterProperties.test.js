import { filterProperties } from "../utils/filterProperties";

test("filters by minimum price", () => {
  const data = [{ price: 300 }, { price: 700 }];
  const result = filterProperties(data, { minPrice: 500 });
  expect(result.length).toBe(1);
});
