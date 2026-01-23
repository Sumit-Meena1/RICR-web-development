export const UserUpdate = async (req, res, next) => {
  try {
    const { fullName, email, mobileNumber } = req.body;
    const currentUser = req.user;
    if (!fullName || !email || !mobileNumber) {
      const error = new Error("All Fields Required");
      error.satatusCode = 400;
      return next(error);
    }
    console.log("Old", currentUser);
    currentUser.fullName = fullName;
    currentUser.email = email;
    currentUser.mobileNumber = mobileNumber;
    await currentUser.save();

    console.log("New", currentUser);
    res
      .status(200)
      .json({ message: "User Updated Successfully", data: currentUser });

    console.log("updating the user");
  } catch (error) {}
};
