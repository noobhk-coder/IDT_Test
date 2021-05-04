import 'firebase/firestore';
import firebaseApp from './firebase';

let db = firebaseApp.firestore();
const increment = firebaseApp.firestore.FieldValue.increment(1);

async function addFav(uid, FavObject) {

    await db.collection("Favorites").doc(uid).set(FavObject)
        .then(function (docRef) {
            console.log('Doc inserted successfully');
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

async function getFav(uid) {

    let muly = await db.collection("Favorites").doc(uid).get()
        .then(function (docRef) {
            if (!docRef.exists) {
                console.log('Doc not present in favorite');
                return false;
            } else {
                console.log('Doc present in favorite');
                return true;
            }

        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });

    return muly;
}

async function removeFav(uid) {

    await db.collection("Favorites").doc(uid).delete()
        .then(function (docRef) {
            console.log('Doc deleted successfully');
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

async function getAllFav() {

    const returnData = [];
    const snapshot = await db.collection("Favorites").get()
        .then(function (docRef) {
            docRef.forEach((doc) => {
                returnData.push(doc.data());
            });
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });

    return returnData;
}

function incrementView(uid, rName) {

    const recipRef = db.collection('Views').doc(uid);
    recipRef.set({ reads: increment, recipeName: rName }, { merge: true });
}

export {
    addFav,
    getFav,
    removeFav,
    getAllFav,
    incrementView
};