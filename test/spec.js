
const knex = require("../src/db/knex");
const { expect } = require("chai");

describe("knex response", () => {
  it("should return an array", async () => {
    const allFlowerList = await knex
      .select("*")
      .from("flower_info");
    expect(allFlowerList).to.be.an.instanceof(Array);
  });

  it("should accept arguments", async () => {
    const allFlowerList = await knex
      .select("*")
      .from("flower_info");
    expect(allFlowerList.length).to.be.at.most(5);
  });
});
