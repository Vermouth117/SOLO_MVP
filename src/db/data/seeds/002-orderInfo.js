/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('order_info').del();
  await knex('order_info').insert([
    {
      flower_id: 2,
      flower_name: "Pink Please",
      customer_name: '森﨑陽平',
      picture_url: 'https://st3.depositphotos.com/10654668/15053/i/450/depositphotos_150539182-stock-photo-beautiful-bouquet-of-roses.jpg',
      price: 7700,
      quantity: 1,
      date: '2023-03-14',
    },
  ]);
};
