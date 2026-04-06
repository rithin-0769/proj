import ProfileCard from "./components/ProfileCard";
import profileImg from "../IMG_3867.jpg";

const App = () => {
  return (
    <div>
      <ProfileCard
        image={profileImg}
        name="Rithin"
        description="React developer building UI components with Vite."
        github="https://github.com/rithin-0769"
        linkedin="https://www.linkedin.com/"
      />
    </div>
  );
};

export default App;