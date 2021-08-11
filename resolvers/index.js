// pull in resolvers
const QueryResolvers = require("./query-resolvers");
const dateScalar = require("./scalar-resolvers/Date");
const MutationResolvers = require("./mutations-resolvers");
//export
module.exports = {
  Query: QueryResolvers,
  Date: dateScalar,
  Mutation: MutationResolvers,
};
