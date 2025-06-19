// functions/index.js
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.createMember = functions.https.onCall(async (data, context) => {
  // Optional: Check if the request is made by an authenticated admin
  if (!context.auth || context.auth.token.role !== "admin") {
    throw new functions.https.HttpsError("permission-denied", "Only admins can add members.");
  }

  const { email, password, name, phone, age, gender, address } = data;

  try {
    const userRecord = await admin.auth().createUser({ email, password });

    await admin.firestore().collection("members").doc(userRecord.uid).set({
      memberEmail: email,
      name,
      phone,
      age,
      gender,
      address,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    return { message: "Member created successfully", uid: userRecord.uid };
  } catch (error) {
    throw new functions.https.HttpsError("internal", error.message);
  }
});
