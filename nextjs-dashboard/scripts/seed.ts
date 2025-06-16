import { seedUsers, seedCustomers, seedInvoices, seedRevenue } from '../app/seed/route';

async function main() {
  try {
    console.log('Seeding database...');
    await seedUsers();
    await seedCustomers();
    await seedInvoices();
    await seedRevenue();
    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

main();
