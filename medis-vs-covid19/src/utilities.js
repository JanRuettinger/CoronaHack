import { firestore } from "./firebase";

export const collectIdsAndData = doc => ({ id: doc.id, ...doc.data() })

export const createStudentDocument = async (user, additionalData) => {
  // If there is no user, let's not do this.
  console.log("FAIL")
  if (!user) return;

  console.log("SECCESS")
  console.log(user)
  // Get a reference to the location in the Firestore where the user
  // document may or may not exist.
  const userRef = firestore.doc(`students/${user.uid}`);
  console.log(userRef)

  // Go and fetch a document from that location.
  const snapshot = await userRef.get();
  console.log(snapshot)

  // If there isn't a document for that user. Let's use information
  // that we got from either Google or our sign up form.
  console.log(snapshot.exists)

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error('Error creating user', console.error);
    }
  }

  // Get the document and return it, since that's what we're
  // likely to want to do next.
  return getStudentDocument(user.uid);
};

export const createInstitutionDocument = async (user, additionalData) => {
    // If there is no user, let's not do this.
    if (!user) return;
  
    // Get a reference to the location in the Firestore where the user
    // document may or may not exist.
    const userRef = firestore.doc(`institutions/${user.uid}`);
  
    // Go and fetch a document from that location.
    const snapshot = await userRef.get();
  
    // If there isn't a document for that user. Let's use information
    // that we got from either Google or our sign up form.
    console.log(snapshot.exists)
  
    if (!snapshot.exists) {
      const { displayName, email, photoURL } = user;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          photoURL,
          createdAt,
          ...additionalData,
        });
      } catch (error) {
        console.error('Error creating user', console.error);
      }
    }
  
    // Get the document and return it, since that's what we're
    // likely to want to do next.
    return getInstitutionDocument(user.uid);
  };

export const getStudentDocument = async uid => {
  if (!uid) return null;
  try {
    return await firestore
      .collection('students')
      .doc(uid)
  } catch (error) {
    console.error('Error fetching user', error.message);
  }
};

export const getInstitutionDocument = async uid => {
    if (!uid) return null;
    try {
      return await firestore
        .collection('institutions')
        .doc(uid)
    } catch (error) {
      console.error('Error fetching user', error.message);
    }
  };