import Header from '../components/ProfileSkills/Header';
import Content from '../components/ProfileSkills/Content';

import '../styles/Skills.css';

const ProfileSkills = ({ title, description, data }) => {
    return (
        <div className='profile-skills'>
            <div className='container'>
                <Header title={title} />
                <Content data={data} />
            </div>
        </div>
    );
}

export default ProfileSkills;