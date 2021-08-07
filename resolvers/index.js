const QueryResolvers = require("./query-resolvers");
const dateScalar = require("./scalar-resolvers/Date");
const MutationResolvers = require("./mutations-resolvers");

module.exports = {
  Query: QueryResolvers,
  Date: dateScalar,
  Mutation: MutationResolvers,
};
