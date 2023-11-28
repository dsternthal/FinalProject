import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      skills
    }
  }
`;

//ask about profile id and which to use
export const QUERY_TUTORS = gql`
  query tutorProfiles {
    profiles {
      _id
      name
      skills
    }
  }
`;

//ask about profile id and which to use
export const QUERY_STUDENTS = gql`
  query studentProfiles {
    profiles {
      _id
      name
      reviews
    }
  }
`;