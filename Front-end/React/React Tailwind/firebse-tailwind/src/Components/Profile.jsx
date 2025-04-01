// import React, { useState, useEffect } from "react";
// import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
// import { db } from "../config/firebase";

// const ProfileSetup = ({ userId }) => {
//   const [profile, setProfile] = useState({
//     name: "",
//     email: "",
//     age: "",
//     city: "",
//   });

//   // Fetch user profile data
//   useEffect(() => {
//     const fetchProfile = async () => {
//       if (!userId) return;
//       const userRef = doc(db, "users", userId);
//       const docSnap = await getDoc(userRef);

//       if (docSnap.exists()) {
//         setProfile(docSnap.data());
//       } else {
//         console.log("No profile found.");
//       }
//     };

//     fetchProfile();
//   }, [userId]);

//   // Handle input change
//   const handleChange = (e) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value });
//   };

//   // Save or Update Profile
//   const saveProfile = async () => {
//     if (!userId) return alert("User ID missing!");

//     try {
//       const userRef = doc(db, "users", userId);
//       await setDoc(userRef, profile);
//       alert("Profile saved successfully!");
//     } catch (error) {
//       console.error("Error saving profile:", error);
//     }
//   };

//   // Update specific fields
//   const updateProfile = async () => {
//     if (!userId) return alert("User ID missing!");

//     try {
//       const userRef = doc(db, "users", userId);
//       await updateDoc(userRef, { city: profile.city, age: profile.age });
//       alert("Profile updated successfully!");
//     } catch (error) {
//       console.error("Error updating profile:", error);
//     }
//   };

//   return (
//     <div style={{ padding: 20, maxWidth: 400, margin: "auto", textAlign: "center", border: "1px solid #ddd", borderRadius: 10 }}>
//       <h2>Profile Setup</h2>
//       <input type="text" name="name" placeholder="Name" value={profile.name} onChange={handleChange} /><br /><br />
//       <input type="email" name="email" placeholder="Email" value={profile.email} onChange={handleChange} /><br /><br />
//       <input type="number" name="age" placeholder="Age" value={profile.age} onChange={handleChange} /><br /><br />
//       <input type="text" name="city" placeholder="City" value={profile.city} onChange={handleChange} /><br /><br />

//       <button onClick={saveProfile}>Save Profile</button> &nbsp;
//       <button onClick={updateProfile}>Update Profile</button>
//     </div>
//   );
// };

// export default ProfileSetup;
