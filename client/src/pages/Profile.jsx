import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import SkillsList from '../components/SkillsList';
import SkillForm from '../components/SkillForm';
import ReviewForm from '../components/ReviewForm';


import { QUERY_SINGLE_TUTOR, QUERY_ME, QUERY_TUTOR_REVIEWS  } from '../utils/queries';

import Auth from '../utils/auth';

const Tutor = () => {
  const { tutorId, tutor_email } = useParams();

  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(
    tutorId ? QUERY_SINGLE_TUTOR : QUERY_ME,
    {
      variables: { tutorId: tutorId },
    }
  );

  const {loading:tutor_loading , data:tutor_data} = useQuery (QUERY_TUTOR_REVIEWS,{
    variables:{
      tutor_email
    }
  });

  const tutorReviews = tutor_data?.tutor_review || []

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  const tutor = data?.me || data?.tutor || {};
console.log(Auth.getProfile())
  // Use React Router's `<Navigate />` component to redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === tutorId) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!tutor?.name) {
    return (
      <h4>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <h2 className="card-header">
        {tutorId ? `${tutor.name}'s` : 'Your'} student experiences:
      </h2>
      <SkillsList
          skills={tutor.skills}
          isLoggedInUser={!tutorId && true}
        />
        {tutorReviews?.length > 0 && (
        <ReviewsList
        reviews={tutorReviews}
        />
      )}
      {Auth.getProfile().data.roleType=== "Student" ? (
        <>
        

      <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <ReviewForm profileId={Auth.getProfile().data._id} />
      </div>
        </>
      ):(
        <>
{console.log(tutorId)}
      <div className="my-4 p-4" style={{ border: `1px ${!tutorId?"dotted":""} #1a1a1a` }}>
        {!tutorId? <SkillForm profileId={Auth.getProfile().data._id} />:""}
      </div>
        </>
      )}

    </div>
  );
};

export default Tutor;
