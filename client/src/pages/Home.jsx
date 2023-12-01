import { useQuery } from '@apollo/client';

import TutorList from '../components/TutorList';

import { QUERY_TUTORS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_TUTORS);
  const tutors = data?.tutors || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <TutorList
              tutors={tutors}
              title="Find the tutor that fits your needs"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
