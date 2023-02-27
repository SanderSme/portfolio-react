import '../css/Profile.css'

const Profile = () => {
  return (
    <section className='profile-container'>
        <h2 className="ProfileHeading">Profile</h2>
        <div className="CardContainer">
          <div className="ProfilePic"></div>
          <div className="InfoContainer">
            <h3 className="Name">Sander Smedbøl</h3>
            <p className="Info">Hi, I'm Sander Smedbøl, a Front End Development student at Noroff in Oslo, Norway. I love creating user-friendly websites that are both functional and visually appealing. When I’m not programming or designing you can find me skiing in the mountains, sailing, and gaming. Let's create something amazing together!</p>
          </div>
        </div>
    </section>
  )
}

export default Profile