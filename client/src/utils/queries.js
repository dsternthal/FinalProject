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
  query Tutors {
    tutors {
      name
      email
      skills
      _id
    }
  }`;

//ask about profile id and which to use
export const QUERY_STUDENTS = gql`
query Students {
  students {
    _id
    name
    reviews {
      review
      tutor_email
    }
  }
}
`;

export const QUERY_SINGLE_TUTOR = gql`
query Tutor($tutorId: ID!) {
  tutor(tutorId: $tutorId) {
    name
    skills
  }
}`;

export const QUERY_TUTOR_REVIEWS = gql`
query Tutor_review($tutorEmail: String) {
  tutor_review(tutor_email: $tutorEmail) {
    tutor_email
    review
  }
}`