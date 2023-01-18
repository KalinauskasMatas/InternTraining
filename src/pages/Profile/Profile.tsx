import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import ProfileViewer from "../../components/ProfileViewer/ProfileViewer";
import { useAppSelector } from "../../redux/hooks";

const Profile = () => {
  const currentUser = useAppSelector((state) => state.currentUser);
  return (
    <div className="body-wrapper">
      <Header title="Movie rental" />
      <NavBar />
      <ProfileViewer profile={currentUser} />
      <Footer />
    </div>
  );
};

export default Profile;
