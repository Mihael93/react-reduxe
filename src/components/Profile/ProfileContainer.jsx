import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profile-reducer";
import { useLocation, useNavigate, useParams } from 'react-router-dom';


let withRouter = (Component) => {
   function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
         <Component
            {...props}
            router={{ location, navigate, params }}
         />
      );
   }
   return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

   componentDidMount() {
      let userId = this.props.router.params.userId;
      if (!userId) {
         userId = 2;
      }
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
         .then(response => {
            this.props.setUserProfile(response.data);
         });
   }

   render() {
      return (
         <div>
            <Profile {...this.props} profile={this.props.profile} />
         </div >
      )
   }
}

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
})

// let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,
   {
      setUserProfile
   }
)(withRouter(ProfileContainer));