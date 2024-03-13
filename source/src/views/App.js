import PreviousWorks from './PreviousWorks';
import ProfileSkills from './ProfileSkills';
import { works } from '../data/works';
import { skills } from '../data/skills';

import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <>
            <ProfileSkills
                title={'Technical Skills'}
                description={''}
                data={skills}
            />
            <PreviousWorks
                title={'Previous Works'}
                description={'&emsp;I possess extensive expertise as a seasoned full-stack developer with over 10 years of experience. I have built and published numerous projects, including websites and mobile applications, across various domains such as entertainment, social media, finance, e-commerce, real estate, healthcare, and more. I have successfully completed 17 projects, both large and small in scale.'}
                data={works}
            />
        </>
    );
}

export default App;