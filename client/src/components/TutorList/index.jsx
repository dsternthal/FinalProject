import { Link } from 'react-router-dom';

const TutorList = ({ tutors, title }) => {
  if (!tutors.length) {
    return <h3>No Tutors Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {tutors &&
          tutors.map((tutor) => (
            <div key={tutor._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {tutor.name} <br />
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                    currently has {tutor.skills ? tutor.skills.length : 0}{' '}
                    skill
                    {tutor.skills && tutor.skills.length === 1 ? '' : 's'}
                  </span>
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                  {' '}& currently has {tutor.reviews ? tutor.reviews.length : 0}{' '}
                    review
                    {tutor.reviews && tutor.reviews.length === 1 ? '' : 's'}
                  </span>
                </h4>

                <Link
                  className="btn btn-block btn-squared btn-light text-dark"
                  to={`/profiles/${tutor._id}/${tutor.email}`}
                >
                  Request a meeting or share your experience.
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TutorList;
