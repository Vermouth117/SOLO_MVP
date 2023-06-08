/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('flower_info').del();
  await knex('flower_info').insert([
    {
      name: 'Violet Night',
      picture_url: 'https://st3.depositphotos.com/1697659/13086/i/450/depositphotos_130863688-stock-photo-wedding-bouquet-of-flowers.jpg',
      price: 4400,
      quantity: 10,
      posted_date: '2023-01-11',
    },
    {
      name: 'Pink Please',
      picture_url: 'https://st3.depositphotos.com/10654668/15053/i/450/depositphotos_150539182-stock-photo-beautiful-bouquet-of-roses.jpg',
      price: 7700,
      quantity: 10,
      posted_date: '2023-02-14',
    },
    {
      name: 'Elegance',
      picture_url: 'https://st4.depositphotos.com/13324256/25187/i/450/depositphotos_251879457-stock-photo-partial-view-florist-holding-bouquet.jpg',
      price: 11000,
      quantity: 10,
      posted_date: '2023-03-04',
    },
    {
      name: 'Always',
      picture_url: 'https://st4.depositphotos.com/13324256/25187/i/450/depositphotos_251879273-stock-photo-partial-view-florist-holding-bouquet.jpg',
      price: 5500,
      quantity: 10,
      posted_date: '2023-05-05',
    },
    {
      name: 'Princess',
      picture_url: 'https://st.depositphotos.com/1079647/2639/i/450/depositphotos_26398441-stock-photo-wedding-bouquet.jpg',
      price: 8800,
      quantity: 10,
      posted_date: '2023-06-08',
    },
  ]);
};
