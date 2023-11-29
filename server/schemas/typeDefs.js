const typeDefs = `
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    skills: [String]!
    reviews: [Review]!
  }
  type Review{
    review: String!
    tutor_email: String!

}
  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    students: [Profile]!
    student(studentId: ID!): Profile
    tutors: [Profile]!
    tutor(tutorId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
    tutor_review(tutor_email:String):[Review]
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addReview(review: String!): Profile
    addSkill(skill: String!): Profile
    removeProfile: Profile
    removeSkill(skill: String!): Profile
  }
`;

module.exports = typeDefs;
