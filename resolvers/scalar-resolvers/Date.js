const { GraphQLScalarType } = require("graphql");

const dateScalar = new GraphQLScalarType({
  name: "Date",
  parseValue(value) {
    return new Date(value);
    // return value;
  },
  serialize(value) {
    return new Date(value).toISOString();
  },
});

module.exports = dateScalar;
