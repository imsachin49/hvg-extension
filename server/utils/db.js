const { PrismaClient } = require("@prisma/client");


const isProduction = process.env.NODE_ENV === "production";


const db = global.prisma || new PrismaClient();

if (!isProduction) {
  global.prisma = db;
}

module.exports = db;
